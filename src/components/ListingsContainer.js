import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, onDelete }) {

  const listingData = listings.map(l => (
    <ListingCard key={l.id} 
    listing={l}
    onDelete={onDelete}
    />
  ))

  return (
    <main>
      <ul className="cards">
        {listingData}
      </ul>
    </main>
  );
}

export default ListingsContainer;
