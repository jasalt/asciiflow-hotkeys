// Omnigraffle flavored hotkeys for ASCIIFlow (http://asciiflow.com/)
// Creates some keyboard bindings for tools with included jQuery.
// jasalt 2014 (MIT Licensed)
(function(){
  'use strict';

  var mapping = {
    '1': 'select-button',
    '2': 'box-button',
    '3': 'arrow-button',
    '4': 'text-button',
    '5': 'freeform-button',
    '6': 'line-button',
    '7': 'move-button',
    '8': 'erase-button'
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
