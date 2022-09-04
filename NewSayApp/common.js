$( document ).ready(function() {
	
	//Word List
	var listArray;
	var count = 0;
	
	$('#spelling-area').hide();
	
	//Taking word enter in the  text box at the bottom of the page and putting in a array.
	$("#enterBtn").click(function(){
		var list = $("#inputWordsTxt").val();
		
		listArray = list.split("\n");
		
		$("#totalWordCount").val(listArray.length);
		
		$('#spelling-area').show();
		
		$('#enter-area').hide();
		
		

	});
	
  /********************\
	*  Previous Button   *
	\********************/
	
		$("#previousBtn").click(function(){
			if(count == 0){
				count = listArray.length - 1;
				$("#totalLeft").val(listArray.length - count);
			}else{
				count = count - 1;
				$("#totalLeft").val(listArray.length - count);
			}
	});
		
	
	/********************\
	*  Say Button        *
	\********************/
	
	$("#sayBtn").click(function(){
		  var word = listArray[count];
		  responsiveVoice.speak(word)
	});
	
  /********************\
	*  Show Button       *
	\********************/
	
	$("#showBtn").click(function(){
		
			$("#outputWordTxt").val(listArray[count]);
			
			$("#spelledCount").val(count + 1);
	});
	
  /********************\
	*  Next Button       *
	\********************/
	
	$("#nextBtn").click(function(){
			if(count == listArray.length -1){
				count = 0;
				$("#totalLeft").val(listArray.length - count);
			}else{
				count = count +1;
				$("#totalLeft").val(listArray.length - count);
			}
	});
		

		
});
	
	