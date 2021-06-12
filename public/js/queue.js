async function fetchQueue () {
  try {
    let response = await fetch('/api/request')
    return response.json()
    
  } catch (err) {
    console.log(err); 
  }

}

