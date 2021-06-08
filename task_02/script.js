let consoleLogAlert = document.querySelector('#consoleLog');
let alertLogAlert = document.querySelector('#alert');
let promptLogAlert = document.querySelector('#prompt');


consoleLogAlert.addEventListener('click', () => {
    alert(`Метод для вывода сообщения в консоль`);
    consoleLogAlert.textContent = `Пример использования команды console.log`;
});


alertLogAlert.addEventListener('click', () => {
    alert(`Метод для вывода сообщения модальным окном alert`);
    alertLogAlert.textContent = `Пример использования команды alert`;
});


promptLogAlert.addEventListener('click', () => { 
    alert(`Метод для ввода сообщения в модальное окно prompt`);
    promptLogAlert.textContent = `Пример использования команды prompt`;
});