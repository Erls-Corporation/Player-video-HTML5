$(function(){
	
	var video = $('video')[0],
	    play = $('#play'),
	    fullscreen = $('#full');
	
	var duration = parseInt(video.duration);
	
	video.volume= $('#volume').val();
	
	$(play).click(function(){
		if (video.paused){
		  video.play();
		  setInterval(update, 100);
		} else {
		  video.pause();
		}
	});
	
	$('#volume').change(function() {
	    video.volume = $(this).val();
	});
	
	if (video.webkitSupportsFullscreen) { 
	    $(fullscreen).click(function(){
	    	video.webkitEnterFullScreen();
	    });
	}
	else{
		$(fullscreen).hide();
	}
	
	function update() {    
        var t = (video.currentTime/duration)*100;
        $('#duration span').animate({width: t+"%"}, 100);
	    $('time').html(parseInt(video.currentTime));
	 }
	 
});