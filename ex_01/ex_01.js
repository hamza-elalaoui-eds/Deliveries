document.addEventListener('DOMContentLoaded', function () {
    var splide = new Splide('#latest-creations-carousel', {
        type       : 'loop',
        perPage    : 3,
        focus      : 'center',
        pagination : false,
        arrows     : false,
        autoplay   : true,
        interval   : 5000,
        speed      : 1000
    });

    splide.mount();
});
