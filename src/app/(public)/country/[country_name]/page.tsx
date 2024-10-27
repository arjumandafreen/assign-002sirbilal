import React from "react";
import { CountryInfo } from "../../../../../types/PropsTypes";
import CountryDetails from "@/app/components/CountryDetails";

const Countries: CountryInfo[] = [
    { countryName: "brazil", population: 212559417, capital: "Brasília" },
    { countryName: "germany", population: 83783942, capital: "Berlin" },
    { countryName: "france", population: 65273511, capital: "Paris" },
    { countryName: "canada", population: 37742154, capital: "Ottawa" },
    { countryName: "australia", population: 25499884, capital: "Canberra" },
    { countryName: "nigeria", population: 206139589, capital: "Abuja" },
    { countryName: "mexico", population: 128932753, capital: "Mexico City" },
    
  ];
    
  
export default  function CountryName({ params }: { params: { country_name: string } }) {

  <h1>Country List will be shown here</h1>
      const findCountry = Countries.find(
        (myFavCountry) => myFavCountry.countryName.toLowerCase() === params.country_name
      );
      if (!findCountry) {
        return <h1>Country not found</h1>;
      }
      return (
        <div className="bg-slate-300 border-3 p-5 flex flex-col items-center" >

       <CountryDetails
        countryName={findCountry.countryName}
         population={findCountry.population}
         capital={findCountry.capital} />
        </div>
      );
    }
    


