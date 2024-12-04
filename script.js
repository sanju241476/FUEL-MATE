// Dynamic calculation of total cost
document.getElementById('quantity').addEventListener('input', function() {
    let quantity = parseFloat(document.getElementById('quantity').value);
    const pricePerLiter = 110;
    if (!isNaN(quantity)) {
        const totalCost = quantity * pricePerLiter;
        document.getElementById('total-cost').innerText = totalCost.toFixed(2);
    } else {
        document.getElementById('total-cost').innerText = '0';
    }
});

// Order Form Submission (For demo purposes)
document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent actual form submission

    // Get the form data
    const fuelType = document.getElementById('fuel-type').value;
    const quantity = document.getElementById('quantity').value;
    const totalCost = (quantity * 110).toFixed(2);
    const address = document.getElementById('address').value;

    // Show the order summary
    document.getElementById('order-fuel-type').innerText = fuelType.charAt(0).toUpperCase() + fuelType.slice(1);
    document.getElementById('order-quantity').innerText = quantity;
    document.getElementById('order-total-cost').innerText = totalCost;
    document.getElementById('order-address').innerText = address;
    document.getElementById('order-status').innerText = "Order placed successfully!";

    // Hide the order form and show the order summary
    document.querySelector('.order-form').style.display = 'none';
    document.getElementById('order-summary').style.display = 'block';
});

// Button to place a new order
document.getElementById('new-order-button').addEventListener('click', function() {
    document.querySelector('.order-form').style.display = 'block';
    document.getElementById('order-summary').style.display = 'none';
});

// Show chat window when "Start Live Chat" is clicked
document.getElementById('start-chat-button').addEventListener('click', function() {
    document.getElementById('chat-window').style.display = 'block';
    document.getElementById('order-summary').style.display = 'none';
});

// Close chat window
document.getElementById('close-chat-button').addEventListener('click', function() {
    document.getElementById('chat-window').style.display = 'none';
    document.getElementById('order-summary').style.display = 'block';
});

// Simulate sending and receiving messages
document.getElementById('send-chat').addEventListener('click', function() {
    const userMessage = document.getElementById('chat-input').value;
    if (userMessage.trim() !== "") {
        // Display user message
        const userMessageDiv = document.createElement('div');
        userMessageDiv.classList.add('message', 'user-message');
        userMessageDiv.innerText = "You: " + userMessage;
        document.getElementById('chat-messages').appendChild(userMessageDiv);

        // Simulate response from support bot
        setTimeout(() => {
            const botMessageDiv = document.createElement('div');
            botMessageDiv.classList.add('message', 'bot-message');
            botMessageDiv.innerText = "Support: Thank you for your message! How can I assist you further?";
            document.getElementById('chat-messages').appendChild(botMessageDiv);
        }, 1000);

        // Clear the input field
        document.getElementById('chat-input').value = "";
    }
});
