import React, { useState } from "react";
import style from "./Form.module.css";
import validation from "./validation.js";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });
  const [password, setPassword] = useState(false);

  const mostrarPassword = () => {
    if (!password) {
      setPassword(true);
    } else {
      setPassword(false);
    }
  };

  const handleSubmit = () => {
    props.login(userData);
  };

  const handleInputChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit} className={style.container_form}>
      <img className={style.img} src="../img/title.png" alt="title" />
      <label className={style.label}>Username</label>
      <input
        className={!errors.username ? style.input : style.warning}
        name="username"
        value={userData.username}
        onChange={handleInputChange}
        type="text"
        placeholder="Username"
      />
      {errors.username && <p className={style.danger}>{errors.username}</p>}

      <label className={style.label}>Password</label>
      <input
        className={!errors.password ? style.input : style.warning}
        name="password"
        value={userData.password}
        onChange={handleInputChange}
        type={!password ? "password" : "text"}
        placeholder="password"
      />
      {!password ? (
        <button type="button" className={style.ojito} onClick={mostrarPassword}>
          <span class="material-icons-outlined">visibility</span>
        </button>
      ) : (
        <button
          type="button"
          className={style.ojito_cerrado}
          onClick={mostrarPassword}
        >
          <span class="material-icons-outlined">visibility_off</span>
        </button>
      )}

      {errors.password && <p className={style.danger}>{errors.password}</p>}
      <button type="submit" className={style.button}>
        LOGIN
      </button>
    </form>
  );
}
