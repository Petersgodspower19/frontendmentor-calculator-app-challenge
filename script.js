
const appendToResult = (value) => {
    let result = document.getElementById('result');
  result.value += value;
}

const resetInput = () => {
    let result = document.getElementById('result');
    result.value = "";
}

const removeInput = () => {
    let result =  document.getElementById('result').value;
    document.getElementById('result').value = result.slice(0, -1);
}

const calculateResult  =() => {
    try {
        let result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
    } catch (error) {
        document.getElementById('result').value = "Invalid Inputs";
    }
}


const toggleMode = () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
    body.classList.toggle("light-mode");

    let button = document.querySelector(".toggle-btn");

    if (body.classList.contains("dark-mode")) {
        button.textContent = "Switch to Light Mode";
    } else {
        button.textContent = "Switch to Dark Mode";
    }
}