var menu
window.onload = function(){
    window.addEventListener('click', function(e){
        if (!document.getElementById('menu-id').contains(e.target) && (!document.getElementById('navbar-id').contains(e.target))){
            console.log("Clicked outside menu");
            document.getElementById('click').checked=false; //the same code you've used to hide the menu
        } 

        // if (document.getElementById('technologies-section').contains(e.target)){
        //     console.log("Clicked technologies-section");
        //     const scrollingElement = (document.scrollingElement || document.body);
        //     scrollingElement.scrollTop = scrollingElement.scrollHeight;
        // } 
    })

    setTimeout(function() {
        window.scrollTo(0,document.body.scrollHeight);
    }, 1500);
}