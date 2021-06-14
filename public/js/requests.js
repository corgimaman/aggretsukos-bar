// need to validate if song was requested in past 4 hr

// insert into queue table

// radio button
// insert into queue table


const requestFormHandler = async (event) => {
     event.preventDefault();
  
    const radio = document.querySelector('input[name=songIds]:checked').value;
    if (radio)  {
        const response =await fetch('/api/queue', {
        method: 'POST',
        body: JSON.stringify({
          radio
          
        }),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("hola")
      if (response.ok) {
        console.log("hello")
        document.location.replace('/queue');
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector('#requestForm')
.addEventListener('submit', requestFormHandler);
  
  
  
