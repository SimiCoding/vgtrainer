import { config } from "../../../data/config.js";
import{erase} from "./erase.js"

const cursorSpan = document.querySelector(".intro-typed-text-cursor");
const typedTextSpan = document.querySelector(".intro-typed-text");

const textArray = config.intro_desc_arguments;
const typingDelay = 200;
const newTextDelay = 2000; // Delay between current and next text
let charIndex = 0;
let textArrayIndex = 0;
export function type() {
   

 

    if (charIndex < textArray[textArrayIndex].length) {
      if (!cursorSpan.classList.contains("typing"))
        cursorSpan.classList.add("typing");
      typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
      charIndex++;
      setTimeout(type, typingDelay);
    } else {
        
      cursorSpan.classList.remove("typing");
      setTimeout(erase(), newTextDelay);
    }
  }