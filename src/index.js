var alexa = require('alexa-app');
var app = new alexa.app('Interval');

function getIntervalSpeachString(int durration, int timesRepeat) {
	//set if times not set 
	var returnString = "";
	for(i = 0; i < timesRepeat; i++) {
		//warning this break might be limited to 10 seconds, might have to get creative
		returnString += '<break time="3s"/> ' + i;
	}
	return returnString + '<break time="1s"/> that is the end of your interval training, good bye.';
}

app.intent(
	'exerciseIntent',
	{}, //@TODO figure out what to put here
	function(request, response) {
		//var val = request.data.request.intent.slots.word.value.toLowerCase().replace(/\W/g, '');

		//response.say("Sorry, I don't know what a " + request.data.request.intent.slots.word.value + " is");
			
		//loop through the first number and the output should be a pause
	}
);

app.intent(
    'AMAZON.HelpIntent',
    {},
    function(request, response) {
        var out = "you can say. Ask Interval Training 30 seconds 10 times. " +
            "Or. you can say. Ask Interval Training 45";
        response.say(out);
    }
);

app.launch(function(request,response) {
    response.say('To begin Interval training save the number of seconds you want each interval to be followed by the number of intervals');
});

app.error = function(exception, request, response) {
    response.say("Sorry, I don't know how to help you with that");
};

app.pre = function(request,response,type) {
    //response.say("");
};

app.post = function(request,response,type,exception) {
    if(exception){
        var out = "you can say. Ask Interval Training 30 seconds 10 times";
        response.clear().say(out).send();
    }
};