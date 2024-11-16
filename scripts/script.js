$(document).ready(function () {
    //Front Banner Script (Home Page)

    $('.slider-v1').cycle({
        fx: 'scrollHorz',
        slides: '.slider-item',
        timeout: 5000,
        speed: 1200,
        easeIn: 'easeInOutExpo',
        easeOut: 'easeInOutExpo',
        pager: '#pager2',
    });
    $('#loader_img').show();
    $('.sliderImg').load(function () {$('#loader_img').hide();
    });

    //Carousel Script (Related Products/Brands)
    //Data Items (data-items) value can be set on parent element with no of items to display

    $(".product-slider").owlCarousel({
        navigation: true,
        items: $(this).attr("data-items"),
        itemsTablet: [768, 2]
    });
    var owl = $(".brand-carousel");
    owl.owlCarousel({
        navigation: false,
        pagination: false,
        items: 8,
        itemsTablet: [768, 4],
        itemsMobile: [400, 2]
    });
    $("#nextBrand").click(function () {
        owl.trigger('owl.next');
    })
    $("#prevBrand").click(function () {
        owl.trigger('owl.prev');
    })
    $("#SimilarProductSlider").owlCarousel({
        navigation: true
    });
    //var imageShowCase = $("#imageShowCase");
    //imageShowCase.owlCarousel({
    //    autoPlay: 4000,
    //    stopOnHover: true,
    //    navigation: false,
    //    pagination: false,
    //    paginationSpeed: 1000,
    //    goToFirstSpeed: 2000,
    //    singleItem: true,
    //    autoHeight: true
    //});
    //$("#ps-next").click(function () {
    //    imageShowCase.trigger('owl.next');
    //})
    //$("#ps-prev").click(function () {
    //    imageShowCase.trigger('owl.prev');
    //})

    //Equal Height Grid Script
    //Dynamically set equal height of elements in a row
    //Maximum height of elements in a row is applied on all elements

    $(function () {
        $('.home-featured .description').matchHeight();
        $('.home-arrival .description').matchHeight();
        $('.home-popular .description').matchHeight();

        $('.home-featured .product').matchHeight();
        $('.home-arrival .product').matchHeight();
        $('.home-popular .product').matchHeight();

        $('.item.grid-view .description').matchHeight();
        $('.item.grid-view .product').matchHeight();

        $.fn.matchHeight._throttle = 250;
    });


    //Toggle/Click Scripts
    //Applied to different links/buttons to add/remove classes

    $('.collapseWill').on('click', function (e) {
        $(this).toggleClass("pressed");
        e.preventDefault();
    });
    $('.search-box .getFullSearch').on('click', function (e) {
        $('.search-full').addClass("active");
        e.preventDefault();
    });
    $('.search-close').on('click', function (e) {
        $('.search-full').removeClass("active");
        e.preventDefault();
    });
    $(".dropdown-tree-a").click(function () {
        $(this).parent('.dropdown-tree').toggleClass("open-tree active");
    });
    $('.add-fav').click(function (e) {
        e.preventDefault();
        $(this).addClass("active");
        $(this).attr('data-original-title', 'Added to Wishlist');
    });
    $(".modal-product-thumb a").click(function () {
        $(".modal-product-thumb a.selected").removeClass("selected");
        $(this).addClass('selected');
    });
    $(".modal-product-thumb a").click(function () {
        var largeImage = $(this).find("img").attr('data-large');
        $(".product-largeimg").attr('src', largeImage);
        $(".zoomImg").attr('src', largeImage);
    });
    if (/IEMobile/i.test(navigator.userAgent)) {
        $('.navbar-brand').addClass('windowsphone');
    }

    //Sticky Header Script

    var isMobile = function () {
        return /(iphone|ipod|ipad|android|blackberry|windows ce|palm|symbian)/i.test(navigator.userAgent);
    };
    if (isMobile()) {
        $('.introContent').addClass('ismobile');
    } else {
        $(function () {
            var headerScroll = 0;
            $(window).scroll(function (event) {
                var ts = $(this).scrollTop();
                if (ts > headerScroll) { $('.navbar').addClass('stuck'); }
                else {$('.navbar').removeClass('stuck');}
                if (ts < 600) {$('.navbar').removeClass('stuck');}
                headerScroll = ts;
            });
        });
    }

    //Parallax Script

    if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        $('.parallax-section').addClass('isios');
        $('.navbar-header').addClass('isios');
    }
    if (/Android|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.parallax-section').addClass('isandroid');
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $('.parallax-section').addClass('ismobile');
        $('.parallaximg').addClass('ismobile');
    } else {
        $(window).bind('scroll', function (e) {
            parallaxScroll();
        });

        function parallaxScroll() {
            var scrolledY = $(window).scrollTop();
            var sc = ((scrolledY * 0.3)) + 'px';
            $('.parallaximg').css('marginTop', '' + ((scrolledY * 0.3)) + 'px');
        }
        if ($(window).width() < 768) { } else {
            $('.parallax-image-aboutus').parallax("50%", 0, 0.2, true);
            $('.parallaxbg').parallax("50%", 0, 0.2, true);
        }
    }

    //Custom Scroll Bar Script 
    //Applied at Mini Cart & Search Filters (Category Page)

    $(".minicart-scroll").mCustomScrollbar({
        advanced: {updateOnContentResize: true},
        scrollButtons: {enable: false},
        mouseWheelPixels: "200",
        theme: "dark-2"
    });
    
    $(".custom-scroll").mCustomScrollbar({
        advanced: { updateOnContentResize: true },
        scrollButtons: { enable: false },
        mouseWheelPixels: "200",
        theme: "dark-2"
    });

    //Scrolling Script
    //Scroll up/down to the specified hash element with a swing

    $(".scrollto").click(function (event) {
        event.preventDefault();
        var dest = 0;
        if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
            dest = $(document).height() - $(window).height();
        } else { dest = $(this.hash).offset().top; }
        $('html,body').animate({scrollTop: dest - 51}, 1000, 'swing');
    });


    //Horizontal Ticker Script (News & Updates)
    $('.horizontal-ticker').SetScroller({
        velocity: 50, direction: 'horizontal', startfrom: 'right', loop: 'infinite',
        movetype: 'linear', onmouseover: 'pause', onmouseout: 'play', onstartup: 'play', cursor: 'pointer'
    });


    //Search Control Script
    $(".search-input").autocomplete("/controls/autocomplete.ashx");


    //Template Management Script
    //Controls in template are replaced with target controls matching data-control-id
    //Any classes defined with Template controls will be overwritten to target controls

        $('[data-control-name]').each(function (index) {
            var objDest = this;
            //var objSrc = document.getElementsByName(objDest.getAttribute('data-control-name'))[0];

            var SrcID = '[name=' + objDest.getAttribute('data-control-name') + ']';
            var objSrc = $(objDest).closest(".template").find(SrcID)[0];

            if (objSrc != null) {
                if (objDest.className != null && objDest.className != '') {
                    objSrc.className = objDest.className;
                }
                objDest.parentNode.replaceChild(objSrc, objDest);
            }
            else { objDest.parentNode.removeChild(objDest) }
        });


    //Header Offset Script
    //Header Offset will be set according to any header template applied.
    //Header Offset is calculated by adding header height and offset element default padding top 
    //Applied on document load and window resize

        function SetHeaderOffset() {
            if ($('.navbar') != null) {

                if ($('.headerOffset').attr('data-offset') == null) {
                    $('.headerOffset').attr('data-offset', parseFloat($('.headerOffset').css("padding-top")));
                }

                var headerHeight = parseFloat($('.navbar').height());
                var currentOffset = parseFloat($('.headerOffset').attr('data-offset'));

                var headerOffset = headerHeight + currentOffset;
                $('.headerOffset').css("padding-top", headerOffset + "px");
            }
        }

        SetHeaderOffset();

        $(window).resize(function () {
            SetHeaderOffset();
        });

        $(function () {
            $('[data-toggle="tooltip"]').tooltip({ "html": true })
        })

});