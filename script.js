document.getElementById('copyButton').addEventListener('click', function() {
  // 1. Get the text from the <span> element
  const textToCopy = document.getElementById('accountNumber').innerText;
  
  // 2. Use the modern Clipboard API to copy the text
  navigator.clipboard.writeText(textToCopy).then(() => {
    // 3. Optional: Provide user feedback (e.g., change button text)
    const button = document.getElementById('copyButton');
    button.innerText = 'Copied!';
    
    // Change back to 'Copy' after 3 seconds
    setTimeout(() => {
      button.innerText = 'Copy';
    }, 3000);
    
  }).catch(err => {
    // Handle errors (e.g., if the browser doesn't support the API)
    console.error('Could not copy text: ', err);
    alert('Failed to copy. Please copy the number manually.');
  });
});