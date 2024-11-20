// Handle Registration Form Submission
const registrationForm = document.getElementById('registrationForm');
registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const course = document.getElementById('course').value;

    alert(`Thank you, ${name}, for registering for ${course}. A confirmation email has been sent to ${email}.`);
    registrationForm.reset();
});

// Handle Feedback Form Submission
const feedbackForm = document.getElementById('feedbackForm');
const feedbackList = document.getElementById('feedbackList');

feedbackForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const feedbackText = document.getElementById('feedbackText').value;
    const rating = document.getElementById('rating').value;

    const feedbackItem = document.createElement('div');
    feedbackItem.classList.add('feedback-item');
    feedbackItem.innerHTML = `<p>${feedbackText}</p><p>Rating: ${rating}/5</p>`;

    feedbackList.appendChild(feedbackItem);
    feedbackForm.reset();
});
