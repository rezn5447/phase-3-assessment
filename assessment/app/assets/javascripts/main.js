$( document ).on("turbolinks:load", function(){

 $(".name-link").on("ajax:success", function(e, data, status, xhr){
    console.log("toys");
    console.log(event);
    console.log(response);
});
