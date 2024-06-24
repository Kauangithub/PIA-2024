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
    
        decreaseButton.addEventListener('click', function() {
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
            }
        });
    
        increaseButton.addEventListener('click', function() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
        });

        const monthNames = ["JAN. DE", "FEV. DE", "MAR. DE", "ABR. DE", "MAI. DE", "JUN. DE",
    "JUL. DE", "AGO. DE", "SET. DE", "OUT. DE", "NOV. DE", "DEZ. DE"];
    
    const currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    function renderCalendar() {
        const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
        const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
        const daysContainer = document.getElementById("days");
        daysContainer.innerHTML = "";

        // Adicionar dias anteriores, se necessário, para preencher a primeira semana
        for (let i = 0; i < firstDayOfMonth; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            daysContainer.appendChild(dayElement);
        }

        // Adicionar os dias do mês
        for (let i = 1; i <= lastDayOfMonth; i++) {
            const dayElement = document.createElement("div");
            dayElement.classList.add("day");
            dayElement.textContent = i;
            dayElement.addEventListener("click", () => {
                dayElement.classList.toggle("selected");
            });
            daysContainer.appendChild(dayElement);
        }
    }

    function updateMonthText() {
        const monthText = `${monthNames[currentMonth]} ${currentYear}`;
        document.getElementById("current-month").textContent = monthText;
    }

    function goToPreviousMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar();
        updateMonthText();
    }

    function goToNextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar();
        updateMonthText();
    }
    
    function goToPreviousYear() {
        currentYear--;
        renderCalendar();
        updateMonthText();
    }

    function goToNextYear() {
        currentYear++;
        renderCalendar();
        updateMonthText();
    }

    document.getElementById("prev-month").addEventListener("click", goToPreviousMonth);
    document.getElementById("next-month").addEventListener("click", goToNextMonth);
    document.getElementById("prev-year").addEventListener("click", goToPreviousYear);
    document.getElementById("next-year").addEventListener("click", goToNextYear);

    renderCalendar();
    updateMonthText();