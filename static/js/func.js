
$.prototype.wait = function( ms, callback ) {
    return this.each(function() {
        window.setTimeout((function( self ) {
            return function() {
                callback.call( self );
            }
        }( this )), ms );
    });
};

$('a.case-link').click(function(event){
	(event.preventDefault) ? event.preventDefault() : event.returnValue = false;

    var thisHref = $(this).attr('href');

    window.history.pushState(null, null, './work'+thisHref);

    $('#case-study-article').removeClass('hidden closed').wait(5,function(){$(this).addClass('slideLeft scrollable');}).wait(500, function(){$('body').addClass('noScroll'); } );

    var location = $(this).attr('href');

    var test = $.ajax({
        url: '/api/work' + location,
        success: function(data){
            $('#case-content').html(data);
        }
    });

    $('.close-case').css('opacity','1');
    $('article').scrollTop(0);
});

$('.close-case').click(function(event){
    window.history.pushState(null, null, '/');
    $('body').removeClass('noScroll');
    $(this).css('opacity','0');
	$('#case-study-article').removeClass('slideLeft scrollable').addClass('ani').wait(50,function(){$(this).addClass('closed')}).wait(500, function() {
	    $(this).addClass('hidden').removeClass('ani');
	});
});

$('nav .scrollTo').click(function(){
    (event.preventDefault) ? event.preventDefault() : event.returnValue = false;
    var thisHref = $(this).attr('href');
    window.history.pushState(null, null, thisHref);
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'data-href') ).offset().top
    }, 500);
    return false;
});
