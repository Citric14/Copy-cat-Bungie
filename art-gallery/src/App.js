// import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Gallery from './Gallery'
import Button from './Button'

function App() {
  let [artID, setArtID] = useState(12720)
  let [data, setData] = useState({})
  useEffect(() => {
    document.title = 'Welcome to my shitty site'
    fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${artID}`)
    .then(response => response.json())
    .then(resData => setData(resData))
  }, [artID]);

const handleIterate = (e) => {
  setArtID(artID + Number(e.target.value))
}

  return (
    <div className="App">
      <Button handleIterate={handleIterate}/>
      <Gallery objectImg={data.primaryImage} artist={data.artistDisplayName} title={data.title} />
    </div>
  );
}

export default App;
