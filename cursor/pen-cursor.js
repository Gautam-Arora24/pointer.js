function pen_cursor (node) {
    const color = node.getAttribute('cursor_color');
    const style = document.createElement('style');

    let css = `
    .pen_cursor > * {
        cursor: inherit;
    }
    `;
    style.textContent = css;
    document.head.appendChild(style);

    function getSVG (color) {
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

    const blob = new Blob( [ getSVG(color) ], { type: 'image/svg+xml' } );

    const urli = window.URL.createObjectURL( blob );

    // The center will be chosen as the center of actual svg element from the top-left corner
    node.style.cursor = `url(${urli}) 0 15, pointer`;


    //Browsers will release object URLs automatically when the document is unloaded; 
    //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
    //unload them, you should do so.
    node.addEventListener('mouseleave', () => {
        URL.revokeObjectURL(urli);     
    });


}

export default pen_cursor;