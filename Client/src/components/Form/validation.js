



export default function validation(userData) {
    const errors = {};
    const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    // const regexPassword = /^;
    // const regexNumber = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
	const regexContraseña = /^(?=.*\d).{6,10}$/;
    if(!regexEmail.test(userData.username)) errors.username = "*Debe ser un email válido";
    if(!userData.username) errors.username = "*No puede estar vacío";
    if(userData.username.length > 35) errors.username = "*No debe ser mayor a 35 caracteres";

    // if(!regexPassword.test(userData.password)) errors.password ="Debe tener entre 6 y 10 caracteres"; 
    if(!regexContraseña.test(userData.password)) errors.password = "*Debe tener entre 6 y 10 caracteres y contener al menos un número"
    // if(!regexNumber.test(userData.password)) errors.password = "Debe tener al menos un numero";

    return errors;
}