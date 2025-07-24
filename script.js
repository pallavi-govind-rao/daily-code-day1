
async function getFacts() {
  console.log('Getting data...');
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    console.log(response); // check response info
    const data = await response.json();
    console.log(data); // joke object

    // Displaying the joke on the page
    document.getElementById('setup').textContent = data.setup;
    document.getElementById('punchline').textContent = data.punchline;

  } catch (error) {
    console.error('Error fetching joke:', error);
  }
}
