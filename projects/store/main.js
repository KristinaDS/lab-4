const surnameInput = document.querySelector('input[name="surname"]');
const nameInput = document.querySelector('input[name="name"]');

const checkboxes = document.querySelectorAll('.checkbox');
const quantityInputs = document.querySelectorAll('.count-choice');

const resultCount = document.querySelector('.result');
const orderButton = document.querySelector('.btn');

let totalSum = 0;

function updateTotalSum() {
    let total = 0;

    checkboxes.forEach((checkbox, index) => {
        if (checkbox.checked && quantityInputs[index].value) {
            total += parseInt(checkbox.value) * parseInt(quantityInputs[index].value);
        }
    });

    resultCount.textContent = total + " руб.";
}

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener("change", updateTotalSum);
    quantityInputs[index].addEventListener("change", updateTotalSum);
});

function handleQuantityChange(index) {
    let quantity = quantityInputs[index].value;
    if (!/^[1-9][0-9]*$/.test(quantity) && quantity != "") {
        quantityInputs[index].value = 0; 
        quantity = 0;
    } else {
        quantity = parseInt(quantity); 
    }

    quantityInputs[index].value = quantity;
    updateTotalSum();
}

checkboxes.forEach((checkbox, index) => {
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            quantityInputs[index].value = 1;
        } else {
            quantityInputs[index].value = 0;
        }
        updateTotalSum();
    });

    quantityInputs[index].addEventListener('input', () => handleQuantityChange(index));
});

orderButton.addEventListener("click", () =>{
    let surname = surnameInput.value.trim();
    let name = nameInput.value.trim();
    let price = resultCount.textContent;

    alert(`Заказчик: ${surname} ${name}\nИтого: ${price}`);
});
