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
    rating.insertAdjacentHTML('afterbegin', `<figure class="thank-img">
    <img src="./images/illustration-thank-you.svg" alt="">
  </figure><p class="rating-select">You selected ${ratingValue} out of 5</p>`)
  }
})

btnRating.forEach((item)=>{
  item.addEventListener('click', ()=>{
    ratingValue = item.value
  }) 
})