ActiveId = 'index';
lastId = '';

function handler(PassiveId) {
    active = document.querySelector(`#${ActiveId}`);
    passive = document.querySelector(`#${PassiveId}`);

    active.setAttribute('hidden', '');
    passive.removeAttribute('hidden');

    lastId = ActiveId;
    ActiveId = PassiveId;
}

function setCursor() {
    elems = document.querySelectorAll('[onclick^="handler"]');

    for (let elem of elems) {
        elem.classList.add('cursorPointer');
    }
}
setCursor();

function countInputs() {
    rows = document.querySelectorAll('[data-passenger]');
    return rows.length;
}

function addPassanger() {
    form = document.querySelector('#booking-form');

    if (countInputs() < 8) {
        // родительский блок
        passanger = document.createElement('div');
        form.append(passanger);

        passanger.setAttribute('data-passenger', `${countInputs() + 1}`)
        passanger.setAttribute('class', 'row mb-2');

        // 1 инпут-блок
        fstName = document.createElement('div');
        fstName.setAttribute('class', 'col-12 col-sm-6 col-lg-4 col-xl-3 pr-lg-0');
        passanger.append(fstName);

        // внутренний инпут
        fstNameInput = document.createElement('input');
        fstNameInput.setAttribute('type', 'text');
        fstNameInput.setAttribute('placeholder', 'First name');
        fstNameInput.setAttribute('class', 'form-control test-5-name w-100')
        fstName.append(fstNameInput);

        // 2 инпут-блок
        lastName = document.createElement('div');
        lastName.setAttribute('class', 'col-12 col-sm-6 col-lg-4 mt-3 col-xl-3 mt-sm-0 pr-lg-0')
        passanger.append(lastName);

        // внутренний инпут
        lastNameInput = document.createElement('input');
        lastNameInput.setAttribute('type', 'text')
        lastNameInput.setAttribute('placeholder', 'Last name');
        lastNameInput.setAttribute('class', 'form-control test-5-name w-100')
        lastName.append(lastNameInput);

        // 3 инпут-блок
        dateOfBirth = document.createElement('div');
        dateOfBirth.setAttribute('class', 'col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-lg-0')
        passanger.append(dateOfBirth);

        // внутренний инпут
        dateOfBirthInput = document.createElement('input');
        dateOfBirthInput.setAttribute('type', 'text')
        dateOfBirthInput.setAttribute('placeholder', 'Date of Birth');
        dateOfBirthInput.setAttribute('class', 'form-control test-5-dob')
        dateOfBirth.append(dateOfBirthInput);

        // 4 инпут-блок
        docNum = document.createElement('div');
        docNum.setAttribute('class', 'col-12 col-sm-6 col-lg-2 mt-3 col-xl-2 mt-lg-0 pr-xl-0')
        passanger.append(docNum);

        // внутренний инпут
        docNumInput = document.createElement('input');
        docNumInput.setAttribute('type', 'text');
        docNumInput.setAttribute('placeholder', 'Document num');
        docNumInput.setAttribute('class', 'form-control test-5-doc');
        docNum.append(docNumInput);

        // блок кнопки ремув
        removeBtn = document.createElement('div');
        removeBtn.setAttribute('class', 'col-12 col-xl-2 mt-3 mt-xl-0');
        passanger.append(removeBtn);

        // кнопка ремув
        removeBtnButton = document.createElement('button');
        removeBtnButton.setAttribute('type', 'button');
        removeBtnButton.setAttribute('onclick', 'removePassanger(this)')
        removeBtnButton.setAttribute('class', 'btn btn-danger btn-sm form-control test-5-bremove');
        removeBtnButton.setAttribute('data-remove', `${countInputs()}`);
        removeBtnButton.innerHTML = "Remove";
        removeBtn.append(removeBtnButton);
    } else {
        alert('может быть максимум 8 пассажиров');
    }
}

function removePassanger(elem){
    if(countInputs() > 1){
        number = elem.getAttribute('data-remove');
        removeDiv = document.querySelector(`div[data-passenger="${number}"]`);
    
        removeDiv.remove();
    }else{
        alert('может быть минимум 1 пассажир');
    }
    
}