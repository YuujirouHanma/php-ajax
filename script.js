document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Mencegah reload halaman

  const username = document.getElementById('username').value;
  const comment = document.getElementById('comment').value;

  fetch('/api/comment', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      comment: comment
    })
  })
  .then(response => response.text())
  .then(data => {
    document.getElementById('comments').innerHTML += data; // Tambahkan komentar baru
    document.getElementById('commentForm').reset(); // Reset form
  })
  .catch(error => console.error('Error:', error));
});
