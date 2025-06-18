document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const uid = document.getElementById('uid').value.trim();
    const pass = document.getElementById('pass').value;
    const errorMessage = document.getElementById('errorMessage');
            
    errorMessage.textContent = '';

    if (!uid || !pass)
    {
        errorMessage.textContent = 'Both fields are required!';
        return;
    }
            
    const validUsername = 'admin';
    const validPassword = 'pass123';
            
    if (uid === validUsername && pass === validPassword)
    {
        window.location.href = 'emp.html';
    }
    else
    {
        errorMessage.textContent = 'Invalid username or password!';
    }
});