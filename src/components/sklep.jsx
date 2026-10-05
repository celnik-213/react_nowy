function Sklep() {
    return (
        <div>
            <style jsx>{`
                header {
                    font-size: 24px;
                    color: white;
                }

                a {
                    text-decoration: none;
                    color: white;
                    padding: 20px;
                }

                #naglowek {
                    background-color: #34495e;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0 20px;
                    height: 50px;
                }

                .linki {
                    display: flex;
                }
                a:hover {
                    color: #1abc9c;
                }
            `}</style>

            <div id="naglowek">
                <img src="src/assets/images.jpg" alt="Naglowek" height="50" width="100" />
                <header>Sklep</header>

                <div id="linki">
                    <a href="#start">Start</a>
                    <a href="#oferta">Oferta</a>
                    <a href="#kontakt">Kontakt</a>
                </div>
            </div>
        </div>
    );
}

export default Sklep;
