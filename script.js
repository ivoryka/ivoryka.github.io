function toText(n)
{
	if(n.style.display === "none" ){
		n.style.display = "block";
	}
	else
	{
		n.style.display = "none";
	}
}

$(document).ready(function(){

		$(".nowlink").css(
			"background-color", "#33cc33"
		); //css로 만들었던 nowlink 대체
		
		$("a").click(function(){
			var alink=$(this).attr("href");
			if(alink=="0"){
			event.preventDefault();
			event.stopPropagation();
			alert("준비중입니다");
			};
		});
		
        $(".totop").click(function() {
            $('html, body').animate({
                scrollTop : 0
            }, 500);
            return false;
        });
    });

