import React, { Suspense, useState, } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Players from './Components/Players/Players';
import Sellecteds from './Components/Sellecteds/Sellecteds';

// playerPromise code start here;
const fatchPromise = fetch("/players.json")
.then(res=>res.json())
console.log(fatchPromise);

// useSate code here now;

const App = () => {
  const [toggle,setToggle] = useState(true);


  return (
    <div>
     <Navbar></Navbar>
      <div className='flex justify-between items-center w-11/12 mx-auto mt-5'>
        <div>
          <h1>{toggle===true?"Available Players":"Sellected Players"}</h1>
        </div>
        <div>
          <button className='btn bg-amber-300 border-r-0 rounded-l-2xl'>Available</button>
          <button className='btn bg-amber-300 border-l-0 rounded-r-2xl'>Sellected</button>
        </div>
      </div>

    <Suspense fallback={<h1>Loadding...</h1>}>
      <Players fatchPromise={fatchPromise}></Players>
     
     </Suspense>
     <Sellecteds></Sellecteds>
    </div>
  );

}
export default App;