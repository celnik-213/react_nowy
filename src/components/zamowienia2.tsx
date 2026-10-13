import {useState} from 'react';

function Function(){
    interface Zamowienia{
        id:number;
        klient:number;
        kwota:number;
        uwagi:string;
        StatusZamowienia:"nowe"|"opłacone"|"wysłane";
    }
    const Zamowienie: Zamowienia[] =[
        {id:1, klient:1 , kwota:300 , uwagi:"Brak", StatusZamowienia:"opłacone"},
        {id:2, klient:2 , kwota:500 , uwagi:"Brak", StatusZamowienia:"nowe"},
        {id:3, klient:3 , kwota:1000 , uwagi:"Szkło", StatusZamowienia:"wysłane"}
    ];
    const SumaCen = (lista: Zamowienia[]): number =>{
        return lista.reduce((suma,produkt)=> suma+produkt.kwota, 0)
    }

    return(
      <div>
          <h2>Lista zamowien:</h2>
          {Zamowienie.map((zamowienie) =>(
              <div key={zamowienie.id}>
                  <p>Numer zamówienia: {zamowienie.id}</p>
                  <p>Klient: {zamowienie.klient}</p>
                  <p>Kwota: {zamowienie.kwota}</p>
                  <p>Uwagi: {zamowienie.uwagi}</p>
                  <p>Status: {zamowienie.StatusZamowienia}</p>
                  <hr />
              </div>
          ))}

          <h2>Łączna suma zamówień: {SumaCen(Zamowienie)} zł</h2>
      </div>
    );
}
export default Function;