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
            copyStatus.textContent = "Nomor rekening berhasil disalin!";
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
            }, 5000);
        })
        .catch(err => {
            console.error('Failed to copy: ', err);
            copyStatus.textContent = "Gagal menyalin. Silakan blok teks dan salin manual.";
            copyStatus.style.color = "#f44336";
        });
}