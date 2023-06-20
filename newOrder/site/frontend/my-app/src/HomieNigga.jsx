function HomieNigga() {
  return (
    <div className="cont">
      <div
        id="index"
        data-title="Дизайн интерьера квартир и домов"
        className="w-full"
      >
        <section className="h-[700px] bg-[url(./images/png/noroot.png)] bg-center">
          <div className="flex flex-col h-full justify-end bg-black/80">
            <div className="text-center text-white my-16">
              <h1 className="text-4xl my-10 font-['poiretOne']">
                От мечты до реализации один шаг
              </h1>
              <p className="text-md font-light">
                Мы дизайн-бюро. Работаем в сфере дизайна интерьеров с <br />
                2014 года.
              </p>
            </div>
          </div>
        </section>

        <section className="flex flex-col items-center p-20">
          <div className="space-y-5 w-1/3 text-center text-gray-500 text-thin">
            <p>
              Мы занимаемся дизайн-проектированием частных и коммерческих
              интерьеров в России и за рубежом.
            </p>
            <p>
              Предлагаем комплекс услуг от профессиональной консультации до
              комплексной разработки и реализации интерьера.
            </p>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <div className="flex flex-row w-full h-[570px]">
            <div className="w-1/4 bg-cover bg-center bg-[url(./images/jpg/4.jpg)]"></div>

            <div className="w-1/4 bg-cover bg-center bg-[url(./images/jpg/21.jpg)]"></div>

            <div className="w-1/4 bg-cover bg-center bg-[url(./images/jpg/3__2.jpg)]"></div>

            <div className="w-1/4 bg-cover bg-center bg-[url(./images/jpg/2.jpg)]"></div>
          </div>

          <a data-link="portfolio" className="button border border-black mt-10">
            Смотреть все проекты
          </a>
        </section>

        <section
          className="flex flex-col items-center w-full p-16 text-white mt-24
                bg-[#1c1c1c]"
        >
          <div>
            <h2 className="text-5xl">Тарифы</h2>
          </div>

          <div className="tariff">
            <div>
              <div>
                <h3>Light</h3>
                <p>Планировочное решение</p>
                <p>Коллажи</p>
                <p>
                  Ведомость используемых <br />
                  материалов
                </p>
              </div>

              <a data-link="prices" className="button-lg border">
                2750 руб./м²
              </a>
            </div>

            <div className="border-x border-white">
              <div>
                <h3>Optimum</h3>
                <p>Планировочное решение</p>
                <p>Коллажи</p>
                <p>Альбом с рабочей документацией</p>
                <p>
                  Ведомость оборудования и <br />
                  материалов
                </p>
              </div>

              <a data-link="prices" className="button-lg border">
                3000 руб./м²
              </a>
            </div>

            <div>
              <div>
                <h3>Premium</h3>
                <p>Планировочное решение</p>
                <p>Фотореалистичные 3D визуализации</p>
                <p>Альбом с рабочей документацией</p>
                <p>
                  Ведомость оборудования и <br />
                  материалов с возможностью <br />
                  отслеживания бюджета
                </p>
              </div>

              <a data-link="prices" className="button-lg border">
                3300 руб./м²
              </a>
            </div>
          </div>

          <div className="mt-16">
            <a data-link="prices" className="button border">
              Узнать подробнее
            </a>
          </div>
        </section>

        <section className="flex flex-col items-center">
          <p className="relative top-[100px] text-white py-2 px-10 bg-black font-['poiretone']">
            EL INTERIOR
          </p>
          <div className="border-y border-black mt-20 p-16 w-2/3 text-center text-gray-500">
            <p>
              Мы всегда делаем свою работу качественно, эстетично и с логикой.
              <br />
              Выбирайте нас, ведь лучшая жизнь начинается дома!
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomieNigga;
