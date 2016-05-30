var Api = {
  addUser(email, password){
    firstName = firstName.trim();
    lastName = lastName.trim();
    email = email.trim();
    password = password.trim();
    var url = `http://localhost:3000/users`;
    return fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
      })
    }).then((res) => res.json());
  }
}

module.exports = Api;
