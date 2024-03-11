
    // Get thescript> date picker buttons and the date popups
    const dateBtns = document.querySelectorAll('.date-btn');
    const datePopups = document.querySelectorAll('.popup');

    // Get the details buttons and the details popups
    const detailsBtns = document.querySelectorAll('.details-btn');
    const detailsPopups = [];

    // Create the details popups
    for (let i = 0; i < detailsBtns.length; i++) {
      const detailsPopup = document.createElement('div');
      detailsPopup.classList.add('popup');
      detailsPopup.classList.add('details-popup');
      detailsPopup.innerHTML = `
        <div class="popup-content">
          <h2>Mais detalhes</h2>
          <p>Mais detalhes sobre a opção ${i + 1}</p>
          <button class="ok-btn">OK</button>
        </div>
      `;
      document.body.appendChild(detailsPopup);
      detailsPopups.push(detailsPopup);
    }

    // Function to show the date popup
    function showDatePopup(index) {
      datePopups[index].style.display = 'block';
    }

    // Function to hide the date popup
    function hideDatePopup(index) {
      datePopups[index].style.display = 'none';
    }

    // Function to show the details popup
    function showDetailsPopup(index) {
      detailsPopups[index].style.display = 'block';
    }

    // Function to hide the details popup
    function hideDetailsPopup(index) {
      detailsPopups[index].style.display = 'none';
    }

    // Add event listeners to the date picker buttons and the details buttons
    for (let i = 0; i < dateBtns.length; i++) {
      dateBtns[i].addEventListener('click', () => showDatePopup(i));
      detailsBtns[i].addEventListener('click', () => showDetailsPopup(i));
    }

    // Add event listeners to the OK and Cancel buttons in the date popups
    for (let i = 0; i < datePopups.length; i++) {
      const okBtn = datePopups[i].querySelector('.ok-btn');
      const cancelBtn = datePopups[i].querySelector('.cancel-btn');
      okBtn.addEventListener('click', () => hideDatePopup(i));
      cancelBtn.addEventListener('click', () => hideDatePopup(i));
    }

    // Add event listeners to the OK buttons in the details popups
    for (let i = 0; i < detailsPopups.length; i++) {
      const okBtn = detailsPopups[i].querySelector('.ok-btn');
      okBtn.addEventListener('click', () => hideDetailsPopup(i));
    }