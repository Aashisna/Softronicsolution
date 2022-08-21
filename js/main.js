$(window).scroll(function(){
    if($(window).scrollTop()> 150)
    {
        $("header").addClass("n")
    }
    else
    {
        $("header").removeClass("n")
    }
})