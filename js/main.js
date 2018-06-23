(function(){
    var openModalBtn  = document.querySelector('[data-btn]');
    var closeModalBtn = document.querySelector('[data-close-modal]');
    var modalWindow   = document.querySelector('.site-content .modal-window');

    openModalBtn .addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    modalWindow  .addEventListener('click', modalController);

    function openModal() {
        modalWindow.classList.add('active')
    }

    function closeModal(e) {
        modalWindow.classList.remove('active');
    }

    function modalController(e) {
        if (!e.target.closest('.modal-window .modal-box')) {
            closeModal();
        }
    }

    // classes, this, trow, 

    // var Dog = function(name) {
    //     this.name = name;
    //     this.bark = function() {
    //         console.log(this.name + ' is barking!');
    //     }
    // }

    // var chack = new Dog('Chack');
    // var tarry = new Dog('Tarry');

    // chack.bark();
    // tarry.bark();

    var Animate = function(element, animation, color) {
        this.element   = element;   // string
        this.elementColor = color;
        this.animation = animation; // string
        var that = this;

        this.queryElement = document.querySelector(that.element);
        this.queryElement.style.display = 'none';        
        this.queryElement.classList.add('pre-animate');
        this.queryElement.classList.add(that.animation);
        this.queryElement.style.background = color;

        this.animate  = function() {
            console.log('animating');
            this.queryElement.style.display = 'block';
            
            setTimeout(function() {
                that.queryElement.classList.remove('pre-animate');
                that.queryElement.classList.remove(that.animation);
            }, 1000);
        }
    }

    var cell1 = new Animate('#cell1', 'bottom-top', '#1abc9c');
    var cell2 = new Animate('#cell2', 'top-bottom', '#2ecc71');
    var cell3 = new Animate('#cell3', 'left-right', '#3498db');
    var cell4 = new Animate('#cell4', 'right-left', '#9b59b6');
    var cell5 = new Animate('#cell5', 'left-right', '#f1c40f');
    var cell6 = new Animate('#cell6', 'top-bottom', '#e67e22');
    var cell7 = new Animate('#cell7', 'bottom-top', '#e74c3c');
    var cell8 = new Animate('#cell8', 'left-right', '#ecf0f1');
    var cell9 = new Animate('#cell9', 'top-bottom', '#2c3e50');


    var boxes = [cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8, cell9];
    
    boxes.map(function(i) {

        i.animate();
    })
})();
