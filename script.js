function copyAccountNumber() {
    const accountNumber = document.getElementById('account-number-text').textContent;
    const copyStatus = document.getElementById('copy-status');
    
    // Using the modern Clipboard API
    navigator.clipboard.writeText(accountNumber)
        .then(() => {
            copyStatus.textContent = "Account number copied to clipboard!";
            copyStatus.style.color = "#4CAF50";
            
            // Reset status after 3 seconds
            setTimeout(() => {
                copyStatus.textContent = "";
            }, 3000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            copyStatus.textContent = "Failed to copy. Please select and copy manually.";
            copyStatus.style.color = "#f44336";
        });
}