
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
let currentIndex = 0

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
                this.handleClickNext()
                
            }
        })
    }


    handleClickNext(){
        imagens[currentIndex].classList.remove('block')
        imagens[currentIndex].classList.add('hidden')
        currentIndex = (currentIndex + 1) % imagens.length /* se eu chego no ultimo, a conta retorna zero e eu volto para a primeira foto */
        imagens[currentIndex].classList.remove('hidden')
    }

    handleClickPrevious(){
        
        imagens[currentIndex].classList.remove('block')
        imagens[currentIndex].classList.add('hidden')
        if(currentIndex == 0) {
            currentIndex = imagens.length -1
        }else{
            currentIndex = (currentIndex - 1)
        }
        console.log(currentIndex)
        imagens[currentIndex].classList.remove('hidden')
    }
}

const carrossel = new Carrossel


