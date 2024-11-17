const API = "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"

const star_blank = '../assets/icons/Star.svg'
const star_fill = '../assets/icons/Star_Fill.svg'

let cafecitos = []

// trae y muestra los cafecitos en la pagina
async function mostrarCafes() {
    const response = await fetch(API)
    const cafes = await response.json()
    cafecitos = cafes
   
    crearEncabezado()

    cafecitos.forEach(cafe => {
        crearCafe(cafe)
    })
}

function crearEncabezado(){
    const Encabezado = document.getElementById('encabezado')
        const divpresentacion = document.createElement('div')
        divpresentacion.classList.add('divpresenta')
            const presentacion = document.createElement('h1')            
                presentacion.textContent="Our Collection"
                presentacion.style.fontSize="35px"
            
            const texto = document.createElement('p')
                texto.textContent="Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly."
      
    divpresentacion.appendChild(presentacion)
    divpresentacion.appendChild(texto)
     Encabezado.appendChild(divpresentacion)
}

// crea el div que contiene el cafecito
function crearCafe(cafe) {
    // obtenemos el div donde vamos a mostrar todos los cafecitos
    const cafecitos = document.getElementById('cafecitos')

    if(!cafecitos) return

    cafecitos.style.display = 'flex'
    cafecitos.style.flexWrap = 'wrap'
    cafecitos.style.gap = '1em'

   
    
    // empezamos con la construccion del cafecito
    const div = document.createElement('div')
    div.classList.add('cafe')

    //segunda Parte
    // cabecera de la tarjetita
    const cardHeader = document.createElement('div')

        const image = document.createElement('img')
        image.src = cafe.image
        image.style.borderRadius = '10px'   
        
        //POPULAR
        const cardPopular = document.createElement('div')    
            if(cafe.popular )
            { 
                cardPopular.textContent = 'Popular'
                cardPopular.style.background= "#F6C768";
            }
            else
            {
                cardPopular.textContent = null
            }

            cardPopular.classList.add('popular')

    cardHeader.appendChild(cardPopular)
    cardHeader.appendChild(image)


    //tercera parte
    const cardFooter = document.createElement('div')
        const cardDescription = document.createElement('div')

            const title = document.createElement('h3')
            title.textContent = cafe.name
            title.style.margin = '0'


            // rating
            const rating = document.createElement('div')
            
                const star = document.createElement('img')
                // cambiando la imagen de la estrellita
                cafe.rating == null || cafe.votes == 0 ? (star.src = star_blank) : (star.src = star_fill)

            rating.appendChild(star)
            rating.style.marginTop = '.6em'

            // validando si hay votos o no
            const votes = document.createElement('div')
                cafe.rating == null || cafe.votes == 0
                ? (votes.textContent = 'No rating')
                : (votes.textContent = cafe.rating)

            rating.appendChild(votes)
            rating.classList.add('rating')
            
    // -----------------   
        cardDescription.appendChild(title)
        cardDescription.appendChild(rating)
    
        const price = document.createElement('div')
            price.textContent = cafe.price
            price.classList.add('price')

    cardFooter.appendChild(cardDescription)
    cardFooter.appendChild(price)
    cardFooter.classList.add('cardFooter')

    // agregamos los hijos al contenedor padre
    div.appendChild(cardHeader)
    div.appendChild(cardFooter)

   
    cafecitos.appendChild(div)
}

mostrarCafes()


// S = single responsability
// O = open / close
// L
// I
// D