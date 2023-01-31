const data = [
    { 
    name: "NIKE", 
    products: [ {name: "Nike Phantom", description: "Професійні футбольні бутси Nike Phantom GT2 PRO DF FG DR5958-810", price: "4500грн"},
        {name: "Nike Tiempo", description: "Шкіряні футбольні бутси Nike Tiempo Legend 9 Pro FG 002", price: "4300грн"},
        {name: "Nike Mercurial", description: "Футбольні бутси Nike Mercurial Zoom Vapor 15 Academy CR7 DQ5309-182", price: "4400грн"},]
    },
    {
    name: "ADIDAS",
    products: [{name: "Adidas Predator",description: "Бутcи футбольні Adidas Predator Edge.1 Low FG (GW1022)", price: "4600грн"},
        {name: "Adidas Copa", description: "Бутси футбольні Аdidas Copa Sense.3 FG 593 (GW3593)", price: "4150грн"},
        {name: "Аdidas X", description: "Бутси футбольні Аdidas X Speedflow.3 FG 296 (FY3296)", price: "5000грн"},]
    },
    {
    name: "PUMA",
    products: [{name: "Puma Future", description: "Бути футбольні Puma FUTURE Z 1.4 FG/AG (106989-01)", price: "4900грн"},
        {name: "Puma Ultra", description: "Бути футбольні Puma Ultra Ultimate 01 (106868-01)", price: "4600грн"},
        {name: "Puma King", description: "Бутcи футбольні PRO Puma King Hero FG 01 (105609-01)", price: "4500грн"},]
    },      
]

buildProductsList()
function buildProductsList(){
    const categories = document.getElementById('categories');
    let template= ``;
    for(let i = 0; i < data.length; i++){
        template += `
            <div class="products">
            <div class="products__name" data-list>${data[i].name}</div>
            <div class="products__items">`
                for(let j = 0; j < data[i].products.length; j++){
                    template +=`
                    <div class="product">
                    <div class="product__name" data-product>${data[i].products[j].name}</div>
                    <div class="description">
                        <div class="description__text">${data[i].products[j].description}</div>
                        <div class="price">${data[i].products[j].price}</div>
                        <button class="buy__now">Купити</button>
                    </div>
                    </div>`
                }
        template += `</div></div>`
        }
    categories.innerHTML = template;
}
const root = document.querySelectorAll('.root')[0]
const lists = document.querySelectorAll('[data-list]');
const products = document.querySelectorAll('[data-product]');
const btns = document.querySelectorAll('.buy__now');
const box = document.createElement('div');
box.innerHTML = 'Товар у корзині';
box.className = 'box'
root.append(box)

function setOpenMenuEvents(){
    for (let i = 0; i < lists.length; i++){
        lists[i].addEventListener('click', openSubmenu);
    }
    for (let i = 0; i< products.length; i++){
            products[i].addEventListener('click', openProductMenu);
        }
    for (let i = 0; i< btns.length; i++){
            btns[i].addEventListener('click', buyNow);
        }
}
setOpenMenuEvents()
function openSubmenu(){
    const opened = document.querySelectorAll('.open');
    for(let i = 0; i< opened.length;i++){
        opened[i].classList.remove('open');
    }
    const elem = event.target;
    const category =  elem.closest('.products');
    category.classList.add('open');
}
function openProductMenu(){
    const openeds = document.querySelectorAll('.open__product');
    for(let i = 0; i < openeds.length;i++){
        openeds[i].classList.remove('open__product');
    }
    const element = event.target;
    const categorys =  element.closest('.product');
    categorys.classList.add('open__product');
}
function buyNow(){
    event.target.closest('.product').classList.remove('open__product');
    event.target.closest('.products').classList.remove('open');
}
function buyClick(event){
    const boxbasket = event.target.innerText;
    if(boxbasket === 'Купити'){
        box.style.display = 'block';
    }
    setTimeout(function(){
        box.style.display = 'none';
    }, 5000);
}

btns.forEach(button => {
    button.addEventListener('click', buyClick)
})

