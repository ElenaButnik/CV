

const refs = {
    section: document.querySelector('#ad-education'),
    text: document.querySelector('#changeTextSize'),
    fontSizeInput: document.querySelector('#font-size-control'),
};

function createSection (){
    const section= `<h2>Additional Education</h2>
    <p class="list--item">02.2021 untill now</p>
    <p class="list--item">FullStack developer</p>
    <p class="list--item">GoIT courses</p>`

    refs.section.insertAdjacentHTML('beforeend', section);
}

createSection ();

function changeTextSize(event) {
    const newFontSize = Number(event.currentTarget.value);

    refs.text.style.fontSize = `${newFontSize}px`;
}

refs.fontSizeInput.addEventListener('input', changeTextSize);