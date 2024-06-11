const decreaseButton = document.getElementById('decrease');
        const increaseButton = document.getElementById('increase');
        const quantityInput = document.getElementById('quantity');
        const displayValue = document.getElementById("display-value");
        const valueInput = document.getElementById("value");



        let value = 0;

        increaseButton.addEventListener("click", () => {
            const quantity = parseInt(quantityInput.value);
            if (quantity > 0) {
                value += 100;
                displayValue.textContent = value;
            }
        });

        decreaseButton.addEventListener("click", () => {
            if (value > 0) {
                value -= 100;
                displayValue.textContent = value;
            }
        });

        decreaseButton.addEventListener('click', function () {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });

        increaseButton.addEventListener('click', function () {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });