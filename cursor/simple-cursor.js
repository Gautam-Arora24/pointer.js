function simple_cursor (node) {
    const style = document.createElement('style');

    let css = `
    .simple_cursor > * {
        cursor: inherit;
    }
    `;
    style.textContent = css;
    document.head.appendChild(style);


    // If some rubbish string is added in the cursor-color attribute, the default color will be black.
    const color = node.getAttribute('cursor_color');


    // TODO - Use TypeScript type system for the color paramater.
    function getSVG (color) {
        return `
            <svg xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="16"
                fill="${color}"
            >
                <circle cx="6" cy="6" r="5" ></circle>
            </svg>`;
    }


    const blob = new Blob( [ getSVG(color) ], { type: 'image/svg+xml' } );

    const urli = window.URL.createObjectURL( blob );

    // The center will be chosen as the center of actual svg element from the top-left corner
    node.style.cursor = `url(${urli}) 8 8, pointer`;


    //Browsers will release object URLs automatically when the document is unloaded; 
    //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
    //unload them, you should do so.
    node.addEventListener('mouseleave', () => {
        URL.revokeObjectURL(urli);     
    });
}

export default simple_cursor;
