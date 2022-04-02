function snow_cursor (node) {
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
    function getSVG () {
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


    const blob = new Blob( [ getSVG() ], { type: 'image/svg+xml' } );

    const urli = window.URL.createObjectURL( blob );

    // The center will be chosen as the center of actual svg element from the top-left corner
    node.style.cursor = `url(${urli}) 15 15, pointer`;


    //Browsers will release object URLs automatically when the document is unloaded; 
    //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
    //unload them, you should do so.
    node.addEventListener('mouseleave', () => {
        URL.revokeObjectURL(urli);     
    });
    
}

export default snow_cursor;
