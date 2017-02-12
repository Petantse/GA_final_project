$( document ).ready(function() {
    // $('.skills').hide();
    console.log( "it works" );

    // close welcome message
    $("#close").click(function(){
      $('.welcome').fadeOut(500);
    });

    $(window).click(function(){
      $('.welcome').fadeOut(500);
      $('#selector').removeClass('blurred_hover').addClass('animated');
      $('#skills').slideUp(300);
      $('.blurb-content').delay(300).fadeIn(300);
    });

    // // show projects container
    // $('.projects-container').addClass('show-project');
    // // show project
    // $('#tab1').addClass('show-project');
    // // activate tab label
    // $('li[href="#tab1"]').addClass('active').siblings().removeClass('active');

    /*Scroll transition to anchor*/
    // $(".project-nav").click(function() {s
    //       $('html, body').animate({
    //           scrollTop: $("#projects").offset().top
    //       }, 500);

    // });
    $("#work").click(function() {

          // show projects container
          // $('.projects-container').addClass('show-project');
          // show project
          // $('#tab1').addClass('show-project');
          // activate tab label
          // $('li[href="#tab1"]').addClass('active').siblings().removeClass('active');

          $('html, body').animate({
              scrollTop: $("#projects-container").offset().top
          }, 300);

          // setTimeout(function(){
          //   $('#projects-nav-container').fadeIn().css('display', 'flex');
          // }, 300);

          // setTimeout(function(){
          //   $('#projects-container').css('position', 'absolute');
          //   $('#projects-container').css('top', '0');
          // }, 500);
    });

    $(".bottom-nav").click(function() {
          $('html, body').animate({
              scrollTop: $("#header").offset().top
          }, 500);

    });

    // var projectNavTop = $('#projects-nav-container').offset().top;
    //
    // $(window).scroll(function(){
    //     if ($('#projects-nav-container').scrollTop() >= projectNavTop) {
    //         $('#projects-nav-container').css('position', 'fixed');
    //         $('#projects-nav-container').css('top', '0');
    //     }
    //     else {
    //         $('#projects-nav-container').css('position', 'static');
    //     }
    // });


      // $('#selector').hover(function(){
      //   $(this).toggleClass('blurred_hover');
      //   $('.blurb-content').toggle(250);
      //   $('#skills').toggleClass('skills_visible');
      //
      // });
      // if ($('#skills').hasClass('skills_visible') || $('#skills:hover')){
      //   $('#skills').hover(function(){
      //     $('.blurred').toggleClass('blurred_hover');
      //     $('.blurb-content').toggleClass('blurb-blurred');
      //     $('.skills_hidden').toggleClass('skills_visible');
      //   });
      // }

  $('#selector').mouseenter(function(){
    // event.preventDefault();
    $(this).addClass('blurred_hover').removeClass('animated');
    $('.blurb-content').fadeOut(200);
    $('#skills').slideDown(300);
  });
  // if ($('#skills').hasClass('skills_visible') || $('#skills:hover')){
    $('#close-skills').click(function(){
      // event.preventDefault();
      $('.blurred').removeClass('blurred_hover').addClass('animated');
      $('.skills_hidden').slideUp(300);
      $('.blurb-content').delay(300).fadeIn(300);
    });
  // }


	// when I click project nav button
	$('.project-nav').on('click', function(){

		var item = $(this);
		var section = item.attr('href');
		console.log('clicked', item);

    // show projects container
    // $('.projects-container').addClass('show-project');
    // show project
    $(section).addClass('show-project').siblings().removeClass('show-project');
    // change tab color
    item.addClass('active').siblings().removeClass('active');

	});
});
