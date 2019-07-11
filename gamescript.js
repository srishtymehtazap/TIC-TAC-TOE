$(document).ready(function(){
var count=0;
$(".row1 div,.row2 div,.row3 div").click(function(){
	if($("#one").hasClass('O')&&
	$("#two").hasClass('O')&&
	$("#three").hasClass('O')||
	$("#four").hasClass('O')&&
	$("#five").hasClass('O')&&
	$("#six").hasClass('O')||
	$("#seven").hasClass('O')&&
	$("#eight").hasClass('O')&&
	$("#nine").hasClass('O')||
	$("#one").hasClass('O')&&
	$("#four").hasClass('O')&&
	$("#seven").hasClass('O')||
	$("#two").hasClass('O')&&
	$("#five").hasClass('O')&&
	$("#eight").hasClass('O')||
	$("#three").hasClass('O')&&
	$("#six").hasClass('O')&&
	$("#nine").hasClass('O')||
	$("#one").hasClass('O')&&
	$("#five").hasClass('O')&&
	$("#nine").hasClass('O')||
	$("#three").hasClass('O')&&
	$("#five").hasClass('O')&&
	$("#seven").hasClass('O')
	)
{
	alert('HurraH!! O Won the Game...')
	}
	else if	($("#one").hasClass('X')&&
	$("#two").hasClass('X')&&
	$("#three").hasClass('X')||
	$("#four").hasClass('X')&&
	$("#five").hasClass('X')&&
	$("#six").hasClass('X')||
	$("#seven").hasClass('X')&&
	$("#eight").hasClass('X')&&
	$("#nine").hasClass('X')||
	$("#one").hasClass('X')&&
	$("#four").hasClass('X')&&
	$("#seven").hasClass('X')||
	$("#two").hasClass('X')&&
	$("#five").hasClass('X')&&
	$("#eight").hasClass('X')||
	$("#three").hasClass('X')&&
	$("#six").hasClass('X')&&
	$("#nine").hasClass('X')||
	$("#one").hasClass('X')&&
	$("#five").hasClass('X')&&
	$("#nine").hasClass('X')||
	$("#three").hasClass('X')&&
	$("#five").hasClass('X')&&
	$("#seven").hasClass('X')
	)
{
	alert('HurraH!! X Won the Game...')
	}
else if(count==9){
		alert('its a tie.It will restart.')
		}
else if(count%2==0)
  {
  $(this).text("X")
  $(this).addClass(' X')
  $(this).css({"background-image": "linear-gradient(to right,yellow,red)", "font-size": "500%","color":"white","position":"inherit"});
  count++
 }

else{
	count++
	$(this).text("O")
	 $(this).addClass('O')
	$(this).css({"background-image": "linear-gradient(to right,yellow,red)", "font-size": "500%","color":"white","position":"inherit"});
}



});
});
