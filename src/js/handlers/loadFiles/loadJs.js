// All coded by SimiCoding on github!
import { jsStructure } from "../../../data/fileStructure/jsStructure.js";

const head = document.getElementsByTagName("head")[0]; // Initalize Head

export function loadJsFiles() {
try {
    jsStructure.forEach((element) => {
        const folder = `./src/js/` + element.folder;
        const file = element.file;
        const path = folder + file;
    
        const newScript = document.createElement(`script`);
        newScript.type = element.type;
        newScript.src = path;
    
        head.appendChild(newScript);
    
        console.log(`✔ | JS | Loaded: ${path}`);
      });

      console.log(`✔ | JS | Finished Loading`);
} catch (error) {
    console.log(`❌ | loadJsFiles | Error: ${error}`);
}
  
}
