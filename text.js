const textArea = document.querySelector('[name="text"]');
const result = document.querySelector('.result');
const filterInputs = document.querySelectorAll('[name="filter"]');

function transformText(text) {
    result.textContent = text;
}

const filters = {
    sarcastic() {

    },
    funky() {

    },
    unable() {

    },
};

textArea.addEventListener('input', e => transformText(e.target.value));

