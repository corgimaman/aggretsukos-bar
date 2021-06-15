// Function for hamburger icon in Navbar
$(function (){
    $(".toggle").on("click", function(){
       if ($(".item").hasClass("active")) {
          $(".item").removeClass("active");
       } else{
           $(".item").addClass("active");
       }
    })
});
  