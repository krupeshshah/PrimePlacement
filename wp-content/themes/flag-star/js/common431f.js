


jQuery(document).ready(function($){
// document start

// click to go next div
$('#dwnArw').click(function(){ 
   var getAttrVal =  $('#dwnArw').attr('href');
    var getPos = $(getAttrVal).position().top;    
    $("html, body").animate({ scrollTop: getPos}, 500);    
});





$('#toggleIcon, #navOvarly').click(function(){
    $('#toggleIcon .bars').toggleClass('toggleMenu');
    $('#navOvarly').toggleClass('toggleMenu');
    $("body").toggleClass("fixBody")
});



$(window).scroll(function(){
    let scrlPos = $('html,body').scrollTop();
    if(scrlPos > 30){
        $('.navmenu').addClass('stickyTop');
    }else{
        $('.navmenu').removeClass('stickyTop');
    }
})



 // Navbar
 $( "<span class='clickD'></span>" ).insertAfter(".navbar-nav li.menu-item-has-children > a");
 $('.navbar-nav li .clickD').click(function(e) {
     e.preventDefault();
     var $this = $(this);
 
     if ($this.next().hasClass('show')) {
         $this.next().removeClass('show');
         $this.removeClass('toggled');
     } else {
         $this.parent().parent().find('.sub-menu').removeClass('show');
         $this.parent().parent().find('.toggled').removeClass('toggled');
         $this.next().toggleClass('show');
         $this.toggleClass('toggled');
     }
 });

 $(window).on('resize', function(){
     var win = $(this); //this = window
     if (win.width() < 1025) {
         $('html').click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $(document).click(function(){
             $('.navbar-nav li .clickD').removeClass('toggled');
             $('.toggled').removeClass('toggled');
             $('.sub-menu').removeClass('show');
         });
         $('.navbar-nav').click(function(e){
         e.stopPropagation();
         });
     }
 });
 // Navbar end





// back to top
if($("#scroll").length){
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 200) { 
            $('#scroll').fadeIn(200); 
        } else { 
            $('#scroll').fadeOut(200); 
        } 
    }); 
    $('#scroll').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 500); 
        return false; 
    }); 
}



$('.bannerArea').slick({
  dots: false,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,
  centerMode: true,
  adaptiveHeight: true,   
  centerPadding: '0px',
  responsive: [
    {
      breakpoint: 1199,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false,
        dots:true
      }
    }
  ]
});




// accordian

 

// $('.card-title.collapsed').click(function(){
//     $(this).parent().toggleClass("backColor");
// })















  






// document end

})


