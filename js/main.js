document.addEventListener("DOMContentLoaded", function () {
  // --- ELEMENTOS GLOBAIS ---
  const modal = document.getElementById("solution-modal");
  const modalCloseBtn = document.getElementById("modal-close-btn");
  const modalBody = document.getElementById("modal-body");

  // =========================================================================
  // INICIALIZAÇÃO GERAL
  // =========================================================================
  function init() {
    // Funções globais de UI
    setupMobileMenu();
    setupScrollToTop();
    setupThemeToggle();

    // Renderizadores de conteúdo dinâmico de cada página
    renderHomePage();
    initDeveloperPage();
    initPricingPage();

    // Animações devem ser as últimas a serem preparadas, após o conteúdo existir
    setupScrollAnimations();

    // Listeners do Modal
    if (modal) {
      modalCloseBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => {
        if (e.target === modal) {
          // Fecha se clicar fora do conteúdo
          closeModal();
        }
      });
    }
  }

  // =========================================================================
  // LÓGICA DO MODAL DE PRODUTOS
  // =========================================================================
  function openModal(productId) {
    const solution = solutionsData.find(s => s.id === productId);
    if (!solution || !modal) return;

    const featuresHTML = solution.mainFeatures.map(feature => `<li>✓ ${feature}</li>`).join('');

    // ALTERADO de <img> para <i>
    const modalHTML = `
        <i class="modal-icon ${solution.icon}"></i>
        <h2 class="modal-title">${solution.title}</h2>
        <p class="modal-description">${solution.description}</p>
        <ul class="modal-features">${featuresHTML}</ul>
        <a href="${solution.pageUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary modal-cta">Visitar Site do Produto &rarr;</a>
    `;

    modalBody.innerHTML = modalHTML;
    document.body.classList.add('modal-open');
    modal.style.display = 'flex';
}

  function closeModal() {
    if (!modal) return;
    document.body.classList.remove("modal-open");
    modal.style.display = "none";
  }

  // =========================================================================
  // RENDERIZADORES DE PÁGINA
  // =========================================================================
  function renderHomePage() {
    const container = document.getElementById('product-grid-container');
    if (!container) return;

    container.innerHTML = '';
    solutionsData.forEach(solution => {
        const comingSoonClass = solution.isComingSoon ? 'is-coming-soon' : '';

        // ALTERADO de <img> para <i>
        const cardHTML = `
            <div class="solution-card fade-in-section ${comingSoonClass}" data-id="${solution.id}">
                <i class="solution-icon ${solution.icon}"></i>
                <h3 class="solution-title">${solution.title}</h3>
                <p class="solution-description">${solution.description}</p>
                <button class="card-action-btn">${solution.isComingSoon ? 'Em Breve' : 'Ver Detalhes'}</button>
            </div>`;
        container.innerHTML += cardHTML;
    });

    container.addEventListener('click', (e) => {
        const card = e.target.closest('.solution-card');
        if (card && !card.classList.contains('is-coming-soon')) {
            openModal(card.dataset.id);
        }
    });
}

  function initPricingPage() {
    const pricingContainer = document.getElementById(
      "pricing-selector-container"
    );
    if (!pricingContainer) return; // Só executa na pág de preços

    const pricingGrid = document.getElementById("pricing-grid-container");

    const activeSolutions = solutionsData.filter(
      (s) => !s.isComingSoon && s.pricingTiers && s.pricingTiers.length > 0
    );

    activeSolutions.forEach((solution) => {
      pricingContainer.innerHTML += `<button class="product-selector-btn" data-id="${solution.id}">${solution.title}</button>`;
    });
    if (packagesData && packagesData.length > 0) {
      pricingContainer.innerHTML += `<button class="product-selector-btn" data-id="packages">Pacotes Completos</button>`;
    }

    pricingContainer.addEventListener("click", (e) => {
      const button = e.target.closest(".product-selector-btn");
      if (!button) return;

      pricingContainer
        .querySelectorAll(".product-selector-btn")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderPricingTiersFor(button.dataset.id, pricingGrid);
    });

    if (pricingContainer.firstChild) {
      pricingContainer.firstChild.click();
    }
  }

  function renderPricingTiersFor(id, container) {
    container.innerHTML = "";
    let tiers =
      id === "packages"
        ? packagesData
        : solutionsData.find((s) => s.id === id)?.pricingTiers || [];

    tiers.forEach((tier) => {
      const featuredClass = tier.isFeatured ? "featured" : "";
      const featuredTag = tier.isFeatured
        ? '<span class="featured-tag">Recomendado</span>'
        : "";
      const pricePeriod = tier.period
        ? `<span class="price-period">${tier.period}</span>`
        : "";
      const featuresList = tier.features.map((f) => `<li>${f}</li>`).join("");

      container.innerHTML += `
                <div class="pricing-card ${featuredClass}">
                    ${featuredTag}<h3>${tier.name}</h3><p class="price">${
        tier.price
      }${pricePeriod}</p>
                    <p class="price-desc">${
                      tier.description
                    }</p><ul>${featuresList}</ul>
                    <a href="${tier.ctaLink}" class="btn ${
        tier.isFeatured ? "btn-primary" : "btn-secondary"
      }">${tier.ctaText}</a>
                </div>`;
    });
  }

  function initDeveloperPage() {
    const devPage = document.getElementById("developer-page-content");
    if (!devPage) return; // Só executa na pág de dev

    const selector = devPage.querySelector("#product-selector-container");
    const display = devPage.querySelector("#code-display-container");

    const solutionsWithCode = solutionsData.filter(
      (s) => !s.isComingSoon && s.codeExamples && s.codeExamples.length > 0
    );
    solutionsWithCode.forEach((s) => {
      selector.innerHTML += `<button class="product-selector-btn" data-id="${s.id}">${s.title}</button>`;
    });

    selector.addEventListener("click", (e) => {
      const button = e.target.closest(".product-selector-btn");
      if (!button) return;
      selector
        .querySelectorAll(".product-selector-btn")
        .forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      renderCodeExamplesFor(button.dataset.id, display);
    });

    if (selector.firstChild) {
      selector.firstChild.click();
    }
  }

  function renderCodeExamplesFor(id, container) {
    const solution = solutionsData.find((s) => s.id === id);
    if (
      !solution ||
      !solution.codeExamples ||
      solution.codeExamples.length === 0
    ) {
      container.innerHTML =
        "<p>Exemplos de código para esta solução estarão disponíveis em breve.</p>";
      return;
    }

    const tabs = solution.codeExamples
      .map(
        (ex, i) =>
          `<button class="tab-link ${
            i === 0 ? "active" : ""
          }" data-tab="${id}-${ex.language}">${ex.language}</button>`
      )
      .join("");
    const contents = solution.codeExamples
      .map(
        (ex, i) =>
          `<div id="${id}-${ex.language}" class="tab-content ${
            i === 0 ? "active" : ""
          }"><pre><code>${ex.code.trim()}</code></pre></div>`
      )
      .join("");

    container.innerHTML = `<div class="code-example-container"><div class="code-tabs">${tabs}</div><div class="code-content">${contents}</div></div>`;
    setupLanguageTabs(container);
  }

  function setupLanguageTabs(container) {
    const tabs = container.querySelector(".code-tabs");
    if (!tabs) return;
    tabs.addEventListener("click", (e) => {
      const tab = e.target.closest(".tab-link");
      if (!tab) return;
      tabs
        .querySelectorAll(".tab-link")
        .forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");
      const contentId = tab.dataset.tab;
      container
        .querySelectorAll(".tab-content")
        .forEach((c) => c.classList.remove("active"));
      container.querySelector(`#${contentId}`).classList.add("active");
    });
  }

  // =========================================================================
  // FUNÇÕES UTILITÁRIAS
  // =========================================================================
  function setupMobileMenu() {
    const btn = document.querySelector(".mobile-menu-button"),
      nav = document.querySelector(".main-nav");
    if (btn && nav)
      btn.addEventListener("click", () => nav.classList.toggle("active"));
  }
  function setupScrollToTop() {
    const btn = document.getElementById("scrollToTopBtn");
    if (btn) {
      window.onscroll = () =>
        (btn.style.display =
          document.body.scrollTop > 100 ||
          document.documentElement.scrollTop > 100
            ? "block"
            : "none");
      btn.addEventListener("click", () =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      );
    }
  }
  function setupThemeToggle() {
    const btn = document.getElementById("theme-toggle"),
      body = document.body;
    const applyTheme = (t) => {
      body.className = t;
      localStorage.setItem("theme", t);
    };
    if (btn)
      btn.addEventListener("click", () =>
        applyTheme(
          body.classList.contains("dark-theme") ? "light-theme" : "dark-theme"
        )
      );
    applyTheme(localStorage.getItem("theme") || "dark-theme");
  }
  function setupScrollAnimations() {
    const elements = document.querySelectorAll(".fade-in-section");
    if (elements.length === 0) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
  }

  // --- RODA TUDO ---
  init();
});
