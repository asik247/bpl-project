import React, { Suspense } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Players from './Components/Players/Players';

// playerPromise code start here;
const fatchPromise = fetch("/players.json")
.then(res=>res.json())
console.log(fatchPromise);

const App = () => {
  return (
    <div>
     <Navbar></Navbar>
     {/* Avaiable code start here */}
    <div className='flex justify-between items-center w-11/12 mx-auto m-10'>
      <h1>Available Players</h1>
      <div>
        <button className='btn border-r-0 bg-yellow-400 rounded-l-2xl'>Available</button>
        <button className='btn border-l-0 bg-yellow-400 rounded-r-2xl'>Sellected <span>(0)</span></button>
      </div>
    </div>





     {/* Players code here */}
     <Suspense fallback={<h1>Loadding...</h1>}>
      <Players fatchPromise={fatchPromise}></Players>
     
     </Suspense>

    </div>
  );
};

export default App;