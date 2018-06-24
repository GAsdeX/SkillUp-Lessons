(function(){
    var switchAccordeon = document.querySelectorAll('[data-switch-accordeon]');

    Object.values(switchAccordeon).map(function(i) {
        i.addEventListener('click', switchController)
    })
    Object.values(switchAccordeon)[0].classList.add('active');

    function switchController(e) {
        e.preventDefault();
        console.log(this);

        removeClass(switchAccordeon, 'active');
        this.classList.add('active');
    }

    function removeClass(el, className){
        Object.values(el).map(function(i) {
            i.classList.remove(className);
        })
    }
})();
