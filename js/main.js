$( document ).ready(function() {
    // $('.skills').hide();
    console.log( "it works" );

    /*Scroll transition to anchor*/
    $(".project-nav").click(function() {
          $('html, body').animate({
              scrollTop: $("#projects").offset().top
          }, 500);

    });
    $("#work").click(function() {
          $('html, body').animate({
              scrollTop: $("#projects").offset().top
          }, 500);

          // show projects container
          $('.projects-container').addClass('show-project');
          // show project
          $('#tab1').addClass('show-project');
          $('#tab1.project-nav').prop('checked', true);

    });

    var projectNavTop = $('#projects').offset().top;

    $(window).scroll(function(){
        if ($(this).scrollTop() >= projectNavTop) {
            $('#projects').css('position', 'fixed');
            $('#projects').css('top', '0');
        } else {
            $('#projects').css('position', 'static');
            $('#projects').css('top', projectNavTop);
        }
    });


      $('.selector').hover(function(){
        $('.blurred').toggleClass('blurred_hover');
        $('.blurb-content').toggleClass('blurb-blurred');
        $('#skills').toggleClass('skills_visible');

      });
      if ($('#skills').hasClass('skills_visible') || $('#skills:hover')){
        $('#skills').hover(function(){
          $('.blurred').toggleClass('blurred_hover');
          $('.blurb-content').toggleClass('blurb-blurred');
          $('.skills_hidden').toggleClass('skills_visible');
        });
      }


	// when I click project nav button
	$('.project-nav').on('click', function(){

		var item = $(this);
		var section = item.attr('for');
		console.log('clicked', item);

    // show projects container
    $('.projects-container').addClass('show-project');
    // show project
    $(section).addClass('show-project').siblings().removeClass('show-project');

	});
});
