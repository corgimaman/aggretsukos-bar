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


// logout function
const logout = async () => {
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  