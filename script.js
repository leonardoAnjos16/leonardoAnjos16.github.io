document.querySelectorAll('.typewriter').forEach(elem => {
    let index = 0;
    const { text } = elem.dataset;

    const animate = () => {
        if (index >= text.length) return;
        elem.innerHTML += text[index++];
        setTimeout(animate, 100);
    };

    animate();
});