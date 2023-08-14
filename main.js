const form = document.getElementById('loginForm');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission from refreshing the page

  // Get form input values
  const username = document.querySelector('input[name="username"]').value;
  const password = document.querySelector('input[name="password"]').value;

  // Do form validation here if needed

  // Redirect to the main website after successful login
  const redirectURL = 'https://gamma.app/public/NDS-Business-Your-Ultimate-Business-Companion-kump8iynss7mys5?mode=doc';
  window.location.href = redirectURL;
});
