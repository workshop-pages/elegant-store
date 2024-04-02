export default function timerFunction() {
    function countdownTimer(endDate) {
        const timer = document.getElementById('timer');
        const days = timer.querySelector('.days');
        const hours = timer.querySelector('.hours');
        const minutes = timer.querySelector('.minutes');
        const seconds = timer.querySelector('.seconds');

        function updateTimer() {
            const timeRemaining = getTimeRemaining(endDate);

            days.textContent = String(timeRemaining.days).padStart(2, '0');
            hours.textContent = String(timeRemaining.hours).padStart(2, '0');
            minutes.textContent = String(timeRemaining.minutes).padStart(2, '0');
            seconds.textContent = String(timeRemaining.seconds).padStart(2, '0');

            if (timeRemaining.total <= 0) {
                clearInterval(timerInterval);
            }
        }

        updateTimer();
        const timerInterval = setInterval(updateTimer, 1000);
    }

    const getTimeRemaining = function (endDate) {
        const total = Date.parse(endDate) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
        const days = Math.floor(total / (1000 * 60 * 60 * 24));

        return {
            total,
            days,
            hours,
            minutes,
            seconds
        };
    }

    const endDate = '2024-05-28T00:00:00'; // Change this to the actual end date of the promotion
    countdownTimer(endDate);
}