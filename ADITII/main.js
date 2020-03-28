const cart = [
    {
        img: 'product_1'
        , price: 300,
        name: 'branded shoe',
        id: 1
}
    , {
        img: 'product_2'
        , price: 400,
        name: 'branded tees',
        id: 2
}
    , {
        img: 'product_3'
        , price: 500,
        name: 'branded shoe',
        id: 3
},
    {
        img: 'product_4'
        , price: 300,
        name: 'branded shoe',
        id: 4
},
    {
        img: 'product_5'
        , price: 700,
        name: 'ems women bag',
        id: 5
},
    {
        img: 'product_6'
        , price: 550,
        name: 'branded cargos',
        id: 6
}
];
var t = "";
for (var i = 0; i < cart.length; i++) {
     t += `<div class="products__our__product"> 
				<img src="img/${cart[i].img}.png" alt="${cart[i].img}">
                        <h3>${cart[i].name}</h3>
                        <div>
                            <h4>$${cart[i].price}</h4>
                            <button data-price="${cart[i].price}" data-img="${cart[i].img}" data-name="${cart[i].name}" 
                            onclick='plusInCart(this)'>buy now</button>
                        </div>
                    </div>`
}
document.querySelector('.products__our').innerHTML = t;

function noneBlock(){
    if(document.querySelector('#cart_of_products').style.display != 'none'){
        document.querySelector('#cart_of_products').style.display = 'none';
    } else {
        document.querySelector('#cart_of_products').style.display = 'block';
    }
    
}

function menu(){
    if(document.querySelector('.nav').style.display != 'none'){
        document.querySelector('.nav').style.display = 'none';
    } else {
        document.querySelector('.nav').style.display = 'grid';
    }
}

let productItem = {
    arrPrice: [],
    arrColvo: [],
    arrName: [],
    arrImg:[],
    indexItem: -1,
    massItem: [],
    summaItem: "",
    arrPriceItem: [],
    summa: 0
}

function deleteItem(a){
    let num = Number(a.dataset.num);
    productItem.arrColvo[num] -= 1;
    productItem.summa -= productItem.arrPriceItem[num]
    if(productItem.arrColvo[num] == 0){
        productItem.arrImg.splice(num,1);
        productItem.arrName.splice(num-1,1);
        productItem.arrPrice.splice(num,1);
        productItem.arrPriceItem.splice(num,1);
        productItem.arrColvo.splice(num,1);
    } else {
        productItem.arrPrice[num] -= productItem.arrPriceItem[num];
    }
    for(let i = 0; i < productItem.arrImg.length; i++){
        productItem.massItem[i] =   
                            `<div class="cart_of_products_items_item">
                                <img src="img/${productItem.arrImg[i]}.png" alt="${productItem.arrImg[i]}">
                                <h4>${productItem.arrName[i]}<br>$${productItem.arrPrice[i]}</h4>
                                <div class="cart_of_products_items_item_summa"> 
                                        ${productItem.arrColvo[i]}
                                </div>
                                 <button class="cart_of_products_items_item_delete" data-num="${i}" onclick="deleteItem(this)">
                                    &#10006;
                                </button>
                            </div>`
        productItem.summaItem += productItem.massItem[i];
    }
    document.querySelector('.cart_of_products_items').innerHTML = productItem.summaItem;
    document.querySelector('.cart__price').innerHTML = `<h4>$${productItem.summa}</h4>`;
    productItem.summaItem = "";
}


function plusInCart(a) {
    let item = a.dataset;
    if(productItem.arrImg.length == 0){
        productItem.arrName.push(item.name);
        productItem.arrImg.push(item.img);
        productItem.arrPrice[productItem.arrImg.length-1] = Number(item.price);
        productItem.arrColvo[productItem.arrImg.length-1] = 1;
        productItem.arrPriceItem[productItem.arrImg.length-1] = Number(item.price)
        productItem.summa += Number(item.price)
    } else {
        for(let i = 0; i < productItem.arrImg.length; i++){
            if(item.img == productItem.arrImg[i]){
                productItem.indexItem = i;
            } 
        }
        if(productItem.indexItem == -1){
            productItem.arrName.push(item.name);
            productItem.arrImg.push(item.img);
            productItem.arrPrice[productItem.arrImg.length-1] = Number(item.price);
            productItem.arrColvo[productItem.arrImg.length-1] = 1;
            productItem.arrPriceItem[productItem.arrImg.length-1] = Number(item.price)
            productItem.summa += Number(item.price)
        } else {
                productItem.arrPrice[productItem.indexItem] += Number(item.price);
                productItem.arrColvo[productItem.indexItem] += 1
                productItem.summa += Number(item.price)
        }
    }
    productItem.indexItem = -1;
    for(let i = 0; i < productItem.arrImg.length; i++){
        productItem.massItem[i] =   
                            `<div class="cart_of_products_items_item">
                                <img src="img/${productItem.arrImg[i]}.png" alt="${productItem.arrImg[i]}">
                                <h4>${productItem.arrName[i]}<br>$${productItem.arrPrice[i]}</h4>
                                <div class="cart_of_products_items_item_summa"> 
                                        ${productItem.arrColvo[i]}
                                </div>
                                 <button class="cart_of_products_items_item_delete" data-num="${i}" onclick="deleteItem(this)">
                                    &#10006;
                                </button>
                            </div>`
        productItem.summaItem += productItem.massItem[i]
    }
    console.log(productItem.arrPriceItem)
    document.querySelector('.cart_of_products_items').innerHTML = productItem.summaItem
    document.querySelector('.cart__price').innerHTML = `<h4>$${productItem.summa}</h4>`;
    productItem.summaItem = "";
}

