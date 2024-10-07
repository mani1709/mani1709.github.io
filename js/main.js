document.querySelector('#contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    setTimeout(function() {
        document.getElementById('success-modal').style.display = 'flex';
        document.body.classList.add('modal-active');
    }, 500);
});

document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('success-modal').style.display = 'none';
    document.body.classList.remove('modal-active');
    
    document.querySelector('#contact-form').reset();
});