

let activeId = 'index';

logo.addEventListener('click', handler);
document.querySelectorAll(`button[onclick="handler('search')"]`).

function stockhandler() {
    let active = document.getElementById(activeId);
    let passive = document.getElementById('index');

    active.classList.toggle('hidden');
    passive.classList.toggle('hidden');

    activeId = 'index';
}

function handler(passiveId) {
    let active = document.getElementById(activeId);
    let passive = document.getElementById(passiveId);

    active.classList.toggle('hidden');
    passive.classList.toggle('hidden');

    activeId = passiveId;
}

function renderPosts(post) {
    let posts = document.querySelector('#posts');
    let postDiv = document.createElement('div')

    postDiv.className(post.className);
    postDiv.innerHTML = `
        <div class="flex flex-col space-y-[-2px]">
            <div class="flex flex-row space-x-10 brdr pt-5 pb-10 px-5">
                <div>
                    <p>Марка автомобиля</p><b>${post.Mark}</b>
                </div>
                <div>
                    <p>Название автомобиля</p><b>${post.Name}</b>
                </div>
                <div>
                    <p>Дата бронирования</p><b>${post.Date}</b>
                </div>
                <div>
                    <p>Время бронирования</p><b>${post.Time}</b>
                </div>
            </div>
            <div class="flex flex-row justify-between space-x-[-2px] brdr">
                <div class="border-r-2 border-black  w-[50%] text-2xl px-5 py-4 space-y-5">
                    <div>
                        <p>Стоимость</p>
                    </div>
                    <div><b>${post.Cost}</b></div>
                </div>
                <div class=" w-[50%] px-5 py-4 text-2xl space-y-5">
                    <div>
                        <p>Вероятность бронирования</p>
                    </div>
                    <div><b>${post.Probably}</b></div>
                </div>
            </div>
            <button type="button" onclick="handler('booking')" class="button">Забронировать</button>
        </div>
    `

    posts.append(postDiv);
}

const loadPost = async () => {
    const posts = await fetch('./postsHTML.json');

    posts.map(posts => renderPosts(posts));
}