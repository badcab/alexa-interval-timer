var alexa = require('alexa-app');
var app = new alexa.app('Interval');

function getIntervalSpeachString(int durration, int timesRepeat) {

	timesRepeat = (null == timesRepeat) ? 10 : timesRepeat;

	var returnString = "";
	var pauseString = "";

	while(durration >= 10){
		pauseString += '<break time="10s"/>';
		durration -= 10;
	}

	pauseString += '<break time="' + durration + 's"/>';
		
	for(i = 0; i < timesRepeat; i++) {
		returnString += pauseString + i;
	}
	return returnString + '<break time="1s"/> that is the end of your interval training, good bye.';
}

app.intent(
	'exerciseIntent',
	{}, //@TODO figure out what to put here
	function(request, response) {
		//var val = request.data.request.intent.slots.word.value.toLowerCase().replace(/\W/g, '');
		int durration = 0;
		int timesRepeat = 0;

		response.say(getIntervalSpeachString(durration, timesRepeat));
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