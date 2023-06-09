const calc = document.querySelector('.calc');

calc.addEventListener('click', function(event) {
    if(!event.target.classList.contains('calc_btn')) return;

    const value = event.target.innerText;

    switch(value) {
        case "C":
            result.innerText = "";
            break;

    case '=':
        result.innerText = eval(result.innerText).toFixed(2);
        break;

    default:
        result.innerText += value;
    }
});