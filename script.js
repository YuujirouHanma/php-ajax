document.getElementById('commentForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman
  
    const username = document.getElementById('username').value;
    const comment = document.getElementById('comment').value;
  
    const formData = new FormData();
    formData.append('username', username);
    formData.append('comment', comment);
  
    fetch('server.php', {
      method: 'POST',
      body: formData
    })
    .then(response => response.text())
    .then(data => {
      document.getElementById('comments').innerHTML += data; // Tambahkan komentar baru
      document.getElementById('commentForm').reset(); // Reset form
    })
    .catch(error => console.error('Error:', error));
  });
  