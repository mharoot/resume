$(document).ready(function() {
    const $blinkingElement = $('#blinker-affect');
    animateBlink();
    async function animateBlink(){
        $blinkingElement.fadeOut(3000,function(){
            $blinkingElement.fadeIn(3000,function(){ animateBlink() });
        });
      }

});

