let counter = 0;
const value = document.querySelector('#value');
const buttonContainer = document.querySelector('.button-container');

buttonContainer.addEventListener('click', (event) => {
   const styles = event.target.classList;
   if (styles.contains("decrease")) {
      counter--;
   } else if (styles.contains("increase")) {
      counter++;
   } else {
      counter = 0;
   }

   if (counter > 0) {
      value.style.color = "green";
   }
   if (counter < 0) {
      value.style.color = "red";
   }
   if (counter === 0) {
      value.style.color = "#222";
   }
   value.textContent = counter;
});
