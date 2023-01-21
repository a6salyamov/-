$(function(){
  $(".country__content").not(":first").hide()
  $(".country__list .country__list-item").on("click", function(){
    $(".country__list .country__list-item").removeClass("country__list--active").eq($(this).index()).addClass("country__list--active")
    $(".country__content").hide().eq($(this).index()).fadeIn()
  }).eq(0).addClass("country__list--active")

  $('.programm__accordion-title').on('click', function (e) {
    e.preventDefault()
    $(this).toggleClass("programm__accordion-title--active")
  })


})

document.querySelectorAll('.programm__accordion-title').forEach((el) => {
  el.addEventListener('click', () => {
    let content = el.nextElementSibling;
    console.log(content)
    if(content.style.maxHeight) {
      document.querySelectorAll('.programm__accordion-text').forEach(el => el.style.maxHeight = null)
    } else{
      document.querySelectorAll('.programm__accordion-text').forEach(el => el.style.maxHeight = null)
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
})


