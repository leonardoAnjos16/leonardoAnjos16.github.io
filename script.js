const nameElement = document.querySelector('#name');
const name = nameElement.innerHTML;

const typewriterAnimation = (index = 0) => {
    if (index >= name.length) return;
    nameElement.innerHTML += name[index];
    setTimeout(() => { typewriterAnimation(index + 1); }, 100);
};

nameElement.innerHTML = '';
typewriterAnimation();