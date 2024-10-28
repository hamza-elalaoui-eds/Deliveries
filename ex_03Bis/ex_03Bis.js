const tooltips = tippy('.tutorial-item', {
    trigger: 'click',
    hideOnClick: true,
    animation: 'scale',
});

window.addEventListener('load', () => {
    if (tooltips[0]) {
        tooltips[0].show();
    }
});
