

document.addEventListener("DOMContentLoaded", function () {
    const sliderItems = document.querySelectorAll('.list_items_inner .item_block .slider_block_wr');

    if (sliderItems.length > 0) {
        sliderItems.forEach(function(sliderWrapper) {
            const slider = sliderWrapper.querySelector('.swiper');
            if (!slider) return;

            const sliderId = slider.dataset.id;
            const arrow = slider.dataset.arrow;

            if (!sliderId || !arrow) return;

            const sliderClass = '.' + sliderId;

            new Swiper(sliderClass, {
                loop: true,
                slidesPerView: 1,
                loopedSlides: 1,
                navigation: {
                    nextEl: '.swiper-' + arrow + '-next',
                    prevEl: '.swiper-' + arrow + '-prev',
                },
                lazy: true
            });
        });
    }

    const slidertag = document.querySelector('.mySwiper_tag');
    let swiperInstance = null;

    function initTagSlider() {
        if (!slidertag) return;

        const slidertagId = slidertag.dataset.id;
        const arrowTag = slidertag.dataset.arrow;
        const sliderClassTag = '.' + slidertagId;

        if (window.innerWidth <= 767 && !swiperInstance) {
            swiperInstance = new Swiper(sliderClassTag, {
                loop: true,
                slidesPerView: 'auto',
                spaceBetween: 20,
                loopedSlides: 1,
                navigation: {
                    nextEl: '.swiper-' + arrowTag + '-next',
                    prevEl: '.swiper-' + arrowTag + '-prev',
                },
                lazy: true
            });
        } else if (window.innerWidth > 767 && swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    }

    initTagSlider();

    window.addEventListener('resize', initTagSlider);

    const accorItems = document.querySelectorAll('.accor_item .accor_name');

    if(accorItems.length > 0) {
        accorItems.forEach(function(item){
            item.addEventListener('click', function () {
                const currentBlock = this.parentElement;

                document.querySelectorAll('.accor_item').forEach(block => {
                    if (block !== currentBlock) {
                        block.classList.remove('opened');
                    }
                });
                currentBlock.classList.toggle('opened');
            });
        });
    }

    $('.type-phone input').mask("+7 (999) 999-99-99");
});

$(function() {
    $('#scroll_bottom').click(function() {
        $('html, body').animate({ scrollTop: $(document).height() - $(window).height() }, 600);
        return false;
    });
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('#scroll_top').show();
        } else {
            $('#scroll_top').hide();
        }
    });

    $('#scroll_top').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });

    $('.btn_list_open').on('click', function(){
        if($('.list_items_map').hasClass('opened')){
            $('.list_items_map').removeClass('opened');
            $(this).removeClass('active')
        } else {
            $('.list_items_map').addClass('opened');
            $(this).addClass('active');
        }
    });
});
