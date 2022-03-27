function rim_cursor (node) {
   const color = node.getAttribute('cursor_color');
   const style = document.createElement('style');

   let css = `
   .rim_cursor > * {
      cursor: inherit;
   }
   `;
   style.textContent = css;
   document.head.appendChild(style);
      
   // TODO - Use TypeScript type system for the color paramater.
   function getSVG (color, clicked) {
      return `
         <svg xmlns="http://www.w3.org/2000/svg"
            height="30"
            width="30"
            fill="${color}"
            >
            <circle class="outer-circle" cx="15" cy="15" r="${clicked ? 10 : 12 }" stroke="green"
               stroke-width="2" fill="transparent"></circle>
            <circle cx="15" cy="15" r="3" ></circle>
         </svg>`;
      }

      //Browsers will release object URLs automatically when the document is unloaded; 
      //however, for optimal performance and memory usage, if there are safe times when you can explicitly 
      //unload them, you should do so.

      const blob = new Blob( [ getSVG(color,false) ], { type: 'image/svg+xml' } );

      const uri = window.URL.createObjectURL( blob );

      node.style.cursor = `url(${uri}) 15 15, pointer`;


      // for performance gains
      node.addEventListener('pointerdown',() => {
         const blob = new Blob( [ getSVG(color,true) ], { type: 'image/svg+xml' } );
         
         const uri = window.URL.createObjectURL( blob );
         
         node.style.cursor = `url(${uri}) 15 15, pointer`;
      });

      node.addEventListener('pointerup',() => {
         const blob = new Blob( [ getSVG(color,false) ], { type: 'image/svg+xml' } );
         
         const uri = window.URL.createObjectURL( blob );
         
         node.style.cursor = `url(${uri}) 15 15 , pointer`;
      });
}

export default rim_cursor;