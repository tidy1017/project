
$(function(){ 
    
    $('.nav-it a').on('click',function(){
     var that=$(this).index();
     $(this).addClass('act');
     $(this).siblings().removeClass('act');
     $(this).css('text-decoration','none');
     $('.nav-it span').removeClass('sanjiao');
     $('.nav-it span').eq(that).addClass('sanjiao');
 }
);
            $('.nav-sanji a').on('click',function(){
                $('.nav-sanji a').removeClass('sanjia');
                $(this).addClass('sanjia');
            })
            $('.tab-5-nav a').on('click',function(){
                var that=$(this).index();
                $(this).addClass('act');
                $(this).siblings().removeClass('act');
                $(this).css('text-decoration','none');
           
                       })
           $('#anniu').on('click',function(){
               $('#anniu').css('display','none');
               $('#yincang').css('display','block');
           })
}
)