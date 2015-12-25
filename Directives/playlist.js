angular.module('midiPad').directive('playlist', function(){
  return {
  		restrict:'E',
	  	replace:true,
	  	template:'<select size="3"	name="decision2" multiple><option class="playlist" ng-repeat="playItem in playlist | orderBy:\'name\'" ng-click="loadSong(playItem)">{{playItem.name}}</option></select>',
	  	scope:{
	    	playlist:'=',
	    	currentSong:'='
		},
		link:function(scope, element, attrs){

			scope.loadSong =  function(song){
				scope.currentSong = song;
			}
		}
	}
});