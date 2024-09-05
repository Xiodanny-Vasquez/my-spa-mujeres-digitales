import React, { useState } from "react";

function Home (){
  return <h2>Home Page</h2>

}
function About (){
  return <h2>About </h2>
}
 
function App(){
  const [page, setPage] = useState('home');

  return (
    <div>
      <button onClick={()=> setPage('home')}>Home</button>
      <button onClick={()=> setPage('about')}>About</button>
      {page === 'home' ? <Home/> : <About/>}
    </div>
  );
}

export default App;