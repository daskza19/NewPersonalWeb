var rellax = new Rellax ('.rellax');

var lastId,
topMenu = $("#sticky-projects-index"),
topMenuHeight = topMenu.outerHeight()+1,
menuItems = topMenu.find("a"),
scrollItems =menuItems.map(function(){
    var item = $($(this).attr("href"));
    if(item.length){return item;}
})