var tope = $('.banner-r').innerHeight();

			
			$(window).scroll(function(){
				
				var scroll = $(window).scrollTop();

				if(scroll > tope){
					$('.navv').addClass('blanca');
					$('.flot-reverse').addClass('azul');
					$('.p-no').addClass('visible');
				}else{
					$('.navv').removeClass('blanca');
					$('.flot-reverse').removeClass('azul');
					$('.p-no').removeClass('visible');
				}
			});
