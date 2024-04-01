const fetch = require('node-fetch'); // Import the fetch module

async function sendMessageToWebhook(webhookUrl, message) {
    const payload = {
        content: message
    };

    try {
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            console.log('Message sent successfully!');
        } else {
            console.error('Failed to send message:', response.status, response.statusText);
        }
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

// Set your Discord webhook URL
const webhookUrl = 'https://discord.com/api/webhooks/1224470365007511652/MQKzLyDjYfeJz6tbP5QGJPgnC-BgX4E-w75n2pvVDUA2UebfTTnl-Fw3x6jsAiQhDhC3';

// Message to send
const message = 'support has 4 workers under his desk';

// Send message to the webhook
sendMessageToWebhook(webhookUrl, message);