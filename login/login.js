document.querySelector('.login-button').addEventListener('click', function() {
    const inputs = document.querySelectorAll('.login');
    const username = inputs[0].value;
    const password = inputs[1].value;
    const message = document.querySelector('.message');

    if (username === 'admin' && password === 'senha') {
        window.location.href = 'index.html';
        message.textContent = 'Login bem-sucedido!';
        message.style.color = 'green';
    } else {
        message.textContent = 'Usuário ou senha incorretos.';
        message.style.color = 'red';
    }
});