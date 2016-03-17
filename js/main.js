$(document).ready(function(){

	if (window.matchMedia('(max-width: 900px)').matches)
	{
	     $(".copyright").remove().insertAfter($(".footer_logo"));
	};
	if (window.matchMedia('(max-width: 768px)').matches)
	{
	     $(".left_sidebar").remove().insertAfter($(".content"));
	};

	// $("#form").submit(function() { //устанавливаем событие отправки для формы с id=form
 //        var form_data = $(this).serialize(); //собераем все данные из формы
 //        $.ajax({
	//         type: "POST", //Метод отправки
	//         url: "send.php", //путь до php фаила отправителя
	//         data: form_data,
	//         success: function() {
	//             //код в этом блоке выполняется при успешной отправке сообщения
	//             alert("Ваше сообщение отпрвлено!");
	//        	}
	//    	});
	// });	


	$('#catalog').click(function(){  
        $.ajax({  
            url: "page1.html",  
            cache: false,  
            success: function(html){  
    	        $("#page_content").html(html);  
            }  
        });  
    });  
              
            // $('#btn2').click(function(){  
            //     $.ajax({  
            //         url: "page2.html",  
            //         cache: false,  
            //         success: function(html){  
            //             $("#content").html(html);  
            //         }  
            //     });  
            // });  
              
	




});


		

