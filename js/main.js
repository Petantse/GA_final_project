$( document ).ready(function() {
    // $('.skills').hide();
    console.log( "it works" );

    /*Scroll transition to anchor*/
    $("#work, .project-nav").click(function() {
          $('html, body').animate({
              scrollTop: $("#projects").offset().top
          }, 500);
      });

      // $('.selector').hover(function(){
      //   $('.blurred').toggleClass('blurred_hover');
      //   $('.blurb-content').toggleClass('blurb-blurred');
      //   $('.skills_hidden').toggleClass('skills_visible');
      // });

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
      // else {
      //   $('.selector').mouseout(function(){
      //     $('.selector').css('paddingBottom', '0');
      //     $('.blurred').removeClass('blurred_hover');
      //     $('.blurb-content').removeClass('blurb-blurred');
      //     $('#skills').removeClass('skills_visible');
      //   });
      // }

//
//     $('.project-nav').on('click', function(){
//       console.log("click");
//       var storeClass = $('#project').attr('class');
//       var storeID = $('.project-nav').attr('id');
//       if(storeID = storeClass){
//         $('#project ,.projects-container').addClass('.show-project');
//         console.log("yey");
//       }else{
//         console.log("ney");
//       };
//     });
// });


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
