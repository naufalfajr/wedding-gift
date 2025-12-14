function copyAccountNumber() {
    // Get the full account number from all card number groups
    const cardNumberGroups = document.querySelectorAll('.card-number-group');
    let fullNumber = '';
    cardNumberGroups.forEach(group => {
        fullNumber += group.textContent;
    });
    
    const copyStatus = document.getElementById('copy-status');
    const copyBtn = document.querySelector('.copy-btn');
    const btnText = document.querySelector('.btn-text');
    
    // Using the modern Clipboard API
    navigator.clipboard.writeText(fullNumber)
        .then(() => {
            copyStatus.textContent = "Account number copied to clipboard!";
            copyStatus.style.color = "#4CAF50";
            
            // Change button text to "Copied!" with check icon
            copyBtn.innerHTML = '<i class="fas fa-check"></i> <span class="btn-text">Copied!</span>';
            copyBtn.style.backgroundColor = 'rgba(76, 175, 80, 0.3)';
            copyBtn.classList.add('copied');
            
            // Reset after 3 seconds
            setTimeout(() => {
                copyStatus.textContent = "";
                copyBtn.innerHTML = '<i class="far fa-copy"></i> <span class="btn-text">Copy</span>';
                copyBtn.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                copyBtn.classList.remove('copied');
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            copyStatus.textContent = "Failed to copy. Please select and copy manually.";
            copyStatus.style.color = "#f44336";
        });
}

// Check if background image loads successfully
window.addEventListener('load', function() {
    const bgImage = new Image();
    bgImage.src = 'flower-background.jpg';
    
    bgImage.onload = function() {
        console.log('Background image loaded successfully');
        document.body.setAttribute('data-bg-loaded', 'true');
    };
    
    bgImage.onerror = function() {
        console.log('Background image not found, using fallback pattern');
        document.body.style.backgroundImage = "url('data:image/svg+xml,%3Csvg width=\"100\" height=\"100\" viewBox=\"0 0 100 100\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath d=\"M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\" fill=\"%238b7355\" fill-opacity=\"0.1\" fill-rule=\"evenodd\"/%3E%3C/svg%3E')";
        document.body.setAttribute('data-bg-loaded', 'true');
    };
});