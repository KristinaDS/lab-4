var firstName = document.getElementById("first-name");
var lastName = document.getElementById("last-name");
var btn = document.getElementById("submit-btn");
var result = document.getElementById("resultEl");
btn.addEventListener('click', function() {
    if (firstName.value && lastName.value) {
        result.textContent = `Здравствуйте, ${firstName.value} ${lastName.value}!`;
    } else if (firstName.value || lastName.value){
        result.textContent = `Одно из полей не заполнено!`;
    }
    else {
        result.textContent = `Поля пустые!`;
    }
});
