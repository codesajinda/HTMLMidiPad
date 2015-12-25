angular.module('midiPad').directive('midiPanel',['AudioContextService', 'SoundLoaderService', function(AudioContextService, SoundLoaderService){
  return {
	  	replace:true,
	  	templateUrl:'../Templates/midi-panel.html',
	  	scope:{
	    	midiRows: '=',
	    	midiCols: '=',
	    	sounds:'='
		},
		link:function(scope, element, attrs){			
			var soundBuffers = [];
			var context = AudioContextService.init();
			scope.buttons = new Array();
			fillRows();

			scope.playSound = function(buttonItemIndex){
				if(soundBuffers[buttonItemIndex] && soundBuffers.length > 0){	
					AudioContextService.playSound(context, soundBuffers[buttonItemIndex]);
				}
			}

			function onSoundSuccess(msg){				
				soundBuffers.push(msg.data);				
			}

			function onSoundError(){
				alert('sound error');
			}

			function fillRows(){
			    var index = 0;
			    var cols = scope.midiCols;
				for (i=0; i < scope.midiRows; i++) {
					scope.buttons[i]=new Array();
					for (j=0; j < scope.midiCols; j++) {
						if(scope.sounds[index]){
							var wav = scope.sounds[index] + '.wav';
							SoundLoaderService.loadSound(wav).then(onSoundSuccess, onSoundError);
						}
						if(index == cols){
							cols = cols + scope.midiCols;
						}
						scope.buttons[i][j] = {index:index, class:'c'+cols};
						index = index + 1;
					}
				}
			}

		}
	}
}]);