$( document ).ready(function() {
    // $('.skills').hide();
    console.log( "it works" );

    // close welcome message
    $("#close").click(function(){
      $('.welcome').fadeOut(500);
    });

    $(window).click(function(){
      $('.welcome').fadeOut(500);
    });

    // // show projects container
    // $('.projects-container').addClass('show-project');
    // // show project
    // $('#tab1').addClass('show-project');
    // // activate tab label
    // $('li[href="#tab1"]').addClass('active').siblings().removeClass('active');

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
          // activate tab label
          $('li[href="#tab1"]').addClass('active').siblings().removeClass('active');

    });

    $(".bottom-nav").click(function() {
          $('html, body').animate({
              scrollTop: $("#header").offset().top
          }, 500);

    });

    var projectNavTop = $('#projects').offset().top;

    $(window).scroll(function(){
        if ($(this).scrollTop() >= projectNavTop) {
            $('#projects').css('position', 'fixed');
            $('#projects').css('top', '0');
            $('#projects').css('bottom', '');
            $('.bottom-nav').fadeIn(350);
        } else {
            $('#projects').css('position', 'absolute');
            $('#projects').css('bottom', '0');
            $('#projects').css('top', '');
            $('.bottom-nav').fadeOut(350);
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
		var section = item.attr('href');
		console.log('clicked', item);

    // show projects container
    $('.projects-container').addClass('show-project');
    // show project
    $(section).addClass('show-project').siblings().removeClass('show-project');
    // change tab color
    item.addClass('active').siblings().removeClass('active');

	});
});
