// logo-component.js

class MoviParkLogo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                .logo-container {
                    position: relative;
                    width: 120px;       /* ancho del círculo */
                    height: 120px;      /* alto del círculo */
                    margin: 0 auto;
                }

                .circle {
                    width: 100%;
                    height: 100%;
                    background: #facc15;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: visible;  /* permite que las letras sobresalgan */
                }

                .logo-text {
                    font-size: 3rem;      /* letras grandes */
                    color: #0f172a;
                    font-weight: bold;
                    margin: 0;
                    text-align: center;
                    white-space: nowrap;  /* evita que se divida en varias líneas */
                }

                /* Responsive */
                @media (max-width: 480px) {
                    .logo-container {
                        width: 90px;
                        height: 90px;
                    }
                    .logo-text {
                        font-size: 2rem;
                    }
                }
            </style>

            <div class="logo-container">
                <div class="circle">
                    <h1 class="logo-text">MoviPark</h1>
                </div>
            </div>
        `;
    }
}

customElements.define('movipark-logo', MoviParkLogo);