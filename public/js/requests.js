// need to validate if song was requested in past 4 hr

// insert into queue table

// radio button
// insert into queue table


const requestFormHandler = async (event) => {
    event.preventDefault();
  
    const radio = document.querySelector('#request').value;
  
    if (radio) {
      const response = await fetch('/api/queueRoutes', {
        method: 'POST',
        body: JSON.stringify({ radio }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/queue');
      } else {
        alert(response.statusText);
      }
    }
  };

document.querySelector('.request-form')
.addEventListener('submit', requestFormHandler);
  
  
  
