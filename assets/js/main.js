const buttonSubmit = document.querySelector('.btn')
const wrapper = document.querySelectorAll('.wrapper')

buttonSubmit.addEventListener('click', ()=>{
  wrapper.forEach((item)=>{
    item.classList.toggle('inativo')
  })  
})