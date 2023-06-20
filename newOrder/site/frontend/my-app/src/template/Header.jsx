import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div class="grid grid-cols-3 grid-rows-1">
        <div></div>

        <img class="w-[80%]" src="images/png/logo.png" alt="logo" />

        <div class="flex flex-col justify-self-end self-center font-thin underline text-gray-500">
          <a href="tel:89152832417">+7 (915) 283-24-17</a>
          <a href="mailto:versiya@list.ru">versiya@list.ru</a>
        </div>
      </div>

      <div class="flex flex-col mt-5 items-center w-full p-5 border-y">
        <nav class="w-[60%] flex flex-row justify-between font-semibold">
          <Link to={"/"}>ГЛАВНАЯ</Link>
          <Link to={"/portfolio"}>ПОРТФОЛИО</Link>
          <Link to={"/prices"}>УСЛУГИ</Link>
          <Link to={"/team"}>О БЮРО</Link>
          <Link to={"/contacts"}>КОНТАКТЫ</Link>
          <Link to={"/testing"}>УЗНАТЬ СТОИМОСТЬ</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
