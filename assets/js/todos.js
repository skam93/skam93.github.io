//click on li to toggle completed tasks
$("ul").on("click", "li", function(){ //in order to select newly created items, we need to give them the effect by having 'li'
  $(this).toggleClass("completed");
});
//click on X to delete a list
$("ul").on("click", "span", function(e){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  e.stopPropagation();//prevents the evnt from bubbling up the DOM tree, preventing any parent handlers from being notified of the event.
});
$("input[type = 'text']").on("keypress", function(e){
  if(e.which === 13){
    var text = $(this).val();
    $(this).val("");
    //create a new li and add to ul
    $("ul").append("<li><span><i class='fa fa-scissors' aria-hidden='true'></i> </span>" + text + "</li>");
  }
});
$(".fa-meh-o").on("click", function(){
  $("input[type='text']").fadeToggle();
})
