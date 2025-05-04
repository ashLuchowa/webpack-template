import './css/main.scss';
import { greeting } from './second.js';
import odinImage from './images/image.jpg';

console.log(greeting);

const image = document.createElement('img');
image.src = odinImage;

document.body.appendChild(image);
