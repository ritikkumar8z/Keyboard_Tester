document.addEventListener('keydown', function(event) {
    const keyElement = document.getElementById('key');
    const keyCodeElement = document.getElementById('key-code');
    const typedKeysElement = document.getElementById('typed-keys');
    
    // Update key and key code display
    keyElement.querySelector('span').textContent = event.key === ' ' ? 'Space' : event.key;
    keyCodeElement.querySelector('span').textContent = event.keyCode;
  
    // Append typed key to the typed keys display
    typedKeysElement.textContent += event.key === ' ' ? ' ' : event.key;
    
    // Scroll to the bottom if the text overflows
    typedKeysElement.scrollTop = typedKeysElement.scrollHeight;
  });
  