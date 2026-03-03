// logo-component.js

class MoviParkLogo extends HTMLElement {
    constructor() {
        super();

        // Shadow DOM: encapsula el logo y los estilos
        const shadow = this.attachShadow({ mode: 'open' });

        // HTML + CSS del logo
        shadow.innerHTML = `
            <style>
                .logo-container {
                    position: relative;
                    text-align: center;
                }

                .circle {
                    width: 120px;
                    height: 120px;
                    background: #facc15;
                    border-radius: 50%;
                    margin: 0 auto;
                    position: relative;
                    z-index: 1;
                }

                .logo-text {
                    font-size: 2.5rem;
                    color: #0f172a;
                    font-weight: bold;
                    position: relative;
                    top: -40px; /* sobresale del círculo */
                    z-index: 2;
                }

                /* Opcional: responsive */
                @media (max-width: 480px) {
                    .circle {
                        width: 90px;
                        height: 90px;
                    }
                    .logo-text {
                        font-size: 2rem;
                        top: -30px;
                    }
                }
            </style>

            <div class="logo-container">
                <div class="circle"></div>
                <h1 class="logo-text">MoviPark</h1>
            </div>
        `;
    }
}

// Registrar el componente
customElements.define('movipark-logo', MoviParkLogo);