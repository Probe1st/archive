

const teams = document.querySelector('.films')
const url = 'http://localhost:3000/forms';
const options ={
    method: 'GET'
}
const newTeam = (team) => {
    const teamsDiv = document.createElement('div')
    teamsDiv.classList.add('moreNewBlock')
    teamsDiv.innerHTML =
        `<p>Обьект: ${team.object_id}</p>
        <p>Площадь: ${team.area_id}</p>
        <p>Тип Обьекта: ${team.typeObject_id}</p>
        <p>Стиль: ${team.style_id}</p>
        <p>Бюджет: ${team.cost_id}</p>
        <p>Начало Работы: ${team.BeginningOfWork_id }</p>
        <p>Данные Заказчика: ${team.People_id }</p>
        `

    teams.append(teamsDiv)
}
const teamsPost = async () => {
    try {
        const teams = await fetch(url, options)
        const teamsJson = await teams.json()
        inPrint = teamsJson.map(teams => newTeam(teams))
    } catch (error) {
        console.error()
    }
}
teamsPost();