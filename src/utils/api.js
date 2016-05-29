var Api = {
  addUser(email, password){
    email = email.trim();
    password = password.trim();
    var url = `http://localhost:3000/users`;
    return fetch(url, {
      method: 'post',
      body: JSON.stringify(email, password)
    })
      .then((res) => {
        res.json()
        console.log('Se envió')
      })
      .catch((error) => console.log('Falló envío'))
  }
}

module.exports = Api;
