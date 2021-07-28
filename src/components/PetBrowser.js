import React from "react";

import Pet from "./Pet";

function PetBrowser({ petsData, onAdoptPet }) {
  return (
    <div className="ui cards"> 
      { petsData.map((petObj) => <Pet pet={petObj} key={petObj.id} onAdoptPet={onAdoptPet} /> )}
    </div>
  );
}

export default PetBrowser;
