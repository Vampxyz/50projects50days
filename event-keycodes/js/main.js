const container = document.getElementById('container');

window.addEventListener("keydown", (e) => {
    container.innerHTML = `
        <div id="key">
            <small>event.key</small>
            <div class="code">
                ${e.key}
            </div>
         </div>

         <div id="key">
            <small>event.keyCode</small>
            <div class="code">
                ${e.code}
            </div>
         </div>

         <div id="key">
            <small>event.code</small>
            <div class="code">
                ${e.code}
            </div>
         </div>
    `
})