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
        'width': '100%',
        'height': '256px'
      });

      //  For Resource section End
      // ==================================================

    }
  };

})(jQuery, Drupal);