const btnSubmit = document.querySelector('.btn')
const wrapper = document.querySelectorAll('.wrapper')
const btnRating = document.querySelectorAll('.btn-rating')
const rating = document.querySelector('.rating')
let ratingValue = 0



btnSubmit.addEventListener('click', ()=>{
  if(ratingValue!=0){
    wrapper.forEach((item)=>{
      item.classList.toggle('inativo')
    })
    rating.insertAdjacentHTML('afterbegin', `<p>You selected ${ratingValue} out of 5</p>`)
  }
})

btnRating.forEach((item)=>{
  item.addEventListener('click', ()=>{
    ratingValue = item.value
    console.log(ratingValue)
  })
})