// All coded by SimiCoding on github!
import { cssStructure } from "../../../data/fileStructure/cssStructure.js";

const head = document.getElementsByTagName("head")[0]; // Initalize Head

export function loadCssFiles() {
try {
    cssStructure.forEach((element) => {
        const folder = `./src/css/` + element.folder;
        const file = element.file;
        const path = folder + file;
    
        const newLink = document.createElement(`link`);
        newLink.rel = `stylesheet`;
        newLink.href = path;
    
        head.appendChild(newLink);
    
        console.log(`✔ | CSS | Loaded: ${path}`);
      });

      console.log(`✔ | CSS | Finished Loading`);
} catch (error) {
    console.log(`❌ | loadCssFiles | Error: ${error}`);
}
  
}
