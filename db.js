const data = {
    fechaActual: "2022-01-01",
    eventos: [
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
            name: "Collectivities Party",
            date: "2021-12-12",
            description: "Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 5,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas2.jpg",
            name: "Korean style",
            date: "2021-08-12",
            description: "Enjoy the best Korean dishes, with international chefs and awesome events.",
            category: "Food Fair",
            place: "Room A",
            capacity: 45000,
            assistance: 42756,
            price: 10,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo5.jpg",
            name: "Jurassic Park",
            date: "2021-11-02",
            description: "Let's go meet the biggest dinosaurs in the paleontology museum.",
            category: "Museum",
            place: "Field",
            capacity: 82000,
            assistance: 65892,
            price: 15,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Salidaalmuseo1.jpg",
            name: "Parisian Museum",
            date: "2022-11-02",
            description: "A unique tour in the city of lights, get to know one of the most iconic places.",
            category: "Museum",
            place: "Paris",
            capacity: 8200,
            estimate: 8200,
            price: 3500,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces2.jpg",
            name: "Comicon",
            date: "2021-02-12",
            description: "For comic lovers, all your favourite characters gathered in one place.",
            category: "Costume Party",
            place: "Room C",
            capacity: 120000,
            assistance: 110000,
            price: 54,
            },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Fiestadedisfraces1.jpg",
            name: "Halloween Night",
            date: "2022-02-12",
            description: "Come with your scariest costume and win incredible prizes.",
            category: "Costume Party",
            place: "Room C",
            capacity: 12000,
            estimate: 9000,
            price: 12,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica1.jpg",
            name: "Metallica in concert",
            date: "2022-01-22",
            description: "The only concert of the most emblematic band in the world.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            estimate: 138000,
            price: 150,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Conciertodemusica2.jpg",
            name: "Electronic Fest",
            date: "2021-01-22",
            description: "The best national and international DJs gathered in one place.",
            category: "Music Concert",
            place: "Room A",
            capacity: 138000,
            assistance: 110300,
            price: 250,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton3.jpg",
            name: "10K for life",
            date: "2021-03-01",
            description: "Come and exercise, improve your health and lifestyle.",
            category: "Race",
            place: "Campo de FutbÃ³l",
            capacity: 30000,
            assistance: 25698,
            price: 3,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Maraton1.jpg",
            name: "15K NY",
            date: "2021-03-01",
            description: "We'll be raising funds for hospitals and medical care in this unique event held in The Big Apple.",
            category: "Race",
            place: "New York",
            capacity: 3000000,
            assistance: 2569800,
            price: 3,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Libros7.jpg",
            name: "School's book fair",
            date: "2022-10-15",
            description: "Bring your unused school book and take the one you need.",
            category: "Book Exchange",
            place: "Room D1",
            capacity: 150000,
            estimate: 123286,
            price: 1,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Libros3.jpg",
            name: "Just for your kitchen",
            date: "2021-11-09",
            description: "If you're a gastronomy lover come get the cookbook that best suits your taste and your family's.",
            category: "Book Exchange",
            place: "Room D6",
            capacity: 130000,
            assistance: 90000,
            price: 100,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Cine3.jpg",
            name: "Batman",
            date: "2021-3-11",
            description: "Come see Batman fight crime in Gotham City.",
            category: "Cinema",
            place: "Room D1",
            capacity: 11000,
            assistance: 9300,
            price: 225,
        },
        {
            image: "https://amazingeventsapi.herokuapp.com/api/img/Cine7.jpg",
            name: "Avengers",
            date: "2022-10-15",
            description: "Marvel's Avengers Premier in 3d, the start of an epic saga with your favourite superheroes.",
            category: "Cinema",
            place: "Room D1",
            capacity: 9000,
            estimate: 9000,
            price: 250,
        },
    ],
};

const upcomingEvents = []
const pastEvents = []
const categories = []
const details = {}
var Input = {input: '', seted: false}

// Iterate the events and separate them into categories (pastEvents and upcomingEvents)
// and add the categories of the events to the categories array if they are not already, with a boolean value
data.eventos.map(event => {
    Date.parse(event.date) < Date.parse(data.fechaActual) ? pastEvents.push(event) : upcomingEvents.push(event)
    categories.find(category => category.name == event.category) ? null : categories.push({name: event.category, checked: false})
})

// Functions of the Search input
const searchInput = () => {
    let searchContainer = document.querySelector('.name_search_input')

    searchContainer.addEventListener('keyup', event => {
        Input.input = event.target.value
        event.target.value ? Input.seted = true : Input.seted = false
        renderPage(true)
    })//keyup - change
}

// Functions of the checkboxs ------------------------------------------------------------------------------------------------------------
// Render of the checkboxs
const categoryCheckbox = (category) => {
    return `<div class="category_search_checkbox_container">
                <input class="category_search_checkbox" type="checkbox" name="category" id="${category.replace(' ','_')}" value="${category}">
                <label for="${category.replace(' ','_')}">${category}</label>
            </div>`
}

// Function to render all the checkboxs
const renderCategories = () => {
    let categoriesContainer = document.querySelector('.category_search')
    
    categories.map(category => {
        categoriesContainer.insertAdjacentHTML("beforeend", categoryCheckbox(category.name))
    })
    checkboxListener()
}

//Select all the checkboxs and wait for them to change to modified the boolean on the respective category -------------------------------
const checkboxListener = () => {
    let checkboxs = document.querySelectorAll('.category_search_checkbox')
    
    checkboxs.forEach(checkbox => {
        checkbox.addEventListener('change', event => {
            categories.map(category => {
                if (category.name == event.target.value) {
                    category.checked ? category.checked = false : category.checked = true
                }
            })
            renderPage(true)
        })
    })
}

//Select all the checkboxs and wait for them to change to modified the boolean on the respective category -------------------------------
const linksListener = () => {
    let links = document.querySelectorAll('.card_button_link')
    
    links.forEach(link => {
        link.addEventListener('click', event => {
            data.eventos.map(evento => {
                evento.name == event.target.value ? details = evento : null
            })
        })
    })
}

// Function of the cards -----------------------------------------------------------------------------------------------------------------
// Render of the cards
const card = (event,href) => {
    return `<div class="card">
                <img class="card-img-top card_img" src="${event.image}" alt="Card image cap">
                <div class="card_body">
                    <div class="card_info">
                        <h5 class="card-title">${event.name}</h5>
                        <p class="card-text">${event.description}</p>
                    </div>
                    <div class="card_price_detail">
                        <p class="card_price">Price: $ ${event.price}</p>
                        <div class="card_button">
                            <a href=${href} id="${event.name}" class="card_button_link" onclick="getDetails(${event.name})" value="${event.name}">View Detail</a>
                        </div>
                    </div>
                </div>
            </div>`
}
// onclick="viewDetail(${event.name})"


// Function to render all the cards 
const insertCard = (id,events,href) => {
    let cardContainer = document.querySelector(id)
    
    while (cardContainer.firstChild) {
        cardContainer.removeChild(cardContainer.firstChild)
    }

    let checkInput = event => {
        let start = event.name.toLowerCase().startsWith(Input.input.toLowerCase())
        if (!Input.seted || start) return cardContainer.insertAdjacentHTML("beforeend", card(event,href))
    }
    
    let checked = categories.some(category => category.checked == true)

    events.map(event => {
        if (!checked) return checkInput(event)
        categories.map(category => {
            category.name == event.category && category.checked ? checkInput(event) : null
        })
    })
    linksListener()
}

// Function to render the pages
const renderPage = (reRender) => {
    // Check the page that we are in currently
    let URLactual = window.location.pathname.split('/').pop()
    
    // Invoke the function to render the cards in the corresponding page
    switch (URLactual) {
        case '': reRender ? null : renderCategories(), searchInput(), insertCard('#cards_container_home',data.eventos,'./pages/details.html'); break;
        case 'index.html': reRender ? null : renderCategories(), searchInput(), insertCard('#cards_container_home',data.eventos,'./pages/details.html'); break;
        case 'upcomingEvents.html': reRender ? null : renderCategories(), searchInput(), insertCard('#cards_container_upcoming',upcomingEvents,'../pages/details.html'); break;
        case 'pastEvents.html':reRender ? null :  renderCategories(),insertCard('#cards_container_past',pastEvents,'../pages/details.html'); break;
        case 'details.html': viewDetail();break;
    }
}


const getDetails = (name) => {
    console.log(name)
    data.eventos.map(event => {
        event.name == name ? details = event : null
    })
}

const viewDetail = () => {
    let detailContainer = document.getElementById('card_details')
    detailContainer.insertAdjacentHTML("beforeend", detailCard())
}

const detailCard = () => {
    return `<img class="card_image" src="${details.image}" alt="${details.name}">
            <div class="detail_description">
                <h5 class="card-title card_title">${details.name}</h5>
                <p class="card-text">${details.description}</p>
            </div>`
}

// Invoke the render function when the page is loaded
window.onload = renderPage(false)