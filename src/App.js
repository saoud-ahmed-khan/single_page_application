import React from 'react';
import { NewNav } from "../src/components/newNavbar/NewNav";
import "./components/Bekinf/BeKind.css"
import "./App.css"
import { BeKind } from "./components/Bekinf/BeKind";
import { BeAssertive } from "./components/BeAssertive/Beassertive";
import { Listen } from "./components/LIsten/LIsten";
import { Connect } from "./components/connect/Connect";
import { BeResponsible } from "./components/BeResponsible/BeResponsible";
import Fullpage, { FullPageSections, FullpageSection ,FullpageNavigation} from '@ap.cx/react-fullpage'





function App() {
  return (
    <div >
      <main>
        <Fullpage>
          <FullpageNavigation/>
          <FullPageSections>
            <FullpageSection><section><NewNav></NewNav></section></FullpageSection>
            <FullpageSection><section><BeKind /></section></FullpageSection>
            <FullpageSection><section><BeAssertive /></section></FullpageSection>
            <FullpageSection><section><Listen /></section></FullpageSection>
            <FullpageSection><section><Connect /></section></FullpageSection>
            <FullpageSection><section><BeResponsible /></section></FullpageSection>   
          </FullPageSections>
        </Fullpage>

      </main>

    </div>



  );
}

export default App;
