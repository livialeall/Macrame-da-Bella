
const ul = document.querySelector('.lista-imgs')
const imgs = ul.querySelectorAll('img')
class ImagemHover {
    constructor(){
        this.eventos()
    }

    eventos(){

        for(let img of imgs) {
            img.addEventListener('mouseenter',e=>{
                const el = e.target
                console.log(el)
                const id = el.id
                this.handleMouseEnter(id,el)
               })
            
            img.addEventListener('mouseout',e=>{
                const el = e.target
                const id = el.id
                if(id ==='hover'){
                    this.handleMouseOut(el)
                }
            })
            
        }
        
        ul.addEventListener('click',e=>{
            const el = e.target
            const imgAnterior = el.previousElementSibling
            const id = imgAnterior.id
            if(id !== ""){
                this.divFoto(id)
                this.divParagrafo(id)
            }
        })
    }


       async divFoto(id){
            this.removerDiv()
            const div =  document.createElement('div')
            const img = `<img src="img-categoria/${id}.jpg" alt="${id}">`
            div.innerHTML = img
            div.classList.add('div-img')
            ul.insertAdjacentElement('afterend',div)

            const p =  document.createElement('p')
            const texto = await fetch(`./textos/${id}.txt`)
            const responseTexto = await texto.text()
            p.innerHTML = responseTexto
            p.classList.add('div-descricao')
            div.insertAdjacentElement('beforeend',p)

         }
        
         removerDiv() {
            const divsRemove = document.querySelectorAll('.div-img')
            for( let div of divsRemove) {
                div.remove()
            }
         }


        handleMouseEnter(id,el){
        const imgsHover = ul.querySelectorAll('#hover')
        for(let img of imgsHover ) {
            if(img.classList.contains(id)){
                img.classList.remove('hidden')
                el.classList.add('hidden')
            }
        }
    }

    handleMouseOut(el){
        const imgsOriginal = ul.querySelectorAll('.original')
        for(let img of imgsOriginal ) {
            img.classList.remove('hidden')
            el.classList.add('hidden')
            
        }
    }

}

const imgHover = new ImagemHover()



const divCarrossel = document.querySelector('#carousel')
const imagens = divCarrossel.querySelectorAll('img')

class Carrossel {
    constructor(){
        this.eventos()
        

    }
    eventos(){
        divCarrossel.addEventListener('click',e=>{
            const el = e.target
            const id = el.id
            if(id === 'previous'){
                this.handleClickPrevious()
              
            }

            if(id === 'next') {
                this.handleClickNext(),10000
                
                
            }
        })
    }


    handleClickNext(){
        const active = divCarrossel.querySelector('.active')
        const imgPosterior = active.nextElementSibling
        const imgPosterior2 = imgPosterior.nextElementSibling
        const imgAnterior = active.previousElementSibling

        if(!imgPosterior){
            return
        }
        active.classList.remove('active')
        active.classList.add('background-img')

        imgPosterior.classList.remove('background-img')
        imgPosterior.classList.add('active')

        imgPosterior2.classList.add('background-img')
        imgPosterior2.classList.remove('hidden')

        imgAnterior.classList.remove('background-img')
        imgAnterior.classList.add('hidden')

        }

    handleClickPrevious(){
        const active = divCarrossel.querySelector('.active')
        const imgAnterior = active.previousElementSibling
        const imgAnterior2 = imgAnterior.previousElementSibling
        const imgPosterior = active.nextElementSibling
        if(!imgAnterior){
            return
        }
        active.classList.remove('active')
        active.classList.add('background-img')

        imgAnterior.classList.remove('background-img')
        imgAnterior.classList.add('active')

        imgPosterior.classList.remove('background-img')
        imgPosterior.classList.add('hidden')

        imgAnterior2.classList.add('background-img')
        imgAnterior2.classList.remove('hidden')
        
           
        

    }
}

const carrossel = new Carrossel


