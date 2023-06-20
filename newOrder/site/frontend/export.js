const form = document.querySelector('form[name="form"]');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const name = formData.get('name');
    const email = formData.get('email');
    const number = formData.get('number');
    const message = formData.get('message');

    try {
        const response = await fetch('http://localhost:3000/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, number, message })
        });

        const data = await response.json();
        console.log(data);
    } catch (err) {
        console.log("gg");
    }
});
