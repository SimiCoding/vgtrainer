import { config } from "../../../data/config.js";
import {type} from "./type.js";

const newTextDelay = 2000; // Delay between current and next text
const textArray = config.intro_desc_arguments;

export function checkForLength(){
    if (textArray.length) setTimeout(type, newTextDelay + 250);
  }