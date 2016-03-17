$(document).ready(function(){

	if (window.matchMedia('(max-width: 900px)').matches)
	{
	     $(".copyright").remove().insertAfter($(".footer_logo"));
	};
	if (window.matchMedia('(max-width: 768px)').matches)
	{
	     $(".left_sidebar").remove().insertAfter($(".content"));
	};

	$("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
        var form_data = $(this).serialize(); //собераем все данные из формы
        $.ajax({
	        type: "POST", //Метод отправки
	        url: "send.php", //путь до php фаила отправителя
	        data: form_data,
	        success: function() {
	            //код в этом блоке выполняется при успешной отправке сообщения
	            alert("Ваше сообщение отпрвлено!");
	       	};
	   	});
	});	

	// function get_content(adress){
	// 	$.ajax({
	// 		url: adress,
	// 		success: function(data){
	// 			$('#page_content').html(data);
	// 		},
	// 		error: function(){
	// 			alert("Ошибка! Страница недоступна");
	// 		}
	// 	});
	// }
	


	// $('#catalog').click(function(){
	// 	$.get('page1.html', function(data) {
	// 		$('#page_content').html(data);
	// 	});
	// });
	// return false;



});


		

