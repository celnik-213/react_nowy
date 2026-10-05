function Temperatura() {

    const przelicznik = (celsjusz) => {
        let farenheit = celsjusz * 9 / 5 + 32;
        return farenheit;
    };
    const opiszPogode = (celsjusz) => {
        let pogoda;
        if (celsjusz < 0) {
            pogoda = "mróz";
            return pogoda;
        }else if (celsjusz >= 0 && celsjusz <= 15) {
            pogoda = "chłodno"
            return pogoda;
        }else if (celsjusz > 15 && celsjusz <= 25) {
            pogoda = "ciepło"
            return pogoda;
        }else if (celsjusz > 25) {
            pogoda = "upał"
            return pogoda;
        }
    }


    return (
        <div>
            <p>Farenheit: {przelicznik(-16)} </p>
            <p>Pogoda opisowo: {opiszPogode(-15)} </p>
        </div>
    );
}

export default Temperatura;
