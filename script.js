document.addEventListener("DOMContentLoaded", function () {
    const counterElement = document.getElementById("counter");
    const addBtn = document.getElementById("addBtn");
    const minusBtn = document.getElementById("minusBtn");
  
    let count = 0;
  
    function updateCounter() {
      counterElement.textContent = count;
    }
  
    addBtn.addEventListener("click", function () {
      if (count < 10) {
        count++;
        updateCounter();
      }
    });
  
    minusBtn.addEventListener("click", function () {
      if (count > 0) {
        count--;
        updateCounter();
      }
    });
  
    updateCounter();
  });
  