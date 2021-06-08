// document.querySelector('.promptWindow').onclick = function() {
//     let insertedText = prompt();
//     this.textContent = insertedText;
// }


let linkWithPrompt = document.querySelector('.promptWindow');

linkWithPrompt.addEventListener('click', (e) => {
    e.preventDefault()
    let insertedText = prompt();
    linkWithPrompt.textContent = insertedText;
});
