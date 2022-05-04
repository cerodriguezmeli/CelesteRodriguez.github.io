var menu
window.onload = function(){
    window.addEventListener('click', function(e){
        if (!document.getElementById('menu-id').contains(e.target) && (!document.getElementById('navbar-id').contains(e.target))){
            console.log("Clicked outside menu");
            document.getElementById('click').checked=false; //the same code you've used to hide the menu
        }
        items = document.getElementsByClassName('navigation-item')
        var arr = Array.prototype.slice.call( items )
        const matchesNavItem = (element) => element.contains(e.target);

        if (arr.some(matchesNavItem)){
            console.log("Clicked nav item");
            document.getElementById('click').checked=false; //the same code you've used to hide the menu

        }
    })

    setTimeout(function() {
        window.scrollTo(0,document.body.scrollHeight);
    }, 1500);
}