import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function appFilter(newType){
    // console.log(newType)
    setFilters( {type: newType} )
  }

  function fetchData(){
    if(filters.type == "all"){
      fetch("http://localhost:3001/pets")
        .then(res => res.json())
        .then(data => setPets(data))
    }else{
      fetch(`http://localhost:3001/pets?type=${filters.type}`)
        .then(res => res.json())
        .then(data => setPets(data))
    }
  }
  fetchData()

  function onAdoptPet(id){
    pets.forEach((pet)=>{
      if (pet.id === id){
        pet.isAdopted = false
      }
    })
  }
  

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
              onChangeType={appFilter}
              onFindPetsClick={fetchData}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser 
              petsData={pets}
              onAdoptPet={onAdoptPet}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
