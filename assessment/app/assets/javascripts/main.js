$( document ).on("turbolinks:load", function(){

 $("#new_post").on("ajax:success", function(e, data, status, xhr){
    console.log("something");
    console.log(event);
    console.log(response);
    $('.show-post').append(response);
    });
})
