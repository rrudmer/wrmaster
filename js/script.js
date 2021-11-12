window.onload = function(){
    
    window.addEventListener("scroll", ()=>{

        let nav = document.querySelector("#nav")
        
        if(scrollY > 0) {
            document.querySelector("#nav").classList.add("active")
        } else {
            document.querySelector("#nav").classList.remove("active")
        }
        
    })

    // const navItems = document.querySelectorAll(".nav-bar-item a")
    
    // navItems.forEach(item => {
        
    //     item.addEventListener('click', scrollToIdClick)
    // })

    // function scrollToIdClick(event){
        
    //     event.preventDefault()
        
    //     const element = event.target
    //     const id = element.getAttribute("href")
    //     const to = document.querySelector(id).offsetTop

    //     window.scroll({
    //         top: to,
    //         behavior: "smooth"
    //     })

    // }
}