// 1. Dynamic Portfolio Sorting and Filtering Mechanics
function filterProjects(category) {
    // Select all project card domestic components
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // Toggle active state visualization on buttons
    buttons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Run visibility filtering logic
    cards.forEach(card => {
        if (category === 'all') {
            card.style.display = 'block';
            setTimeout(() => card.style.opacity = '1', 50);
        } else {
            if (card.classList.contains(category)) {
                card.style.display = 'block';
                setTimeout(() => card.style.opacity = '1', 50);
            } else {
                card.style.opacity = '0';
                card.style.display = 'none';
            }
        }
    });
}

// 2. Budget Estimation Algorithm 
function calculateEstimate() {
    const type = document.getElementById('project-type').value;
    const footageInput = document.getElementById('square-footage').value;
    const premiumCheck = document.getElementById('premium-materials').checked;
    const displayPrice = document.getElementById('calculated-price');

    // Validate edge-case boundary sizing data
    const squareFootage = Math.max(0, parseFloat(footageInput) || 0);

    // Apply baseline rate multipliers
    let costPerSqFt = type === 'commercial' ? 280 : 150;
    let baseTotal = squareFootage * costPerSqFt;

    // Apply sustainable premium multiplier updates
    if (premiumCheck) {
        baseTotal *= 1.20;
    }

    // Format output numerical elements to currency strings
    const formattedPrice = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    }).format(baseTotal);

    // Update frontend text node
    displayPrice.textContent = formattedPrice;
}
