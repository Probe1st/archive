

const teams = document.querySelector('.films')
const url = 'http://localhost:3000/contact';
const options ={
    method: 'GET'
}
const newTeam = (team) => {
    const teamsDiv = document.createElement('div')
    teamsDiv.classList.add('moreNewBlock')
    teamsDiv.innerHTML =
        `<p>Имя: ${team.name}</p>
        <p>почта: ${team.email}</p>
        <p>номер: ${team.number }</p>
        <p>сообщение: ${team.message }</p>
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