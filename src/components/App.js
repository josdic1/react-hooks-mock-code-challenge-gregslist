import { useState, useEffect } from 'react';
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings ] = useState([])
const [filteredListings, setFilteredListings ] = useState([])
const [ isFiltered, setIsFiltered ] = useState(false)

useEffect(() => {
  fetchListings()
},[])


function handleFilter(val) {
  if(val === "") {
    setIsFiltered(false)
  } else {
    setIsFiltered(true)
    filterTheList(val)
  }
}

const filterTheList = (val) => {
  const updatedList = listings.filter(l => l.description === val)
  setFilteredListings(updatedList)
}

async function fetchListings() {
  try {
    const r = await fetch (`http://localhost:6001/listings`)
    if(!r.ok) {
      throw new Error("💥 Error");
    }
    const data= await r.json()
    setListings(data)
  }catch (error) {console.error(error);}
}

async function handleDelete(idToDelete) {
  try {
    const r = await fetch (`http://localhost:6001/listings/${idToDelete}`, {
      method: 'DELETE'
    })
    if(!r.ok) {
     throw new Error("💥 Error");
    }
    const updatedList = listings.filter(l => l.id !== idToDelete)
    setListings(updatedList)
    setFilteredListings(updatedList)
  }catch (error) {console.error("❌ Caught error:", error);}
}

  return (
    <div className="app">
      <Header onFilter={handleFilter}/>
      <ListingsContainer 
        listings={isFiltered ? filteredListings : listings}
        onDelete={handleDelete}/>
    </div>
  );
}

export default App;
