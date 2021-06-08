let textInput = document.querySelector("#inputField");
let textDuplicateField = document.querySelector("#duplicateField");
let pushButton = document.querySelector("#buttonField");
var valueBuffer;


textInput.addEventListener('keyup', () => {
	valueBuffer = textInput.value;
	textDuplicateField.textContent = valueBuffer;
});


pushButton.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(valueBuffer);
    textDuplicateField.textContent = "";
    textInput.value = "";
});