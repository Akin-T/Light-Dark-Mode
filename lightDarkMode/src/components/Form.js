import React from "react";

function Form() {
  return (
    <div className="main">
      <p className="sign" align="center">
        GİRİŞ
      </p>
      <form className="form1">
        <input className="username" type="text" placeholder="Kullanıcı Adı" />
        <input className="password" type="password" placeholder="Şifre" />
        <a className="submit" align="center">
          Giriş Yap
        </a>
        <p className="forgot" align="center">
          <a href="#">Şifreni Mi Unuttun ? </a>
        </p>
      </form>
    </div>
  );
}

export default Form;
