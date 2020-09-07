import React from 'react';
// import { Nav } from "./components/navSection/Nav";
import { BeKind } from "../src/components/Bekinf/BeKind";
import { BeAssertive } from "../src/components/BeAssertive/Beassertive";
import { Listen } from "./components/LIsten/LIsten";
import { Connect } from "./components/connect/Connect";
import { BeResponsible } from "./components/BeResponsible/BeResponsible";
import { NewNav } from "./components/newNavbar/NewNav";
import "./components/Bekinf/BeKind.css"



function App() {
  return (
    <div >
       <NewNav></NewNav> 
      <BeKind/>
      <BeAssertive/>
      <Listen/>
      <Connect/>
      <BeResponsible/>

      

    </div>
  );
}

export default App;
