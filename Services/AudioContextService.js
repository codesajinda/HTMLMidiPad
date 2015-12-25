angular.module('midiPad').service('AudioContextService', ['$window', function($window) {
	var audioContextService = {};

	audioContextService.init = function(url){
		var context = null;
		try {
		    $window.AudioContext = $window.AudioContext|| $window.webkitAudioContext;
		    context = new AudioContext();
		 }
		catch(e) {
		   alert('Web Audio API is not supported in this browser');
		}
		return context;
	}
	audioContextService.playSound = function(context, data){
		context.decodeAudioData(data, function(buffer) {
			 var source = context.createBufferSource();
			  source.buffer = buffer;      
			  source.connect(context.destination);       
			  source.start(0);
		}, onDecodingError);
	}

	function onDecodingError(){
		alert('decoding error');
	}

	return audioContextService;
}]);