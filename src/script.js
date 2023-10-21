
const ul = document.querySelector('.lista-imgs')

class ImagemHover {
    constructor(){
        this.eventos()
    }

    eventos(){

        ul.addEventListener('mouseover',e=>{
         const el = e.target
         console.log(el)
         const id = el.id
         const tag = el.tagName.toLowerCase()
            if(tag === 'img') {
                this.handleMouseOver(id,el)

            }
            else{
                
            }

        })

        ul.addEventListener('click',e=>{
            const el = e.target
            const imgAnterior = el.previousElementSibling
            const id = imgAnterior.id
            if(id !== ""){
                this.divFoto(id)
            }
        })
    }


        divFoto(id){
            this.removerDiv()
            const div =  document.createElement('div')
            const img = `<img src="img-categoria/${id}.jpg" alt="${id}">`
            div.innerHTML = img
            div.classList.add('div-img')
            ul.insertAdjacentElement('afterend',div)
         }
    
        
         removerDiv() {
            const divsRemove = document.querySelectorAll('.div-img')
            for( let div of divsRemove) {
                div.remove()
            }
         }


    handleMouseOver(id,el){
        const imgsHover = ul.querySelectorAll('#hover')
        for(let img of imgsHover ) {
            if(img.classList.contains(id)){
                img.classList.toggle('hidden')
                el.classList.add('hidden')
                
            }
        }

    }

}

    
const imgHover = new ImagemHover()
