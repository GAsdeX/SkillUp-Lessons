(function(){
    var slides = document.querySelectorAll('.slide');
    var button = document.querySelectorAll('.slider-box .btn-container');

    console.log(slides)
    console.log(button)

    var currentSlide = 1;

    function setSlide() {
        slides
    }

    Object.values(button).map(function(el, index) {
        el.addEventListener('click', function slideController(e, slide) {
            var buttonClasses = Object.values(this.classList);

            if (currentSlide >= 1 || currentSlide <= Object.values(slides).length) {
                
                if (buttonClasses.indexOf('next') != -1) {
                    if (currentSlide != Object.values(slides).length) {
                        currentSlide++;                        
                    }
                } else {
                    if (currentSlide != 1) {
                        currentSlide--;
                    }
                }
                
                Object.values(slides).map(function(el) {
                    el.classList.remove('active');
                });
                Object.values(slides)[currentSlide - 1].classList.add('active');
            }
            
        })
    });
    Object.values(slides)[0].classList.add('active');
})();
