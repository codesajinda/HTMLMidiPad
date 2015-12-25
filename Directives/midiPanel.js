angular.module('midiPad').directive('midiPanel',['AudioContextService', 'SoundLoaderService', function(AudioContextService, SoundLoaderService){
  return {
	  	replace:true,
	  	template:'<table class="pad"><tr ng-repeat="dArray in dimensionArray"><td ng-repeat="col in dArray" class="{{col.class}}" ng-click="playSound(col.index)"></td></tr></table>',
	  	scope:{
	    	midiRows: '=',
	    	midiCols: '=',
	    	sounds:'='
		},
		link:function(scope, element, attrs){			
			var soundBuffers = [];
			var context = AudioContextService.init();
			scope.dimensionArray = new Array();
			fillRows();

			scope.playSound = function(col){
				if(soundBuffers[col] && soundBuffers.length > 0){	
					AudioContextService.playSound(context, soundBuffers[col]);
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
				for (i=0;i<scope.midiRows;i++) {
					scope.dimensionArray[i]=new Array();
					for (j=0;j<scope.midiCols;j++) {
						if(scope.sounds[index]){
							var wav = scope.sounds[index] + '.wav';
							SoundLoaderService.loadSound(wav).then(onSoundSuccess, onSoundError);
						}
						if(index == cols){
							cols = cols + scope.midiCols;
						}
						scope.dimensionArray[i][j] = {index:index, class:'c'+cols};
						index = index +1;
					}
				}
			}

		}
	}
}]);