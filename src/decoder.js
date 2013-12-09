
var decoder = {
  getPassword: function() {
    this.password = prompt("Enter password to decode the message")
  },
  decryptMessage: function() {
    this.message = document.URL.split('?')[1]
  },
  decrypt: function() {
    this.getPassword()
    this.decryptMessage()
    return CryptoJS.AES.decrypt(this.message, this.password).toString(CryptoJS.enc.Utf8)
  }
}
