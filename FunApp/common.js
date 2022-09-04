$( document ).ready(function() {
	

	//Used to change the banner that the top of the webpage
	var adNumber = Math.floor((Math.random() * 10) + 1);
	$("#advertisement").attr("src","ad".concat( adNumber, ".JPG" ));
	
	//Word List
	var listArray;
	var count = 0;
	
	//Taking word enter in the  text box at the bottom of the page and putting in a array.
	$("#enterBtn").click(function(){
		var list = $("#inputWordsTxt").val();
		
		listArray = list.split("\n");
		
		$("#totalWordCount").val(listArray.length);
	});
	
  /********************\
	*  Previous Button   *
	\********************/
	
		$("#previousBtn").click(function(){
			if(count == 0){
				count = listArray.length - 1;
			}else{
				count = count - 1;
			}
	});
		
	
	/********************\
	*  Say Button        *
	\********************/
	
	$("#sayBtn").click(function(){
		  var word = listArray[count];
			var msg = new SpeechSynthesisUtterance(word);
    	window.speechSynthesis.speak(msg);
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
			}else{
				count = count +1;
			}
	});
		

		
});
	
	