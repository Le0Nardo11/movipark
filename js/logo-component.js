class MoviParkLogo extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                .logo-container {
                    position: relative;
                    width: 120px;
                    height: 120px;
                    margin: 0 auto;
                }

                .circle {
                    width: 100%;
                    height: 100%;
                    background: #080808;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    overflow: visible;
                }

                .logo-text {
                    font-size: 4rem; /* letras grandes para sobresalir */
                    font-weight: bold;
                    color: #0f172a;
                    margin: 0;
                    text-align: center;
                    white-space: nowrap;
                    line-height: 1;
                    /* permite que las letras sobresalgan visualmente */
                    transform: translateX(0) translateY(0);
                }

                /* Responsive */
                @media (max-width: 480px) {
                    .logo-container {
                        width: 90px;
                        height: 90px;
                    }
                    .logo-text {
                        font-size: 3rem;
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