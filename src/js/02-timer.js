import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const now = new Date();

    if (selectedDate <= now) {
      window.alert("Please choose a date in the future");
      document.querySelector('[data-start]').disabled = true;
    } else {
      document.querySelector('[data-start]').disabled = false;
    }
  },
};

const datePicker = flatpickr("#datetime-picker", options);

document.querySelector('[data-start]').addEventListener('click', () => {
  const selectedDate = datePicker.selectedDates[0];
  const now = new Date();
  const timeDifference = selectedDate - now;

  if (timeDifference > 0) {
    startTimer(timeDifference);
  }
});

function startTimer(timeDifference) {
  const timerInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeDifference);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent = addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent = addLeadingZero(seconds);

    if (timeDifference <= 0) {
      clearInterval(timerInterval);
    }

    timeDifference -= 1000;
  }, 1000);
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

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