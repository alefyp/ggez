import taco from "./assets/taco.svg";
import "./styles.scss";

//This is the entry point of your App, happy coding!

const tacoPic = document.createElement("img");
tacoPic.src = taco;
document.getElementById("root").appendChild(tacoPic);

console.log("Hello,  taco lover");
