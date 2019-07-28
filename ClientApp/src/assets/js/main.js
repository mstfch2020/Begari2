import $ from 'jquery';

if (!window.utilities) {
    window.utilities = {};
}

$(document).ready(function (params) {

    $(window).scrollTop(0);
    //custom select option
    $('#Type,#MM,#HH,#Cause').each(function () {
        var $this = $(this), numberOfOptions = $(this).children('option').length;
        $this.addClass('select-hidden');
        $this.wrap('<div class="select font-xxs"></div>');
        $this.after('<div class="select-styled"></div>');
        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
        var $listItems = $list.children('li');
        $styledSelect.click(function (e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function () {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle(300);
        });
        $listItems.click(function (e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide(300);
        });
        $(document).click(function () {
            $styledSelect.removeClass('active');
            $list.hide(300);
        });
    });

    // for scroll navigation
    // Add scrollspy to <body>
    // $('body').scrollspy({ target: ".navbar", offset: 50 });

    // Add smooth scrolling on all links inside the navbar
    $(".screening-organizing-child a").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top - $('body > nav').height() - $('.user-detail').height() - 40
            }, function () {
                // Add hash (#) to URL when done scrolling (default click behavior)
                // window.location.hash = hash;
            });
        }  // End if
    });

    $(window).scroll(function () {
        var activItem = $('.screening-organizing-child a.active')[0].hash;
        $('.custom-scroll > div').removeClass('active');
        if (activItem==='#accused-accused') {
            $('.screening-organizing-child-scrollbar-btn').css('top', '.5em');
            $(activItem).addClass('active');
        }else if (activItem==='#guarantee-commitment') {
            $('.screening-organizing-child-scrollbar-btn').css('top', ($('.screening-organizing-child').height() / 2) + 'px')
            $(activItem).addClass('active');
        }else if (activItem==='#clearance') {
            $('.screening-organizing-child-scrollbar-btn').css({ 'top': ($('.screening-organizing-child').height() - 12.5) + 'px' });
            $(activItem).addClass('active');
        }
    })

    /////////////// utilities ///////////
    function jsIsUserFriendlyChar(val, step) {
        // Backspace, Tab, Enter, Insert, and Delete  
        if (val===8 || val===9 || val===13 || val===45 || val===46) {
            return true;
        }
        // Ctrl, Alt, CapsLock, Home, End, and Arrows  
        if ((val > 16 && val < 21) || (val > 34 && val < 41)) {
            return true;

        }
        if (step==="Decimals") {
            if (val===190 || val===110) { //Check dot key code should be allowed
                return true;
            }
        }
        // The rest  
        return false;
    }
    window.utilities.checkNumber = function (e) {
        var evt = (e) ? e : window.event;
        var key = (evt.keyCode) ? evt.keyCode : evt.which;
        if (key != null) {
            key = parseInt(key, 10);
            if ((key < 48 || key > 57) && (key < 96 || key > 105)) {
                if (!jsIsUserFriendlyChar(key, "Decimals")) {
                    return false;
                }
            } else {
                if (evt.shiftKey) {
                    return false;
                }
            }
        }
        return true;
    };
    window.utilities.focusNext = function (e) {
        var item = $(e.currentTarget).closest('div');
        if (item.find('input').val() >= 1) {
            var next = item.next('div');
            $(next).find('input').focus();
        }
    }
})