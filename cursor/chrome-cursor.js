function chrome_cursor (node) {
    const color = node.getAttribute('cursor_color');
    const style = document.createElement('style');

    let css = `
    .chrome_cursor > * {
        cursor: inherit;
    }
    `;
    style.textContent = css;
    document.head.appendChild(style);

    function getSVG () {
        return `
            <svg xmlns="http://www.w3.org/2000/svg"
                height="30"
                width="30"
                fill="${color}"
                >
                <circle class="outer-circle" cx="15" cy="15" r="12" stroke="green"
                stroke-width="2" fill-opacity="0.6"></circle>
            </svg>`;
    }


    const blob = new Blob( [ getSVG(color) ], { type: 'image/svg+xml' } );

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

export default chrome_cursor;