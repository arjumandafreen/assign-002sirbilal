import List from "@/app/components/NavList";
import React from "react";

function CountryList() {
  return (
    <div className="min-h-screen text-center bg-black border-2 p-4 font-bold font-serif text-xl md:text-2xl text-cyan-200">
      <h1 className="bg-slate-300 text-blue-900 hover:bg-green-300 mb-6 text-center text-2xl ">Countries List</h1>
 
        <List href="/country/brazil " title="brazil " />
        <br />
        <List href="/country/germany " title="germany " />
        <br />
        <List href="/country/france " title="france" />
        <br />
        
        <List href="/country/canada" title="canada" />
         <br />
        <List href="/country/australia" title=" australia " />
        <br />  
         <List href="/country/nigeria" title=" nigeria " />
         <br />  
         <List href="/country/mexico" title="mexico" />
         <br />              
    </div>
  );
}

export default CountryList;