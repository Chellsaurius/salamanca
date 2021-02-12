export function validateEmail(email) {
    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      return 'Ingrese un correo electrónico valido';
    } else return null;
  }
  
  export function validatePassword(password) {
    if (
      !/(?=(.*[0-9]))((?=.*[A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z]))^.{8,}$/i.test(
        password,
      )
    ) {         
      return 'La contraseña debe tener 1 minuscula, 1 mayuscula, 1 número y deberá ser de al menos 8 caracteres';
    } else return null;
  }
  
  export function validateUsername(username) {
    if (!/^[a-z0-9_-]{3,16}$/i.test(username)) {
      return 'Ingrese un usuario de al menos 3 caracteres y maximo de 16';
    } else return null;
  }
  
  export function validateCode(code) {
    if (!code) {
      return 'Ingresa el código';
    } else return null;
  }