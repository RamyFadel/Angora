let navOffset = $('#about').offset().top
let btnOffset = $('#team').offset().top
$(window).scroll(function(){
    if($(window).scrollTop()>=navOffset)
    {
        $('.navbar').css({'backgroundColor':'rgba(0, 0, 0, 0.7)','transition':'1s' })
       
    }
    else
    {
        $('.navbar').css({'backgroundColor':'transparent','transition':'1s' })

    }
    if($(window).scrollTop()>btnOffset)
    {
        $('.topBtn').fadeIn(1000)
    }   
    else
    {
        $('.topBtn').fadeOut(1000)
    }
})
$(window).scroll(function(){
    if($(window).scrollTop()>300)
    {
        $('.progress-bar').css('animationName', 'inleft')
        $('.visible').css({'animationName':'visible1',' animationDuration':'1.5s'})
    }

})

$('.topBtn').click(function(){

    $('body,html').animate({scrollTop:0})
})