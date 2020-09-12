import React from 'react';
import { NewNav } from "../src/components/newNavbar/NewNav";
import "./components/Bekinf/BeKind.css"
import "./App.css"
import { BeKind } from "./components/Bekinf/BeKind";
import { BeAssertive } from "./components/BeAssertive/Beassertive";
import { Listen } from "./components/LIsten/LIsten";
import { Connect } from "./components/connect/Connect";
import { BeResponsible } from "./components/BeResponsible/BeResponsible";




function App() {
  return (
    <div >
      <main>
        <section><NewNav></NewNav></section>
        <section><BeKind/></section>
        <section><BeAssertive/></section>
        <section><Listen/></section>
        <section><Connect/></section>
        <section><BeResponsible/></section>


       
      </main>

    </div>
  );
}

export default App;
