// need to validate if song was requested in past 4 hr

const requestFormHandler = async (event) => {
     event.preventDefault();
     console.log('click heard!')
  
    const radio = document.querySelector('input[name=songIds]:checked').value;
    console.log(radio)
    if (radio)  {
        console.log('radio exists, going to fetch')
        const response = await fetch('/api/queue', {
        method: 'POST',
        body: JSON.stringify({radio}),
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("hola")
      if (response.ok) {
        console.log("hello response ok")
        document.location.replace('/queue');
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector('#requestForm')
.addEventListener('submit', requestFormHandler);