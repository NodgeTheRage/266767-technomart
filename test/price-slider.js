    $( function() {
    $( ".slider-range" ).slider({
      range: true,
      min: 0,
      max: 30000,
      values: [ 0, 30000 ],
      slide: function( event, ui ) {
        $( ".amount" ).val(ui.values[ 0 ] );
        $( ".amount-second" ).val(ui.values[ 1 ] );
      }
    });
    $( ".amount" ).val($( ".slider-range" ).slider( "values", 0 ) );
    $( ".amount-second" ).val($( ".slider-range" ).slider( "values", 1 ) );
           // Изменение местоположения ползунка при вводиде данных в первый элемент input
		  $("input.amount").change(function(){
		  	var value1=$("input.amount").val();
		  	var value2=$("input.amount-second").val();
		      if(parseInt(value1) > parseInt(value2)){
		  		value1 = value2;
		  		$("input.amount").val(value1);
		  	}
		  	$(".slider-range").slider("values",0,value1);	
		  });
		      
		  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
		  $("input.amount-second").change(function(){
		  	var value1=$("input.amount").val();
		  	var value2=$("input.amount-second").val();

		  	if(parseInt(value1) > parseInt(value2)){
		  		value2 = value1;
		  		$("input.amount-second").val(value2);
		  	}
		  	$(".slider-range").slider("values",1,value2);
		  });

		  // фильтрация ввода в поля
			jQuery('.amount, .amount-second').keypress(function(event){
				var key, keyChar;
				if(!event) var event = window.event;
				
				if (event.keyCode) key = event.keyCode;
				else if(event.which) key = event.which;
			
				if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
				keyChar=String.fromCharCode(key);
				
				if(!/\d/.test(keyChar))	return false;
			
			});

  } );
