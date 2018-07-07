(function(){
    var topBarTabs  = document.querySelectorAll('[data-switch-accordeon]');  // Object
    var contentBars = document.querySelectorAll('.entry-box'); // Object

    var removeClass = function(element, className) {
        Object.values(element).map(function(el, index){
            el.classList.remove(className);
        })
    }


    Object.values(topBarTabs).map(function(el, index){
        el.addEventListener('click', activateTab);

        function activateTab(e) {
            console.log(this.classList);
            console.log(index);

            removeClass(topBarTabs, 'active');            
            this.classList.add('active');

            removeClass(contentBars, 'active');                        
            Object.values(contentBars)[index].classList.add('active')
        }
    })



    removeClass(topBarTabs, 'active');           
    Object.values(topBarTabs)[0].classList.add('active')

    removeClass(contentBars, 'active');                        
    Object.values(contentBars)[0].classList.add('active')

    
})();
