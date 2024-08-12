const userId = 3;
const queryParam = 'name'; 
const queryValue = 'Ervin Howell'; 

fetch(`https://jsonplaceholder.typicode.com/users/${userId}?${queryParam}=${queryValue}`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
