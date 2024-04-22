const button = document.getElementById('subscribeAction');
const input = document.getElementById('subscribeInput');

button.addEventListener('click', () => {
  setTimeout(() => {
    if (input.value != '') {
      alert(`сообщение отправленно на email: ${input.value}`)
      input.value = '';
    }
  }, 1000);
})

const form = document.querySelector('.form')
form.addEventListener('reset', function (evt) {
  console.log(evt)
})
