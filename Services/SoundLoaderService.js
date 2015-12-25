angular.module('midiPad').service('SoundLoaderService', ['$http', function($http) {
	var soundLoaderService = {};
	soundLoaderService.loadSound = function(url){
		return $http.get('/Sounds/' + url, {responseType:'arraybuffer'});
	}
	return soundLoaderService;
}]);