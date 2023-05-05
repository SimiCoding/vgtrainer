import { config } from "../../../data/config.js";
import {type}from "./type.js";

let charIndex = 0;
let textArrayIndex = 0;

const cursorSpan = document.querySelector(".intro-typed-text-cursor");
const typedTextSpan = document.querySelector(".intro-typed-text");

const textArray = config.intro_desc_arguments;
const typingDelay = 200;
const erasingDelay = 100;

export function erase() {
    if (charIndex > 0) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent = textArray[textArrayIndex].substring(
        0,
        charIndex - 1
      );
      charIndex--;
      setTimeout(erase, erasingDelay);
    } else {
      cursorSpan.classList.remove("typing");
      textArrayIndex++;
      if (textArrayIndex >= textArray.length) textArrayIndex = 0;
      setTimeout(type, typingDelay + 1100);
    }
  }