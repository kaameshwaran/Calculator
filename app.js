let display = document.getElementById("display");
console.log(display);
let buttons = Array.from(document.getElementsByClassName("buttons"));
console.log(buttons);

buttons.map(button => {
    button.onclick = (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
            try {
                display.innerText=eval(display.innerText);
            } catch {
                display.innerText="Error"
            }
            break;
            case '←':
                if(display.innerText){
                    display.innerText = display.innerText.slice(0,-1);
                }
                break;
            default:    
            display.innerText += e.target.innerText;
        }
    };
    });