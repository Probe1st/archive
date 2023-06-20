import { useEffect, useState } from "react";

function hoverAction(event) {
  if (event.type === "mouseover") {
    let elem = event.currentTarget.querySelector("div");

    elem.style.display = "flex";
  } else if (event.type === "mouseout") {
    let elem = event.currentTarget.querySelector("div");

    elem.style.display = "none";
  }
}

const hoverImageHanlder = (e) => {
  const {target} = e.current

  // elem.style.display = "flex";
}

// const arr = [<App />, <App />]

function Portfolio() {
  const [showMoreImages, setShowMoreImages] = useState(false);

  useEffect(() => {
    document.querySelectorAll(".portfolio > a > div").forEach((elem) => {
      elem.addEventListener("mouseover", hoverAction);
    });

    document.querySelectorAll(".portfolio > a > div").forEach((elem) => {
      elem.addEventListener("mouseout", hoverAction);
    });
  }, [showMoreImages]);
  
  const projects = []

  return (
    <div class="cont">
      <div id="portfolio" data-title="Портфолио дизайна интерьера">
        <section class="text-center mt-16">
          <p class="font-['poiretOne']">EL INTERIOR</p>
          <h1 class="text-4xl my-10 font-['poiretOne'] font-bold">
            Наше портфолио
          </h1>
          <p>Ознакомьтесь с нашими работами.</p>
        </section>

        <section class="flex flex-col items-center mt-10">
          <div class="portfolio">
            {/* [{url, title}] */}
            {projects.map((project) => {
              return (
                <a  href="#">
                <div class={`bg-[url(${project.url})]`}>
                  <div>
                    <p>{project.title}</p>
                  </div>
                </div>
              </a>
              )
            })}
            <a href="#">
              <div class="bg-[url(/public/images/jpg/1c2093be-f242-4ee4-b.jpg)]">
                <div>
                  <p>Дизайн-проект в КП Тимошкино</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div class="bg-[url(./images/jpg/1f279af1-3d0e-42c4-9.jpg)]">
                <div>
                  <p>Дизайн-проект в ЖК "Триумф"</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div class="bg-[url(./images/jpg/photo534592922380361.jpg)]">
                <div>
                  <p>Дизайн-проект в ЖК "Метрополия"</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div class="bg-[url(./images/jpg/2_1.jpg)]">
                <div>
                  <p>Дизайн-проект в ЖК "Изумруд"</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div class="bg-[url(./images/jpg/photo.jpg)]">
                <div>
                  <p>Дизайн-проект в ЖК "Испанские кварталы"</p>
                </div>
              </div>
            </a>

            <a href="#">
              <div class="bg-[url(./images/png/IMG_0029.png)]">
                <div>
                  <p>Дизайн-проект в ЖК "Гранель"</p>
                </div>
              </div>
            </a>

            {showMoreImages && (
              <>
                {" "}
                <a href="#">
                  <div class="bg-[url(./images/jpg/1.jpg)]">
                    <div>
                      <p>Дизайн-проект в ЖК "Западный порт"</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="bg-[url(./images/jpg/11.jpg)]">
                    <div>
                      <p>Дизайн-проект квартиры в г. Хабаровск</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="bg-[url(./images/jpg/1_1.jpg)]">
                    <div>
                      <p>Дизайн-проект в ЖК "Династия"</p>
                    </div>
                  </div>
                </a>
                <a href="#">
                  <div class="bg-[url(./images/jpg/1_2.jpg)]">
                    <div>
                      <p>Дизайн-проект в ЖК "Спайер"</p>
                    </div>
                  </div>
                </a>
              </>
            )}
          </div>

          {!showMoreImages && (
            <button
              onClick={(event) => {
                setShowMoreImages(true);
              }}
              class="button border border-black mt-10 font-['poiretOne']"
            >
              Показать еще
            </button>
          )}
        </section>
      </div>
    </div>
  );
}

export default Portfolio;
