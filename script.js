/*	gallery */
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }

	        	if ($(".filter-button").removeClass("active")) {
			$(this).removeClass("active");
		    }
		    	$(this).addClass("active");
	    	});
});
/*	end gallery */

$(document).ready(function(){
    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
});

//testimoniyal
$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:false,
        navigation:true,
        navigationText:["",""],
        autoPlay:true
    });
})

var myBanners = [ 
    {
      imageUrl: 'https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/lfbdjxyalnwf2gcg_1636694103.jpeg', 
      onClick: 'Banner_OnClick(1)'
    },
    {
      imageUrl: '2.png', 
      onClick: 'Banner_OnClick(2)'
    },
    {
      imageUrl: '3.png', 
      onClick: 'Banner_OnClick(1)'
    }
]
var Banner_OnClick = function(val) {
    alert("Banner_OnClick: "+val);
}

var instance = new QuickBanner({
    id: 'bannerRotator', 
    banners: myBanners,
});

createBanner();
