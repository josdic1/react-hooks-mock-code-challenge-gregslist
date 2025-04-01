import { useState, useEffect } from 'react';
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

const [listings, setListings ] = useState([])

useEffect(() => {
  fetchListings()
},[])

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

  return (
    <div className="app">
      <Header />
      <ListingsContainer />
    </div>
  );
}

export default App;
