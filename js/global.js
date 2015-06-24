    //loading the smooth scroll-to-top
            
               $(window).load(function(){
            $(".backtotop a[href^='#']").on('click', function(e) {

               // prevent default anchor click behavior
               e.preventDefault();

               // animate
               $('html, body').animate({
                   scrollTop: $(this.hash).offset().top
                 }, 800, function(){
                    //the bigger the number, the slower it goes to top.
           
                   // when done, add hash to url
                   // (default click behaviour)
                   window.location.hash = this.hash;
                 });

                });

                });
 //-----              


    $(document).ready(function () {
    var pictureCount = $('#container img').length;
    var scrollResolution = 50;

    animateHorse();
    
    function animateHorse() {
        var currentScrollPosition = window.pageYOffset;
        var imageIndex = Math.round(currentScrollPosition / scrollResolution);
        
        if (imageIndex >= pictureCount) {
            imageIndex = pictureCount - 1; // Select last image
        }
        
        $("#container img").hide();
        $("#container img").eq(imageIndex).show();
    }
    
    $(window).bind('scroll', function() {
        animateHorse();
    });
});


      var menuRight = document.getElementById( 'cbp-spmenu-s2' ),
      showRightPush = document.getElementById( 'showRightPush' ),
      body = document.body;

      showRightPush.onclick = function() {
        classie.toggle( this, 'active' );
        classie.toggle( body, 'cbp-spmenu-push-toleft' );
        classie.toggle( menuRight, 'cbp-spmenu-open' );
        disableOther( 'showRightPush' );
      };

      function disableOther( button ) {

        if( button !== 'showRightPush' ) {
          classie.toggle( showRightPush, 'disabled' );
        }
      }
