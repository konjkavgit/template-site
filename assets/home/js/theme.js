$(".theme-btn").click(function (e) {
    if ($("#sun-icon").hasClass("active-theme")) {
        $("#sun-icon").removeClass("active-theme");
        $("#moon-icon").addClass("active-theme");
        $(".theme-btn").addClass("bg-white");
        $(".theme-btn").removeClass("bg-black");

        $("#moon-icon").animate({
            right: '50px'
        }, 500, 'linear');
        $("#sun-icon").animate({
            right: '0px'
        }, 500, 'linear');
        
        
        
    }
    else {
        $("#sun-icon").addClass("active-theme");
        $("#moon-icon").removeClass("active-theme");
        $(".theme-btn").addClass("bg-black");
        $(".theme-btn").removeClass("bg-white");
        $("#sun-icon").animate({
            right: '50px'
        }, 500, 'linear');
        $("#moon-icon").animate({
            right: '0px'
        }, 500, 'linear');
        
        
    }

});