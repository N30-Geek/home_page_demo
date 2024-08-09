const menu_items = document.querySelectorAll(".menu ul li");

// affiche le marqueur black en arriereur plan du menu

menu_items.forEach(item => {
    item.addEventListener("mouseover", function(e){
        console.log("I'am here");
        item.classList.add(".hover");
    });
});