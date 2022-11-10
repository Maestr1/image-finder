export default function RequestForm() {

  function submitHandler(e) {
    e.preventDefault();
  }

  return (
    <form className="header__form form" onSubmit={submitHandler}>
      <input className="form__input header__form-input" type="text" required placeholder="Введите ваш запрос"/>
      <button className="form__btn" type="submit"></button>
    </form>
  );
}