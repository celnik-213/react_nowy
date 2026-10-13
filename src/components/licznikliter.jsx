function Licznikliter (){
    function licznik()
    {
        const tekst = document.getElementById("wiadomosc").value;
        const licznik = tekst.length;
        if(licznik > 0){
            document.getElementById("licznik").style.color = "white";
            const znaki = 100-licznik;
            document.getElementById("licznik").innerHTML = "Pozostało "+znaki+" znaków";
            if(licznik > 90)
            {
                document.getElementById("licznik").style.color="red";
            }
        }
    }
    return (
        <div>
            <textarea id="wiadomosc" maxLength="100" onInput={licznik}></textarea>
            <p id="licznik">Pozostało 100 znaków</p>
        </div>
    );
}
export default Licznikliter;