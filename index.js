$(document).ready(function () {

   $(document).on('contextmenu', function () {
      return false;
   });

   $(document).on("mousedown", function (event) {
      event.stopPropagation();
      console.log(event.which);
      console.log(event.pageY, event.pageX);   

      if (event.which == 3) {
         $(".hidden").removeClass("shown");
         if ($(event.target).is('img')) {
            $(".newtab, .image").addClass("shown");
         }

         $("#context").css({
            top: event.pageY,
            left: event.pageX
         })
         $("#context").fadeIn();

      }
      if (event.which == 1) { $('#context').fadeOut(); }

   });

   $('[data-trigger="dropdown"]').on('click', function () {
      var obj = $(this).parent().find('.sub-search');
      obj.fadeIn('300');


      $('.Places').on('mouseleave', function () {
         obj.fadeOut('300');
      })
   });

   $('#button2').on('click', function () {
      this.content = $('.bar').val();
      $('#p1').append(this.content);

   });
   
   $('#button1').on('click',function(){
      $('#text').replace=this.content;
   });
   

});   
