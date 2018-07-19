var startButton = document.getElementById("start");
	var stopButton = document.getElementById("stop");
	var resetButton = document.getElementById("reset");
	var minsLeft = document.getElementById("mins-left");
	var secsLeft = document.getElementById("secs-left");

	var startTimer = function(){
		console.log("Start");
	  begin = setInterval(countdown, 1000); 
		startButton.disabled=true;
		stopButton.disabled=false;
	}

	var stopTimer = function(){
		console.log("Stop");
		window.clearInterval(begin) 
		stopButton.disabled=true;
		startButton.disabled=false;
	}

	var resetTimer = function(){
		console.log("Reset");
		window.clearInterval(begin) 
		minsLeft.innerText = "25";
		secsLeft.innerText="00";
		//minsLeft.innerText=document.getElementById("mins-left").innerText;
		stopButton.disabled=true;
		startButton.disabled=false;
	}


	var countdown = function(){
		console.log("countdown");
		if(secsLeft.innerText<=0){
			secsLeft.innerText=60;
			minsLeft.innerText--;       
		};
		secsLeft.innerText--;
		
		if(secsLeft.innerText<=0 && minsLeft.innerText<=0){
			window.clearInterval(begin);
			
		};
	}
	
	var more = function(){
		document.getElementById("mins-left").innerText++;
		
			minsLeft.innerText = document.getElementById("mins-left").innerText;
		
	}

		var less = function(){
				document.getElementById("mins-left").innerText--;
				if(document.getElementById("mins-left").innerText<=1)
				{
					document.getElementById("mins-left").innerText=1
				};
				minsLeft.innerText = document.getElementById("mins-left").innerText;
			}