angular.module('midiPad').directive('audioPlayer', function() {
  return {
  	restrict:'E',
    scope:{
      songPath:'=',
      loopSong:'=',
    },
    link: function (scope, element, attrs) {
      scope.$watch('songPath', function(newVal){ 
        var loop = (scope.loopSong) ? 'loop':''; 
        var span = (loop) ? '' : '';     
        element.children().remove();
        var audioPlayer = '<audio controls ' + loop +' ><source src="' + newVal + '" type="audio/mpeg">Your browser does not support the audio element.</audio>' + span + '<div>';
        element.append(audioPlayer);
      });
    }
  }
});