const tooltips = tippy('.tutorial-item', {
    trigger: 'click',
    hideOnClick: false,
    animation: 'fade',
    onShow(instance) {
        const index = Array.from(document.querySelectorAll('.tutorial-item')).indexOf(instance.reference);
        instance.setProps({
            animation: index === 0 ? 'scale' : index === 1 ? 'fade' : index === 2 ? 'shift-toward' : index === 3 ? 'perspective' : 'scale',
        });
    }
});

let currentTooltipIndex = 0;

const showNextTooltip = () => {
    if (currentTooltipIndex < tooltips.length) {
        tooltips[currentTooltipIndex].show();
    }
};

window.addEventListener('load', () => {
    showNextTooltip();
});

tooltips.forEach((tooltip, index) => {
    tooltip.reference.addEventListener('click', () => {
        tooltip.hide(); 
        currentTooltipIndex = (index + 1) % tooltips.length; 
        showNextTooltip(); 
    });
});
