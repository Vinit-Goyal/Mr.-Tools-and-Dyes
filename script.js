document.addEventListener('DOMContentLoaded', () => {
    // Example: Add smooth scroll behavior for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50, // Offset to account for fixed header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation (basic example)
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');

            if (!name.value || !email.value || !message.value) {
                e.preventDefault();
                alert('Please fill out all fields before submitting the form.');
            }
        });
    }
});


// Contact Us Form Done Button Animation 

document.getElementById('send-mess').addEventListener('click', ()=>{
    window.location.href = "verify.html";
})



document.addEventListener('DOMContentLoaded', function () {
    setTimeout(function () {
        document.querySelector('.tick').classList.add('visible');
    }, 1000); // Show tick after 1 second
});
