$(function(){
	var video = $('video')[0];
	var play = $('#play');
	
	var video = $('video')[0],
	    play = $('#play'),
	    position = $('position'),
	    using = $('using'),
	    ready = false,
	    controls = $('controls'),
	    fullscreen = $('#full');
	
	$(play).click(function(){
		if (video.paused){
		  video.play();
		  this.value = "pause";
		  console.log(video.duration)
		} else {
		  video.pause();
		  this.value = "play";
		}
	});
	
	if (video.webkitSupportsFullscreen) { 
	    $(fullscreen).click(function(){
	    	video.webkitEnterFullScreen();
	    });
	}
	else{
		$(fullscreen).hide();
	}
	 $('time').html(video.currentTime)
	 
	/*
	addEvent(togglePlay, 'click', function () {
	  if (ready) {
	    // video.playbackRate = 0.5;
	    if (video.paused) {
	      if (video.ended) video.currentTime = 0;
	      video.play();
	      this.value = "pause";
	    } else {
	      video.pause();
	      this.value = "play";
	    }
	  }
	});*/
	
	/*$(video).hover(function(){
		$('nav').fadeIn();
	},
	function(){
		$('nav').fadeOut();
	});*/
	
});