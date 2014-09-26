// Hotkeys for ASCIIFlow (http://asciiflow.com/)
// Creates some keyboard bindings for tools with included jQuery.
// jasalt 2014 (MIT Licensed)
(function(){
  'use strict';

  var mapping = {
    '1': 'box-button',
    '2': 'line-button',
    '3': 'arrow-button',
    '4': 'freeform-button',
    '5': 'erase-button',
    '6': 'move-button',
    '7': 'text-button',
    '8': 'select-button'
  };

  $.each(mapping, function(key, command) {
    console.log('Map ' + key + ' to ' + command);
    $(document).keypress(function(e){
      // Map to keyboard keycodes.
      // http://www.asquare.net/javascript/tests/KeyCode.html
      if(e.charCode === 48 + parseInt(key)){
        $('#' + command).trigger('click');
        console.log('key ' + key + ' -> ' + command);
      }
    });
  });
})();
