
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
           $('#chulai').on('click',function(){
            $('#chulai').css('display','none');
            $('.hid').removeClass('hid')
            $('.hid td').css({    
                'border-bottom': '1px solid #e8e8e8',
                'border-left': '1px solid #e8e8e8',
                'height': '45px',
                'vertical-align': 'middle',
                'padding-left': '3%',
                'padding-right': '3%',
                'font-size': '14px',
                'color': '#1a1a1a',
                'padding-top': '10px',
                'padding-bottom': '10px',
                'text-align': 'center'})
        })
           setInterval(function(){
            var mydate=new Date();
            var year=mydate.getFullYear();
            var month=mydate.getMonth()+1;
            var date=mydate.getDate();
            var hours=mydate.getHours();
            var minutes=mydate.getMinutes();
            var seconds=mydate.getSeconds();
            var t=year+'-'+month+'-'+date+' '+hours+':'+minutes+':'+seconds;
             $('._gujia_time').html(t);
           },1000);
           var $spa=$('<div class="fanhui"><span>^</span><p>顶部</p></div>');
           $(window).scroll(function(){
               if($(window).scrollTop()>300){
                   $spa.css({
                       'position': 'fixed',
                       'width': '54px',
                       'height': '54px',
                       'cursor': 'pointer',
                       'line-height':'20px',
                       'display':'block',
                       'background':'#1a1a1a',
                       'color':'white',
                       'text-align':'center',
                       'top':'80%',
                       'right':'10%',
                       'text-decoration':'none',
                       'border-radius':'5px'
                     }); 
                     $('body').append($spa)
               }else{
                   $spa.css('display','none')
               } 
           })
           $spa.click(function(){
               $('body,html').animate({scrollTop:0},1000);  
           });
}
)