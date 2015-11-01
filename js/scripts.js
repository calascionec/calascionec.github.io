(function() {
    //create mobile element
    var mobile = document.createElement('div');
    mobile.className = 'nav-mobile';
    document.querySelector('.nav').appendChild(mobile);

    //hasClass
    function hasClass(elem, className) {
        return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
    }

    //toggleClass
    function toggleClass(elem, className) {
        var newClass = '' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
        if (hassClass(elem, className)) {
            while (newClass.indexOf(' ' + className + ' ') >= 0) {
                newClass = newClass.replace(' ' + className + ' ', ' ');
            }
            elem.className = newClass.replace(/^\s+|\s+$/g, '');
        } else {
            elem.className += ' ' + className;
        }
    }

    //mobile nav function
    var mobileNav = document.querySelector('.nav-mobile');
    var toggle = document.quertySelector('.nav-list');
    mobileNav.onclick = function() {
        toggleClass(this, 'nav-mobile-open');
        toggleClass(toggle, 'nav-active');
    };
})();
