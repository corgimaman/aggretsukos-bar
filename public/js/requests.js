// future development: validate if song was requested in past 4 hr

const requestFormHandler = async (event) => {
  event.preventDefault();

  const radio = document.querySelector('input[name=songIds]:checked').value;
  console.log(radio)
  if (radio)  {
      const response = await fetch('/api/queue', {
      method: 'POST',
      body: JSON.stringify({radio}),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/queue');
    } else {
      alert(response.statusText);
    }
  }
};

document.querySelector('#requestForm')
.addEventListener('submit', requestFormHandler);