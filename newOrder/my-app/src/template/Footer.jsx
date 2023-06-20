function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center bg-[#1c1c1c] w-full">
        <div className="p-32">
          <div className="grid grid-cols-2 gap-10">
            <div className="grid grid-cols-2 gap-3">
              <img src="images/svg/icon-youtube.svg" alt="" />

              <img src="images/svg/icon-tg.svg" alt="" />

              <img src="images/svg/icon-inst.svg" alt="" />

              <img src="images/svg/icon-fb.svg" alt="" />
            </div>

            <div className="self-center  font-bold">
              <a href="tel:89152832417">+7 (915) 283-24-17</a>
              <a href="mailto:versiya@list.ru">versiya@list.ru</a>
            </div>
          </div>

          <div className="mt-14">
            <p className="text-xl">Каширское ш., 3, корп. 2, стр. 4</p>
          </div>
        </div>
      </div>

      <div className="flex flex-row justify-center p-3 items-center space-x-10 bg-[#525252] w-full">
        <p className="text-[#000000] text-xl">
          Made on Tilda by Ekaterina Deynekina
        </p>
        <div className="flex flex-row space-x-6 child:w-10">
          <img src="images/svg/icon-behance-black.svg" alt="behance" />
          <img src="images/svg/icon-whatsapp-black.svg" alt="Whatsapp" />
          <img src="images/svg/icon-tg-black.svg" alt="Telegram" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
