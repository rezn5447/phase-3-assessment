$( document ).on("turbolinks:load", function(){

 $(".name-link").on("ajax:success", function(e, data, status, xhr){
    console.log("something");
    console.log(event);
    console.log(response);
    $('.show-post').append(response);
    });
})
