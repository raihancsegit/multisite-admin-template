jQuery(document).ready(function ($) {

    $(".top_filter ul li").click(function () {
        $(".top_filter ul li").removeClass("top_filter_active");
        $(this).addClass("top_filter_active");
    });
    var activeItems = $(".top_filter ul li");
    activeItems.each(function() {
        $(this).css("width", "calc(" + $(this).width() + "px + 4px)");
    });

    $( "#dashboard_tabs" ).tabs();



    //FILTER MENU START//
    function filterMobileDropdown(){
        if( $(window).width() < 640 ) {
            $(".active-filter").click(function (e) {
                e.preventDefault();
    
                $(this).parents('.left-list').toggleClass('shown').find('.mobile-dropdown').slideToggle(300);
                $(".filter-template").slideToggle(300);
            }); 
        }

        $(".each-item-left").click(function (e) {
            e.preventDefault();

            $(this).toggleClass("active-item").siblings().removeClass('active-item').parents('.left-list').removeClass('shown');
            $(this).parents('.left-list').find('.selected-filter').text($(this).find('a').text());

            if( $(window).width() < 640 ) {
                $(".mobile-dropdown").slideUp(300);
            }
        });

    }

    $(window).on('load', function() {
        filterMobileDropdown();
    });
    //FILTER MENU END//

    $( "#templyStock" ).tabs();
    $( "#creatiya" ).tabs();


    // Team Roles Page Start
    $(".top_filter .each-item-left").click(function () {
        $(".top_filter .each-item-left").removeClass("active-item");
        $(this).addClass("active-item");
    });
    $(".top_filter .each-item-right").click(function () {
        $(".top_filter .each-item-right").removeClass("active-item");
        $(this).addClass("active-item");
    });

    // create-contributor MODAL
    $("#create-contributor").click(function () {
        $(".new-contributor-modal").fadeIn(500);
        $(".admin_overlay").fadeIn(500);
    })

    $(".close-modal").click(function () {
        $(".new-contributor-modal").fadeOut(500);
        $(".admin_overlay").fadeOut(500);
    })

    $(".admin_overlay").click(function () {
        $(this).fadeOut(500);
        $(".new-contributor-modal").fadeOut(500);
    })

    // create-admin MODAL
    $("#create-admin").click(function () {
        $(".new-admin-modal").fadeIn(500);
        $(".admin_overlay").fadeIn(500);
    })

    $(".close-modal").click(function () {
        $(".new-admin-modal").fadeOut(500);
        $(".admin_overlay").fadeOut(500);
    })

    $(".admin_overlay").click(function () {
        $(this).fadeOut(500);
        $(".new-admin-modal").fadeOut(500);
    })

    // admin-update MODAL
    $(".admin-update").click(function () {
        $(".update-admin-modal").fadeIn(500);
        $(".admin_overlay").fadeIn(500);
    })

    $(".admin_overlay").click(function () {
        $(this).fadeOut(500);
        $(".update-admin-modal").fadeOut(500);
    })

    // contributors-update MODAL
    $(".contributors-update").click(function () {
        $(".update-contributors-modal").fadeIn(500);
        $(".admin_overlay").fadeIn(500);
    })

    $(".admin_overlay").click(function () {
        $(this).fadeOut(500);
        $(".update-contributors-modal").fadeOut(500);
    })
    // Team Roles Page End


    // TemplyStock-home item page start
    $('.TemplyStock-home-item-add-btn').on('click', function () {
        var inputValue = Number($(this).parent().find("input").val())
        if (inputValue === 123) {
            $(this).parent().parent().parent().find(".templyStock-home-item").fadeIn(100);
        }
    });
    $('.remove-item').on('click', function () {
        $(this).parent().fadeOut(100);
    });
    // TemplyStock-home item page end


    // TemplyStock Users Pages
        $(".status-disabled .actions .enable_disabled_text").text("Enabled");
        $(".status-disabled .actions .enable_disabled_text").css("color", "#4BBE37");

          // SHOW SINGLE VALUE START 
        function handleFormControl(e) {
                $(this).children(".customFiledPopup").show();
                let clickTarget = e.currentTarget;
                $(clickTarget).find(".customFiledPopup").show();

                $(window).on('click', function(event) {
                var target = $(event.target);
                if (!target.is(clickTarget) && !target.closest(clickTarget).length) {
                    $(clickTarget).find(".customFiledPopup").css("display", "none");
                }
                });
        };

        function setupDropdownClickEvent(selector, inputId, placeholderSelector) {
            $(selector).click(function (e) {
                console.log("Clicked");
            $(selector).removeClass("bg-vmc-primary text-white");
            $(this).addClass("bg-vmc-primary text-white");
            
            var $input = $(inputId);
            var $value = $(this).text();
            
            $input.val($value);
            $(placeholderSelector + " span").text($value);
            $(placeholderSelector + " span").css("color", "black");
            $(this).closest(".customFiledPopup").hide(10);
            });
        }
        
        // Usage
        $(".custom_form_control").click(handleFormControl);
        setupDropdownClickEvent(".csv_file li span", "#csv_file", ".csv_file_placeholder");
        // SHOW SINGLE VALUE END 
    // TemplyStock Users end
});