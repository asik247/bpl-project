import React, { Suspense, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Players from './Components/Players/Players';
import Sellecteds from './Components/Sellecteds/Sellecteds';

// playerPromise code start here;
const fatchPromise = fetch("/players.json")
.then(res=>res.json())
console.log(fatchPromise);

// useSate code here now;

const App = () => {
const [toggle,setToggle] = useState(true)

// handle availabe code here;
const handleAvailabe = ()=>{
  console.log("handle bbtn clickdedddd");
  setToggle(true)
}
const handleSellected = ()=>{
  console.log("handle bbtn sellected");
  setToggle(false)
}
  return (
    <div>
     <Navbar></Navbar>
     {/* Avaiable code start here */}
    <div className='flex justify-between items-center w-11/12 mx-auto m-10'>
      {/* <h1 className='font-bold text-2xl'>Available Players</h1> */}
      <h1>{toggle ? "Available Players" : "Selected Players"}</h1>
      <div>
        <button onClick={handleAvailabe} className={`btn border-r-0 rounded-l-2xl ${toggle===true?"bg-yellow-400" :""}`}>Available</button>
        <button onClick={handleSellected} className={`btn border-l-0  rounded-r-2xl ${toggle===false?"bg-yellow-400":""}`}>Sellected <span>(0)</span></button>
      </div>
    </div>




    {/* Toggle implement code start here */}


    {
      toggle === true ?<Suspense fallback={<h1>Loadding...</h1>}>
      <Players fatchPromise={fatchPromise}></Players>
     
     </Suspense>: <Sellecteds></Sellecteds>
    }

     {/* Players code here */}
     

     {/* Sellected page code hre nw */}



    </div>
  );
};

export default App;