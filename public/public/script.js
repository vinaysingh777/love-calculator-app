document.getElementById('loveForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name1 = document.getElementById('name1').value;
    const name2 = document.getElementById('name2').value;
    
    fetch('http://localhost:3000/calculate-love', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name1, name2 })
    })
    .then(response => response.json())
    .then(data => {
        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = `${data.name1} and ${data.name2} have a love percentage of ${data.lovePercentage}%`;
    })
    .catch(error => console.error('Error:', error));
});
