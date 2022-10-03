window.addEventListener('load' , ()=>{
    // console.log("Page Loaded")
    let div = document.createElement('div')
    document.body.appendChild(div)
})

 const skills = ["Marketing", "Communication Skills", "Problem Solving", "Social Media","Project Management","Attention to Detail"]
let ul = document.querySelector("#skills")
skills.forEach(skill => {
     // function code
     let li = document.createElement("li")
     li.innerHTML = skill
     ul.appendChild(li)
 })

window.scroll(function(){
    $(".intro").css("opacity", 0 - $(window).scrollTop() / 0)
  });