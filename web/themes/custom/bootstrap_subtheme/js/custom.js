/**
 * @file
 * Global utilities.
 *
 */
(function ($, Drupal) {

  'use strict';

  Drupal.behaviors.bootstrap_subtheme = {
    attach: function (context, settings) {

      //  For Resource section 
      if (!$('.resources-img ').has('svg').length) {
        var svgCode = '<svg data-image-mask-id="10723778b68d83395f7a" width="0" height="0" style="position: absolute;">' +
          '<defs>' +
          '<clipPath id="10723778b68d83395f7a" clipPathUnits="objectBoundingBox">' +
          '<path d="M0.5,0 C0.768,0,0.894,0.056,0.919,0.081 C0.944,0.106,1,0.242,1,0.505 C1,0.768,0.947,0.891,0.919,0.919 C0.891,0.947,0.768,1,0.5,1 C0.202,1,0.11,0.948,0.081,0.919 C0.052,0.89,0,0.768,0,0.5 C0,0.232,0.053,0.109,0.081,0.081 C0.109,0.053,0.232,0,0.5,0"></path>' +
          '</clipPath>' +
          '</defs>' +
          '</svg>';

        // Append SVG code to each div inside elements with the class "resources-img"
        $('.resources-img').prepend(svgCode);
      }

      $('.resources-img').find('div').css({
        'overflow': 'hidden',
        'clip-path': 'url(#10723778b68d83395f7a)',
        'position': 'relative',
        'width': '100%'
      });

      //  For Resource section End


      // Hamburger Menu
        jQuery(document).ready(function($) {
          $('.sf-accordion-toggle a').click(function() {
              $('body').toggleClass('open-sub-menu');
          });
        });
       // Hamburger Menu

       // button Menu
       if (!$('.submit-btn button span').length) {
        var buttonTextSubmit = $(".submit-btn button").text();
        $(".submit-btn button").text(" ");
        $('.submit-btn button').append('<span>' + buttonTextSubmit + '</span>');
       }
      // button End 
       

       // Check if SVG is already appended

       $('#search-block-form input').attr('placeholder', 'Search');

       if ($('#search-block-form button svg').length === 0) {
           var svgContent = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">' +
               '<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"></path>' +
               '</svg>';
   
           // Append SVG content under the button
           $('#search-block-form button').append(svgContent);
       }
    }
  };

})(jQuery, Drupal);