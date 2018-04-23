$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

$("ul").on("click","span",function(e){
$(this).parent().fadeOut(500,function(){
	$(this).remove();
})

	e.stopPropagation();
});

$("#additem").keypress(function(e){
	if(e.which===13){
		var todoText=$(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+todoText+"</li");
	}
});
$("#day").click(function(){

	$(this).keypress(function(e){
		if(e.which===13){
			var date=$(this).val();
			$("h1").append( date );
			$(this).remove();
		}
	})
	
});
$(".fa-plus").click(function(){
	$("#additem").fadeToggle();
})