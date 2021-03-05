import React, { useRef, useState } from "react";
import ReactDOM from "react-dom";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import { BrowserRouter as Router } from "react-router-dom"
import { Kyzen } from "./components/Kyzen.js"
import { VirtualKeyBoard } from "./components/virtualKeyBoard/VirtualKeyBoard.js"


import "./styles.css";

ReactDOM.render(
  <React.StrictMode>
      <Router>
          <Kyzen />
          <VirtualKeyBoard></VirtualKeyBoard>
          
      </Router>
  </React.StrictMode>,
  document.getElementById("root")
)





// function App() {
//   const [input, setInput] = useState("");
//   const [layout, setLayout] = useState("default");
//   const keyboard = useRef();

//   const onChange = input => {
//     setInput(input);
//     console.log("Input changed", input);
//   };

//   const handleShift = () => {
//     const newLayoutName = layout === "default" ? "shift" : "default";
//     setLayout(newLayoutName);
//   };

//   const onKeyPress = button => {
//     console.log("Button pressed", button);

//     /**
//      * If you want to handle the shift and caps lock buttons
//      */
//     if (button === "{shift}" || button === "{lock}") handleShift();
//   };

//   const onChangeInput = event => {
//     const input = event.target.value;
//     setInput(input);
//     keyboard.current.setInput(input);
//   };

//   return (
//     <div className="App">
//       <input
//         value={input}
//         placeholder={"Tap on the virtual keyboard to start"}
//         onChange={onChangeInput}
//       />
//       <Keyboard
//         keyboardRef={r => (keyboard.current = r)}
//         layoutName={layout}
//         onChange={onChange}
//         onKeyPress={onKeyPress}
//       />
//     </div>
//   );
// }

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);


