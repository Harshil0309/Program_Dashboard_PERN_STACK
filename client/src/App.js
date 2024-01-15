import React,{Fragment} from "react";
import './App.css';

//components
import Input from "./components/inputProg";
import List from "./components/list";

function App() {
  return <Fragment>
    <div className="container">
      <Input/>
      <List/>
    </div>
  </Fragment>
}

export default App;
