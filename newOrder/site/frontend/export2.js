let form = document.querySelector("form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const object = formData.get("object");
    const square = formData.get("square");
    const type = formData.get("type");
    const style = formData.get("style");
    const budget = formData.get("budget");
    const date = formData.get("date");
    const people = `name: ${formData.get("name")}, number: ${formData.get("number")}, email: ${formData.get("email")},`;

    try {
        const response = await fetch("http://localhost:3000/forms", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ object, square, type, style, budget, date, people, }),
        });

        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
})