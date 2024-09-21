btnElement = document.querySelector(".btn");
result = document.querySelector(".result");
order = document.querySelectorAll('[name="choice"]');

btnElement.addEventListener("click", function(){
    let sum = 0;
    for (const product of order){
        if(product.checked){
            sum += parseInt(product.value);;   
        }
    }
    if (sum != 0) {
        result.textContent = sum;
    } else {
        result.textContent = "ничего не выбрано."
    }
});