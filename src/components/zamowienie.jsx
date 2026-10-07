function Zamowienia() {
    const zamowienia = [
        { produkt: "Klawiatura", cena: 129, ilosc: 2 },
        { produkt: "Monitor", cena: 899, ilosc: 1 },
        { produkt: "Myszka", cena: 79, ilosc: 3 },
    ];

    const podwojone = zamowienia.map(({ produkt, cena, ilosc }) => ({
        produkt,
        wartosc: cena * ilosc
    }));

    function zlicz() {
        return podwojone.reduce(
            (suma, { wartosc }) => suma + wartosc,
            0
        );
    }

    function znajdz() {
        const szukany = podwojone.find(p => p.produkt === "Monitor");
        return szukany ? szukany.wartosc : 0;
    }

    return (
        <div>
            <h1>Zamówienia</h1>
            {podwojone.map(({ produkt, wartosc }) => (
                <p key={produkt}>
                    {produkt} - {wartosc} zł
                </p>
            ))}
            <p>Zliczone wartości: {zlicz()} zł</p>
            <p>Wyszukany monitor: {znajdz()} zł</p>
        </div>
    );
}

export default Zamowienia;