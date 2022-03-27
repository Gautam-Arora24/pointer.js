import simple_cursor from './cursor/simple-cursor';
import rim_cursor from './cursor/rim-cursor';
import chrome_cursor from './cursor/chrome-cursor';
import pen_cursor from './cursor/pen-cursor';


const simpleCursor = document.querySelectorAll('.simple_cursor');
const rimCursor = document.querySelectorAll('.rim_cursor');
const chromeCursor = document.querySelectorAll('.chrome_cursor');
const penCursor = document.querySelectorAll('.pen_cursor');

if(simpleCursor.length > 0) {
    simpleCursor.forEach((item)=>{
        simple_cursor(item);
    });
}

if(rimCursor.length > 0) {
    rimCursor.forEach((item)=>{
        rim_cursor(item);
    });
}

if(chromeCursor.length > 0) {
    chromeCursor.forEach((item)=>{
        chrome_cursor(item);
    });
}

if(penCursor.length > 0) {
    penCursor.forEach((item)=>{
        pen_cursor(item);
    });
}
