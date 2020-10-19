document.querySelectorAll('.typewriter').forEach(elem => {
    const text = elem.innerHTML;

    let index = 0;
    elem.innerHTML = '';

    const animate = () => {
        if (index >= text.length) return;
        elem.innerHTML += text[index++];
        setTimeout(animate, 100);
    };

    animate();
});