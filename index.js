const url = 'https://vstup.osvita.ua/y2022/r21/92/978077/';

async function fetchHTML(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();
    return html;
  } catch (error) {
    console.error('Error fetching HTML:', error);
    throw error;
  }
}

fetchHTML(url)
  .then(html => {
    console.log(html); 
  })
  .catch(error => {
    console.error('Error:', error);
  });
