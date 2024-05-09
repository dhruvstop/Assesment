document.addEventListener("DOMContentLoaded", function() {
    const tripForm = document.getElementById('tripCalculator');
    const costResult = document.getElementById('costResult');

    tripForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const destination = tripForm.elements['destination'].value;
        const duration = parseInt(tripForm.elements['duration'].value);
        const budget = parseInt(tripForm.elements['budget'].value);
        const tripCost = calculateTripCost(destination, duration);
        if (tripCost <= budget) {
            costResult.textContent = `Your trip to ${destination} for ${duration} days is within your budget!`;
        } else {
            costResult.textContent = `Sorry, your trip to ${destination} for ${duration} days exceeds your budget.`;
        }
    });

    function calculateTripCost(destination, duration) {
        // Example calculation logic (replace with your own)
        const costPerDay = 100; // Example cost per day
        return costPerDay * duration;
    }

    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        // Example: Send form data to server or display it
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        // Clear form after submission
        contactForm.reset();
        alert('Your message has been submitted. We will get back to you soon!');
    });

    // Add scrolling animations
    const sections = document.querySelectorAll('section');
    const scrollAnimation = function() {
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const windowHeight = window.innerHeight;
            if (window.scrollY > sectionTop - windowHeight + sectionHeight * 0.3) {
                section.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', scrollAnimation);
    window.addEventListener('resize', scrollAnimation);
    scrollAnimation(); // Initial animation check
});
