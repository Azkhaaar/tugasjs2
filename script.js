const bgColorBtn = document.getElementById('bgColorBtn');
const darkModeBtn = document.getElementById('darkModeBtn');
const fontStyleBtn = document.getElementById('fontStyleBtn');
const fontSizeInput = document.getElementById('fontSize');
const content = document.getElementById('content');
const body = document.body;

bgColorBtn.addEventListener('click', () => {
    const currentColor = body.style.backgroundColor;
    body.style.backgroundColor = currentColor === 'lightblue' ? 'white' : 'lightblue';
});

darkModeBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});

fontStyleBtn.addEventListener('click', () => {
    content.classList.toggle('serif-font');
});

fontSizeInput.addEventListener('input', (e) => {
    content.style.fontSize = `${e.target.value}px`;
});