let input = document.querySelector('.input')
let button = document.querySelectorAll("button")

button.forEach((btn) => {
    btn.addEventListener('click', function (e) {
        let value = e.target.innerText;
        if (value === "AC") {
            input.value = ""
        } else if (value === "DE") {
            input.value = input.value.slice(0, -1)
        } else if (value === "=") {
            try {
                input.value = eval(input.value.replace("X", "*"));
            }
            catch {
                input.value = "Error"
            }
        } else {

            input.value += value;
        }
    })
})
