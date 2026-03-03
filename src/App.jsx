import React, { Suspense, } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Players from './Components/Players/Players';
import Sellecteds from './Components/Sellecteds/Sellecteds';

// playerPromise code start here;
const fatchPromise = fetch("/players.json")
.then(res=>res.json())
console.log(fatchPromise);

// useSate code here now;

const App = () => {


  return (
    <div>
     <Navbar></Navbar>
    

    <Suspense fallback={<h1>Loadding...</h1>}>
      <Players fatchPromise={fatchPromise}></Players>
     
     </Suspense>
     <Sellecteds></Sellecteds>
    </div>
  );

}
export default App;