function $466139011893fc4d$var$simple_cursor(node) {
    // If some rubbish string is added in the cursor-color attribute, the default color will be black.
    const color = node.getAttribute('color');
    const style = document.createElement('style');
    let css = `
    .simple_cursor > * {
        cursor: inherit;
    }
    `;
    style.textContent = css;
    document.head.appendChild(style);
    // TODO - Use TypeScript type system for the color paramater.
    function getSVG() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                fill="${color}"
            >
                <circle cx="6" cy="6" r="5" ></circle>
            </svg>`;
    }
    const blob = new Blob([
        getSVG()
    ], {
        type: 'image/svg+xml'
    });
    const urli = window.URL.createObjectURL(blob);
    // The center will be chosen as the center of actual svg element from the top-left corner
    node.style.cursor = `url(${urli}) 8 8, pointer`;
    //Browsers will release object URLs automatically when the document is unloaded; 
    //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
    //unload them, you should do so.
    node.addEventListener('mouseleave', ()=>{
        URL.revokeObjectURL(urli);
    });
}
var $466139011893fc4d$export$2e2bcd8739ae039 = $466139011893fc4d$var$simple_cursor;
function $bd163a9a65bfa3f2$var$rim_cursor(node) {
    const inner_color = node.getAttribute('inner_color');
    const outer_color = node.getAttribute('outer_color');
    const style = document.createElement('style');
    let css = `
   .rim_cursor > * {
      cursor: inherit;
   }
   `;
    style.textContent = css;
    document.head.appendChild(style);
    // TODO - Use TypeScript type system for the color paramater.
    function getSVG() {
        return `
         <svg xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            fill="${inner_color}"
            >
            <circle class="outer-circle" cx="15" cy="15" r="12" stroke="${outer_color}"
               stroke-width="2" fill="transparent"></circle>
            <circle cx="15" cy="15" r="3" ></circle>
         </svg>`;
    }
    //Browsers will release object URLs automatically when the document is unloaded; 
    //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
    //unload them, you should do so.
    const blob = new Blob([
        getSVG()
    ], {
        type: 'image/svg+xml'
    });
    const uri = window.URL.createObjectURL(blob);
    node.style.cursor = `url(${uri}) 15 15, pointer`;
// TODO: Revoke Object URL
}
var $bd163a9a65bfa3f2$export$2e2bcd8739ae039 = $bd163a9a65bfa3f2$var$rim_cursor;
function $0599d6abf05da49a$var$chrome_cursor(node) {
    const outer_color = node.getAttribute('outer_color');
    const inner_color = node.getAttribute('inner_color');
    const style = document.createElement('style');
    let css = `
    .chrome_cursor > * {
        cursor: inherit;
    }
    `;
    style.textContent = css;
    document.head.appendChild(style);
    function getSVG() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                fill="${inner_color}"
                >
                <circle class="outer-circle" cx="15" cy="15" r="12" stroke="${outer_color}"
                stroke-width="2" fill-opacity="0.6"></circle>
            </svg>`;
    }
    const blob = new Blob([
        getSVG()
    ], {
        type: 'image/svg+xml'
    });
    const urli = window.URL.createObjectURL(blob);
    // The center will be chosen as the center of actual svg element from the top-left corner
    node.style.cursor = `url(${urli}) 15 15, pointer`;
    //Browsers will release object URLs automatically when the document is unloaded; 
    //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
    //unload them, you should do so.
    node.addEventListener('mouseleave', ()=>{
        URL.revokeObjectURL(urli);
    });
}
var $0599d6abf05da49a$export$2e2bcd8739ae039 = $0599d6abf05da49a$var$chrome_cursor;
function $4aa4ce60af3a48da$var$pen_cursor(node) {
    const color = node.getAttribute('color');
    const style = document.createElement('style');
    let css = `
    .pen_cursor > * {
        cursor: inherit;
    }
    `;
    style.textContent = css;
    document.head.appendChild(style);
    function getSVG() {
        return `<svg xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 512 512"
           height="16px"
           width="16px"
           fill="${color}"
          >
          <path d="M290.74 93.24l128.02 128.02-277.99 277.99-114.14 
          12.6C11.35 513.54-1.56 500.62.14 485.34l12.7-114.22 
          277.9-277.88zm207.2-19.06l-60.11-60.11c-18.75-18.75-49.16-18.75-67.91
          0l-56.55 56.55 128.02 128.02 56.55-56.55c18.75-18.76 18.75-49.16 0-67.91z"/>
        </svg>`;
    }
    const blob = new Blob([
        getSVG(color)
    ], {
        type: 'image/svg+xml'
    });
    const urli = window.URL.createObjectURL(blob);
    // The center will be chosen as the center of actual svg element from the top-left corner
    node.style.cursor = `url(${urli}) 0 15, pointer`;
    //Browsers will release object URLs automatically when the document is unloaded; 
    //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
    //unload them, you should do so.
    node.addEventListener('mouseleave', ()=>{
        URL.revokeObjectURL(urli);
    });
}
var $4aa4ce60af3a48da$export$2e2bcd8739ae039 = $4aa4ce60af3a48da$var$pen_cursor;
function $6ec781ea06a2b018$var$snow_cursor(node) {
    // If some rubbish string is added in the cursor-color attribute, the default color will be black.
    const color = node.getAttribute('color');
    const style = document.createElement('style');
    let css = `
    .snow_cursor > * {
        cursor: inherit;
    }
    `;
    style.textContent = css;
    document.head.appendChild(style);
    // TODO - Use TypeScript type system for the color paramater.
    function getSVG() {
        return `
            <svg xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                fill="${color}"
            >
             <circle cx="15" cy="15" r="5" stroke="${color}"
               stroke-width="20" opacity="0.4"></circle>
             <circle cx="15" cy="15" r="5" ></circle>
            </svg>`;
    }
    const blob = new Blob([
        getSVG(color)
    ], {
        type: 'image/svg+xml'
    });
    const urli = window.URL.createObjectURL(blob);
    // The center will be chosen as the center of actual svg element from the top-left corner
    node.style.cursor = `url(${urli}) 15 15, pointer`;
    //Browsers will release object URLs automatically when the document is unloaded; 
    //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
    //unload them, you should do so.
    node.addEventListener('mouseleave', ()=>{
        URL.revokeObjectURL(urli);
    });
}
var $6ec781ea06a2b018$export$2e2bcd8739ae039 = $6ec781ea06a2b018$var$snow_cursor;
const $557a8a38b419c742$var$simpleCursor = document.querySelectorAll('.simple_cursor');
const $557a8a38b419c742$var$rimCursor = document.querySelectorAll('.rim_cursor');
const $557a8a38b419c742$var$chromeCursor = document.querySelectorAll('.chrome_cursor');
const $557a8a38b419c742$var$penCursor = document.querySelectorAll('.pen_cursor');
const $557a8a38b419c742$var$snowCursor = document.querySelectorAll('.snow_cursor');
if ($557a8a38b419c742$var$simpleCursor.length > 0) $557a8a38b419c742$var$simpleCursor.forEach((item)=>{
    $466139011893fc4d$export$2e2bcd8739ae039(item);
});
if ($557a8a38b419c742$var$rimCursor.length > 0) $557a8a38b419c742$var$rimCursor.forEach((item)=>{
    $bd163a9a65bfa3f2$export$2e2bcd8739ae039(item);
});
if ($557a8a38b419c742$var$chromeCursor.length > 0) $557a8a38b419c742$var$chromeCursor.forEach((item)=>{
    $0599d6abf05da49a$export$2e2bcd8739ae039(item);
});
if ($557a8a38b419c742$var$penCursor.length > 0) $557a8a38b419c742$var$penCursor.forEach((item)=>{
    $4aa4ce60af3a48da$export$2e2bcd8739ae039(item);
});
if ($557a8a38b419c742$var$snowCursor.length > 0) $557a8a38b419c742$var$snowCursor.forEach((item)=>{
    $6ec781ea06a2b018$export$2e2bcd8739ae039(item);
});

//# sourceMappingURL=index.cbbe6f8c.js.map
