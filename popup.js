const form = document.getElementById('smsForm'); // Corrected ID

// Listen for click event on the predict button
document.getElementById('predict-button').addEventListener('click', async () => {
  const input = document.getElementById('sms-text').value;

  try {
    const response = await fetch('http://localhost:5000/predict_json', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({sms: input}),
    });

    if (response.ok) {
      const data = await response.json();
      document.getElementById('prediction').innerText = data.prediction;
      document.getElementById('confidence').innerText = data.confidence + '%';
    } else {
      console.error('Request failed:', response.status);
    }
  } catch (error) {
    console.error('Request failed:', error);
  }
});
