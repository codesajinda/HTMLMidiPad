angular.module('midiPad').controller('MidiPadController', ['$scope', '$window', 'SoundLoaderService', 'AudioContextService', function($scope, $window, SoundLoaderService, AudioContextService){
	var self = this;
	self.midiRows = 5;
	self.midiCols = 5;
	self.sounds = ['trap-kicks-01', 'trap-kicks-02', 'trap-kicks-03', 'trap-kicks-04', 'trap-kicks-05', 
					'trap-snare-01', 'trap-snare-02', 'trap-snare-03', 'trap-snare-04', 'trap-snare-05',
					'trap-hihat-01', 'trap-hihat-02', 'trap-hihat-03', 'trap-hihat-04', 'trap-hihat-05',
					'trap-chant-01', 'trap-chant-02', 'trap-chant-03', 'trap-chant-04', 'trap-chant-05',
					'trap-cymbal-01', 'trap-cymbal-02', 'trap-cymbal-03', 'trap-cymbal-04', 'trap-cymbal-05'];
	self.songs = [{name:'Justin Bieber - Sorry', url:'/MidiPadController/Sounds/Songs/sorry.mp3'}, 
				{name:'Sunil - Mage Amal Biso', url:'/MidiPadController/Sounds/Songs/amalBiso.mp3'},
				{name:'Punjabi', url:'/MidiPadController/Sounds/Songs/punjabi.mp3', loop:true},
				{name:'Guitar', url:'/MidiPadController/Sounds/Songs/guitar.mp3', loop:true},
				{name:'Cool Hiphop', url:'/MidiPadController/Sounds/Songs/coolhiphop.mp3', loop:true},
				{name:'Sunshine', url:'/MidiPadController/Sounds/Songs/sunshine.mp3', loop:true},
				{name:'Caution', url:'/MidiPadController/Sounds/Songs/caution.mp3'},
				{name:'Dark Knots', url:'/MidiPadController/Sounds/Songs/Dark Knots.mp3'},
				{name:'Dawn', url:'/MidiPadController/Sounds/Songs/dawn.mp3'},
				{name:'Digital Bells', url:'/MidiPadController/Sounds/Songs/Digital Bells.mp3'},
				{name:'Enchanted', url:'/MidiPadController/Sounds/Songs/Enchanted.mp3'},
				{name:'Rough Sharp Synth', url:'/MidiPadController/Sounds/Songs/Rough Sharp Synth.mp3'},
				{name:'Tango', url:'/MidiPadController/Sounds/Songs/Tango.mp3'},
				{name:'Tweeks', url:'/MidiPadController/Sounds/Songs/Tweeks.mp3'},
				{name:'New Horizon', url:'/MidiPadController/Sounds/Songs/New Horizon.mp3'}];
	self.song = self.songs[0];
}]);