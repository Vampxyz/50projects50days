const search = document.getElementById('search');
const input = document.getElementById('input');
const searchButton = document.getElementById('search-button');

let closed = true

// Option 1
searchButton.onclick = () => {
    if (closed === true) {
        input.style.width = "200px"
        input.style.paddingInline = "20px"
        input.focus()
        
        closed = false
    } else {
        input.style.width = "0px"
        input.style.paddingInline = "0px"
        closed = true
    }
}

// Option 2
// searchButton.addEventListener('click', () => {
//     if (closed) {
//         input.style.width = "200px";
//         input.style.paddingInline = "20px";
//         input.focus();
//     } else {
//         input.style.width = "0px";
//         input.style.paddingInline = "0px";
//     }
//     closed = !closed;
// });