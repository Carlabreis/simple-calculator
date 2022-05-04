let display = document.getElementById("display")

let buttons = Array.from(document.getElementsByClassName('buttons'))

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText) {
            // clear button
            case 'C':
                display.innerText = '';
                break;
                // backspace button
            case '←':
                if(display.innerText) {
                    display.innerText = display.innerText.slice(0,-1)
                }
                break;
                // equals button
            case '=':
                // error handling
                try {
                    // eval is a built-in javascript function
                    display.innerText = eval(display.innerText)
                    // runs catch block if there is an error when executing eval function.
                } catch {
                    display.innerText = "error";
                }
                break;
            default:
                display.innerText += e.target.innerText
        }
    });
} );
