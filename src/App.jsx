import React, { Suspense, useState, } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Players from './Components/Players/Players';
import Sellecteds from './Components/Sellecteds/Sellecteds';

// playerPromise code start here;
const fatchPromise = fetch("/players.json")
  .then(res => res.json())
console.log(fatchPromise);

// useSate code here now;

const App = () => {
  const [toggle, setToggle] = useState(true);


  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-between items-center w-11/12 mx-auto mt-5'>
        <div>
          <h1>{toggle === true ? "Available Players" : "Sellected Players"}</h1>
        </div>
        <div className="flex">
          <button
            onClick={() => setToggle(true)}
            className={`btn ${toggle ? 'bg-amber-300' : 'bg-gray-200'}`}
          >
            Available
          </button>

          <button
            onClick={() => setToggle(false)}
            className={`btn ${toggle===false ? 'bg-amber-300' : 'bg-gray-200'}`}
          >
            Selected
          </button>
        </div>
      </div>
      {
        toggle === true ? <Suspense fallback={<h1>Loadding...</h1>}>
          <Players fatchPromise={fatchPromise}></Players>


        </Suspense> : <Sellecteds></Sellecteds>
      }

    </div>
  );

}
export default App;