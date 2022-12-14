const btnSubmit = document.querySelector('.btn')
const wrapper = document.querySelectorAll('.wrapper')
const btnRating = document.querySelectorAll('.btn-rating')
let ratingValue = 0

btnSubmit.addEventListener('click', ()=>{
  wrapper.forEach((item)=>{
    item.classList.toggle('inativo')
  })  
})

btnRating.forEach((item)=>{
  item.addEventListener('click', ()=>{
    ratingValue = item.value
    console.log(ratingValue)
  })
})