const flatpickr = require("flatpickr");

import flatpickr from "flatpickr"

const datePicker = flatpickr("#datetime-picker");



    const startButton = document.querySelector('[data-start]');
    startButton.addEventListener('click', () => {
      const selectedDate = datePicker.selectedDates[0];
      const countdownInterval = setInterval(() => {
        const currentDate = new Date();
        const timeDifference = selectedDate - currentDate;
        
        if (timeDifference <= 0) {
          clearInterval(countdownInterval);
          updateTimerDisplay(0, 0, 0, 0);
        } else {
          const timeObject = convertMs(timeDifference);
          updateTimerDisplay(timeObject.days, timeObject.hours, timeObject.minutes, timeObject.seconds);
        }
      }, 1000);
    });

    function convertMs(ms) {
        
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;
      
        
        const days = Math.floor(ms / day);
        
        const hours = Math.floor((ms % day) / hour);
        
        const minutes = Math.floor(((ms % day) % hour) / minute);
        
        const seconds = Math.floor((((ms % day) % hour) % minute) / second);
      
        return { days, hours, minutes, seconds };
      }
      

    function addLeadingZero(value) {
      return value.toString().padStart(2, '0');
    }

    function updateTimerDisplay(days, hours, minutes, seconds) {
      document.querySelector('[data-days]').textContent = addLeadingZero(days);
      document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
      document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
      document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);
    }