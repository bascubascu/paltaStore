/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const urlBase= 'https://platzi-avo.vercel.app/'
const url = 'https://platzi-avo.vercel.app/api/avo';
const appNode = document.querySelector('#app');
const formarPrice = (p=> {
    const newPrice = new window.Intl.NumberFormat('es', {
        style: 'currency',
        currency: 'USD',
    }).format(p)
    return newPrice
})

window
    .fetch(url)
    .then((response) => response.json())
    .then((responseJson => {
        const allItems = [];
        responseJson.data.forEach(item => {
            const container = document.createElement('div')
            const image = document.createElement('img');
            const title = document.createElement('h2');
            const price = document.createElement('div');
            
            image.src = `${urlBase}${item.image}`; 
            image.width = "100"
            title.textContent =item.name;
            price.textContent = formarPrice(item.price);

            container.style = 'text-align: center;'

            container.append(image, title, price);
            allItems.push(container);
            
            
        })
        appNode.append(...allItems);

    }));