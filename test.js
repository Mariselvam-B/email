const url = 'https://raw.githubusercontent.com/Mariselvam-B/email/main/test.json';

// Fetch JSON data from GitHub
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    // Log the specific key
    console.log(data.items[0].mass); // Adjust based on your JSON structure
  })
  .catch(error => {
    console.error('Error fetching the JSON file:', error);
  });
