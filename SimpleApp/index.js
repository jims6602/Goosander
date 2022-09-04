var input;
var dicTemp;
var dic;
var counter_row = 0;
var counter_column = 0;
var counter_word = 0;

   
var download = function(){
    input = document.getElementById("input-word-list").value;
    document.getElementById("input-word-list").value = "";
    processFile();
};

var processFile = function(){
	dicTemp = input.split("|");
	dic = new Array(dicTemp.length);

    for( var i = 1; i < dicTemp.length -1; i++){
		console.log(dicTemp[i])
		
		if( !(dicTemp[i] == '\n') ){
			
			if( counter_column == 0 ){
				dic[counter_row] = new Array(6);
			}
			
           dic[counter_row][counter_column] = dicTemp[i];

			if(counter_column == 5){
				counter_row++;
				counter_column = -1;
			}

            counter_column++;
		}

    }
};           

var previous = function(){
	document.getElementById("message-answer").innerHTML  = "";
	document.getElementById("answer").value = "";
	

    if(counter_word == 0){             
		counter_word = counter_row -1;
	}else{
        counter_word = counter_word -1;
    }
};   

var sayDefine  = function(){

	var definition = dic[counter_word][2];
	
	if('speechSynthesis' in window){
          var speech = new SpeechSynthesisUtterance(definition);
          speech.lang = 'en-US';
          window.speechSynthesis.speak(speech);
       }



};
var sayWordUsage  = function(){

	var wordUsage = dic[counter_word][3];
	
	if('speechSynthesis' in window){
          var speech = new SpeechSynthesisUtterance(wordUsage);
          speech.lang = 'en-US';
          window.speechSynthesis.speak(speech);
       }



};

        

var say = function(){
	document.getElementById("message-answer").innerHTML  = "";
	var word = dic[counter_word][0];
	
	if('speechSynthesis' in window){
          var speech = new SpeechSynthesisUtterance(word);
          speech.lang = 'en-US';
          window.speechSynthesis.speak(speech);
       }
};

var check = function(){
	document.getElementById("message-answer").innerHTML  = "";
	var user_answer = document.getElementById("answer").value;

	//Replace spaces
	user_answer = user_answer.replace(/\s/g, '');
	dic[counter_word][0] = dic[counter_word][0].replace(/\s/g, '');
	
	if( user_answer.toLowerCase() == dic[counter_word][0].toLowerCase() ){
		document.getElementById("message-answer").innerHTML  = "<b style='color:green;' > Correct </b>";
	}else{
		document.getElementById("message-answer").innerHTML  = "<b style='color:red;' > Wrong </b>";
	}
	
	document.getElementById("message-count").innerHTML  = (counter_word +1) + " /" + ( counter_row );
};


var showDefine  = function(){
	document.getElementById("definition").innerHTML = dic[counter_word][2];
	
	document.getElementById("word").innerHTML = "";
	document.getElementById("part-of-speech").innerHTML = "";
	document.getElementById("word-usage").innerHTML = "";
	document.getElementById("total-try-count").innerHTML = "";
	document.getElementById("right-count").innerHTML = "";
};
var showWordUsage  = function(){
	document.getElementById("word-usage").innerHTML = dic[counter_word][3];
	
	document.getElementById("word").innerHTML = "";
	document.getElementById("part-of-speech").innerHTML = "";
	document.getElementById("definition").innerHTML = "";
	document.getElementById("total-try-count").innerHTML = "";
	document.getElementById("right-count").innerHTML = "";
};


var show = function(){
	document.getElementById("word").innerHTML = dic[counter_word][0];
	document.getElementById("part-of-speech").innerHTML = dic[counter_word][1];
	document.getElementById("definition").innerHTML = dic[counter_word][2];
	document.getElementById("word-usage").innerHTML = dic[counter_word][3];
	document.getElementById("total-try-count").innerHTML = dic[counter_word][4];
	document.getElementById("right-count").innerHTML = dic[counter_word][5];
};

var next = function(){
	document.getElementById("message-answer").innerHTML  = "";
	document.getElementById("answer").value = "";

    if(counter_word == counter_row -1){
		counter_word  = 0;
	}else{
		counter_word  = counter_word  +1;
	}
};
