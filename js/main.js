$(function(){
    "use strict";
    
    //Slider
    $("#slider_items").carouFredSel({
        
        responsive:true,
        width:'100%',
        circular:true,
        scroll:{
            items:1,
            duration:1000,
            pauseOnHover:true
    },
        auto:true,
        items:{
            visible:{
                min:1,
                mak:1
            },
            height:"variable"
        },
        pagination:{
            container:"sliderpager",
            pageAnchorBuilder:false,
            
        }
        
    });
    
    // Make Background Size As Same As Window Size
    var winh = $(window).height();
    var navh = $(".navbar").height();
    $(".slider").height(winh-navh);
    
    //Scroll To sections
      $('.nav-link').click(function(){

        $('body,html').animate({
          scrollTop: $($(this).attr('href')).offset().top-30
        },1000);
        $(this).parent().addClass('b-active').siblings().removeClass('b-active');
      });

    
    
    //Show Scroll Button
      $(window).scroll(function(){
        var n = $(this).scrollTop();
        if(n > 400){
          $('.sroll-button i').fadeIn();
        } else{
          $('.sroll-button i').fadeOut();
        }
      });
    
    //Scroll To Top By Button
      $('.sroll-button i').click(function(){
        $('body,html').animate({
          scrollTop :0
        },1000);
      });
    
});

//Spinner Loading When Window Is Loading

    $(window).on('load',function(){
      $('body').css('overflow','auto');
      $('.spinner').fadeOut(2000,function(){
        $(this).parent().fadeOut(3000);
        $(this).remove();
      });

    });
