angular.module('midiPad').controller('MidiPadController', ['$scope', '$window', 'SoundLoaderService', 'AudioContextService', function($scope, $window, SoundLoaderService, AudioContextService){
	var self = this;
	self.midiRows = 5;
	self.midiCols = 5;
	self.pressedKey;
	self.code = code;
	self.sounds = [{sound:'trap-kicks-01', keycode:113}, {sound:'trap-kicks-02', keycode:119}, {sound:'trap-kicks-03', keycode:101}, {sound:'trap-kicks-04', keycode:114}, {sound:'trap-kicks-05', keycode:116}, 
					{sound:'trap-snare-01', keycode:121}, {sound:'trap-snare-02', keycode:117}, {sound:'trap-snare-03', keycode:105}, {sound:'trap-snare-04', keycode:111}, {sound:'trap-snare-05', keycode:112},
					{sound:'trap-hihat-01', keycode:97}, {sound:'trap-hihat-02', keycode:115}, {sound:'trap-hihat-03', keycode:100}, {sound:'trap-hihat-04', keycode:102}, {sound:'trap-hihat-05', keycode:103},
					{sound:'trap-chant-01', keycode: 104}, {sound:'trap-chant-02', keycode:106}, {sound:'trap-chant-03', keycode:107}, {sound:'trap-chant-04', keycode:108}, {sound:'trap-chant-05', keycode:122},
					{sound:'trap-cymbal-01', keycode:120}, {sound:'trap-cymbal-02', keycode:99}, {sound:'trap-cymbal-03', keycode:118}, {sound:'trap-cymbal-04', keycode:98}, {sound:'trap-cymbal-05', keycode:110}];
	self.songs = [{name:'Justin Bieber - Sorry', url:'/Sounds/Songs/sorry.mp3'}, 
				{name:'Sunil - Mage Amal Biso', url:'/Sounds/Songs/amalBiso.mp3'},
				{name:'Punjabi', url:'/Sounds/Songs/punjabi.mp3', loop:true},
				{name:'Guitar', url:'/Sounds/Songs/guitar.mp3', loop:true},
				{name:'Cool Hiphop', url:'/Sounds/Songs/coolhiphop.mp3', loop:true},
				{name:'Sunshine', url:'/Sounds/Songs/sunshine.mp3', loop:true},
				{name:'Caution', url:'/Sounds/Songs/caution.mp3'},
				{name:'Dark Knots', url:'/Sounds/Songs/Dark Knots.mp3'},
				{name:'Dawn', url:'/Sounds/Songs/dawn.mp3'},
				{name:'Digital Bells', url:'/Sounds/Songs/Digital Bells.mp3'},
				{name:'Enchanted', url:'/Sounds/Songs/Enchanted.mp3'},
				{name:'Rough Sharp Synth', url:'/Sounds/Songs/Rough Sharp Synth.mp3'},
				{name:'Tango', url:'/Sounds/Songs/Tango.mp3'},
				{name:'Tweeks', url:'/Sounds/Songs/Tweeks.mp3'},
				{name:'New Horizon', url:'/Sounds/Songs/New Horizon.mp3'}];
	self.song = self.songs[0];

	function code(keycode)
	{
		self.pressedKey = keycode;
	}
}]);