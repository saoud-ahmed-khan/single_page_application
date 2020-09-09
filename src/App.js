import React from 'react';
// import { Nav } from "./components/navSection/Nav";
import { BeKind } from "../src/components/Bekinf/BeKind";
import { BeAssertive } from "../src/components/BeAssertive/Beassertive";
import { Listen } from "./components/LIsten/LIsten";
import { Connect } from "./components/connect/Connect";
import { BeResponsible } from "./components/BeResponsible/BeResponsible";
import { NewNav } from "./components/newNavbar/NewNav";
import "./components/Bekinf/BeKind.css"
import "./App.css"



function App() {
  return (
    <div >
      <main>
        <section>
          <NewNav></NewNav>
        </section> 
        <section><BeKind /></section>
        <section><BeAssertive /></section>
        <section><Listen /></section>
        <section><Connect /></section>
        <section><BeResponsible /></section> 
          
      </main>

    </div>
  );
}

export default App;
