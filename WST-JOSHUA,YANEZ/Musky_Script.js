
function goToWeb() {
  // Kunin ang mga input values
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Tukuyin ang mga tamang username at password at kanilang corresponding web pages
  var correctCredentials = {
    'yanez': { password: '12345', page: 'MUSKY_WAVES.html' },
    'joshua': { password: '9029', page: 'swallowtail.html' }
  };

  // I-check kung tama ang username at password
  if (correctCredentials.hasOwnProperty(username) && correctCredentials[username].password === password) {
    // I-redirect ang browser kapag tama ang credentials
    window.location.href = correctCredentials[username].page;
  } else {
    // Kung hindi tama, ipakita ang alert
    alert('Incorrect username or password. Try again.');
  }
}