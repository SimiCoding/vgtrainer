// All coded by SimiCoding on github!
import {  loadFiles } from "./handlers/fileHandler.js";
import { typeText } from "./main/typed-text.js";
import {mainPageCode}from "../html/main.js";

const app = document.querySelector(`.app`);

loadFiles();

app.insertAdjacentHTML("beforebegin", mainPageCode);

// Events: 

// On Page Load:
document.addEventListener("DOMContentLoaded", function () {
   typeText();
});