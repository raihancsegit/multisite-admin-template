jQuery(document).ready(function ($) {

    $(".on_off_switch button").click(function () {
        $(".on_off_switch button").removeClass("active");
        $(this).addClass("active");
    });

    // $(".formateButton button").click(function () {
    //     $(this).toggleClass("active");
    // });


    // User Dashboard start
    // Title 
    $("#templystock_title_color_picker").on('input', function() {
        var titleColor = $(this).val();
        $("#InputTemplyStockTitle").css("color", titleColor);
        $("#liveTemplyStockTitle").css("color", titleColor);
      });
    $("#InputTemplyStockTitle").on('change', function() {
        $("#liveTemplyStockTitle").text($(this).val());
      });


    // BG & Stroke 
    $("#templyStockNoStroke").on('input', function() {
        var borderColor =  $("#inputTemplyStockBorderColor").val();
        if ($(this).is(':checked')) {
          $(this).attr('value', 'true');
          $("#templyStockLivePreview").css("border-color", "transparent");
        } else {
          $(this).attr('value', 'false');
          $("#templyStockLivePreview").css("border-color", borderColor);
        }
      });
      
    $("#templyStockBackgroundColor").on('input', function() {
        $("#templyStockLivePreview").css("background", $(this).val());
      });
    $("#inputTemplyStockBorderColor").on('input', function() {
        $("#templyStockLivePreview").css("border-color", $(this).val());
      });

    // Button 
    $("#inputTemplyStokeButtonBgColorPicker").on('input', function() {
        $("#templyStockLivePreview").find("a").css("background",$(this).val());
    });
    $("#inputTemplyStokeButtonTextColorPicker").on('input', function() {
        $("#templyStockLivePreview").find("a").css("color",$(this).val());
        $("#inputTemlyStokeButtonText").css("color",$(this).val());
    });
    $("#inputTemlyStokeButtonText").on('input', function() {
        $("#templyStockLivePreview").find("a").text($(this).val());
    });

    // livePreviewButton button_link_url buttonLink
    $("#buttonLink").on("click", function () {
      let livePreviewButton = $("#livePreviewButton");
      let buttonLinkUrl = $("#button_link_url");

      if ($(this).is(':checked') && buttonLinkUrl.val().length > 0 && buttonLinkUrl.val().includes(".") ) {
        livePreviewButton.attr("target", "_blank").attr("href", $("#button_link_url").val());
      }else{
        livePreviewButton.removeAttr("target").attr("href", "javascript:void(0)")
      }
    });
     // User Dashboard end
    



    // Top Navigation start
    $(".top_navigation_on_off_switch button").click(function () {
      $(".top_navigation_on_off_switch button").removeClass("active");
      $(this).addClass("active");
    });

    // Title 
    $("#topNavigation_title_color_picker").on('input', function() {
        var titleColor = $(this).val();
        $("#InputTopNavigationTitle").css("color", titleColor);
        $("#liveTopNavigationTitle").css("color", titleColor);
      });
    $("#InputTopNavigationTitle").on('change', function() {
        $("#liveTopNavigationTitle").text($(this).val());
      });


    // BG & Stroke 
    $("#topNavigationNoStroke").on('input', function() {
        var borderColor =  $("#inputTopNavigationBorderColor").val();
        if ($(this).is(':checked')) {
          $(this).attr('value', 'true');
          $("#topNavigationLivePreview").css("border-color", "transparent");
        } else {
          $(this).attr('value', 'false');
          $("#topNavigationLivePreview").css("border-color", borderColor);
        }
      });
      
    $("#topNavigationBackgroundColor").on('input', function() {
        $("#topNavigationLivePreview").css("background", $(this).val());
      });
    $("#inputTopNavigationBorderColor").on('input', function() {
        $("#topNavigationLivePreview").css("border-color", $(this).val());
      });

    // Button 
    $("#inputTopNavigationButtonBgColorPicker").on('input', function() {
        $("#topNavigationLivePreview").find("a").css("background",$(this).val());
    });
    $("#inputTopNavigationButtonTextColorPicker").on('input', function() {
        $("#topNavigationLivePreview").find("a").css("color",$(this).val());
        $("#inputTopNavigationButtonText").css("color",$(this).val());
    });
    $("#inputTopNavigationButtonText").on('input', function() {
        $("#topNavigationLivePreview").find("a").text($(this).val());
    });

    // livePreviewButton button_link_url buttonLink
    $("#topNavigationButtonLink").on("click", function () {
      let livePreviewButton = $("#TopNavigationLivePreviewButton");
      let buttonLinkUrl = $("#top_navigation_button_link_url");

      if ($(this).is(':checked') && buttonLinkUrl.val().length > 0 && buttonLinkUrl.val().includes(".") ) {
        livePreviewButton.attr("target", "_blank").attr("href", $("#top_navigation_button_link_url").val());
      }else{
        livePreviewButton.removeAttr("target").attr("href", "javascript:void(0)")
      }
    });
    // Top Navigation end

    document.querySelector(".apply").addEventListener("submit", (e)=> e.preventDefault());
    



});