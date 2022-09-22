const myForm = document.querySelector('.feedback-form');
const formData = {};
const LOCALSTORAGE_KEY = 'feedback-form-state';

checkInput();

const formInput = event => {
  const { name, value } = event.target;

  try {
    let savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData) {
      savedData.JSON.parse(savedData);
    } else {
      savedData = {};
    }

    formData[name] = value;
    const stringifyData = JSON.stringify(savedData);
    localStorage.setItem(LOCALSTORAGE_KEY, stringifyData);
  } catch (error) {}
};

myForm.addEventListener('input', formInput);

function checkInput() {
  const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
  if (!savedData) {
    return;
  }
  {
    try {
      const parseData = JSON.parse(savedData);
      Object.entries(parseData).forEach(([name, value]) => {
        // console.log(name);
        // console.log(value);
        myForm.elements[name].value = value;
        // console.log(item);
      });
      //   console.log(Object.entries(parseData));
    } catch (error) {
      console.error(error);
    }
  }
}
