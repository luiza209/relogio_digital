function updateClock() {
  const clock = new Date();
  const hours = String(clock.getHours()).padStart(2, '0');
  const minutes = String(clock.getMinutes()).padStart(2, '0');
  const seconds = String(clock.getSeconds()).padStart(2, '0');

  const hoursElement = document.querySelector('.hours');
  const minutesElement = document.querySelector('.minutes');
  const secondsElement = document.querySelector('.seconds');

  hoursElement.textContent = hours;
  minutesElement.textContent = minutes;
  secondsElement.textContent = seconds;
}

// Atualiza o relógio a cada segundo
setInterval(updateClock, 1000);

// Chama a função para definir a hora inicial
updateClock();
