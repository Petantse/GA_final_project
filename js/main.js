$( document ).ready(function() {
    // $('.skills').hide();
    console.log( "it works" );

    $('.blurred').mouseover(function(){
      $('.blurred').addClass('blurred_hover');
      $('.blurb-content').addClass('blurb-blurred');
      $('.skills_hidden').addClass('skills_visible');
    });
    $('.blurred').mouseleave(function(){
      $('.blurred').removeClass('blurred_hover');
      $('.blurb-content').removeClass('blurb-blurred');
      $('.skills_hidden').removeClass('skills_visible');
    });

});
