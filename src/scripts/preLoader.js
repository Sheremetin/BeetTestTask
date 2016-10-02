(function(){
   $('.login-section-form-button').on('click', function(e){

       e.preventDefault();

       var spinner = $('.js-trigger');

       console.log(spinner);

       spinner.addClass('is-shown');

       setTimeout(function(){
           spinner.removeClass('is-shown');
       },5000)

   })
})();