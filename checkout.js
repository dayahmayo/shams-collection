const product = [
     {
        id: 0,
        image: 'img/sc8.jpg',
        title: 'Chiffon Dark Grey',
        price: 10,
    },
    {
        id: 1,
        image: 'img/sc5.jpg',
        title: 'Chiffon Pearl White',
        price: 10,
    },
    {
        id: 2,
        image: 'img/sc9.jpg',
        title: 'Chiffon Toffee',
        price: 10,
    },
    {
        id: 3,
        image: 'img/sc6.jpg',
        title: 'Chiffon Emerald Green',
        price: 10,
    },
    {
        id: 4,
        image: 'img/sc7.jpg',
        title: 'Chiffon Smoke Grey',
        price: 10,
    }, 
    {
        id: 5,
        image: 'img/sc4.jpg',
        title: 'Chiffon Coffee Cream',
        price: 10,
    },
    {
        id: 6,
        image: 'img/sc3.jpg',
        title: 'Chiffon Dark Chocolate',
        price: 10,
    },
    {
        id: 7,
        image: 'img/sc2.jpg',
        title: 'Chiffon Dark Blue',
        price: 10,
    },
    {
        id: 8,
        image: 'img/bawal1.jpg',
        title: 'Bawal Grey',
        price: 10,
    },
    {
        id: 9,
        image: 'img/bawal3.jpg',
        title: 'Bawal Light Pink',
        price: 10,
    },
    {
        id: 10,
        image: 'img/bawal5.jpg',
        title: 'Bawal Light Purple',
        price: 10,
    },
    {
        id: 11,
        image: 'img/bawal2.jpg',
        title: 'Bawal Wheat',
        price: 10,
    },
    {
        id: 12,
        image: 'img/bawal4.jpg',
        title: 'Bawal Light Mint',
        price: 10,
    },
    {
        id: 13,
        image: 'img/bawal6.jpg',
        title: 'Bawal Skyblue',
        price: 10,
    },
    {
        id: 14,
        image: 'img/sp1.jpg',
        title: 'Shawl Dark Green',
        price: 10,
    },
    {
        id: 15,
        image: 'img/sp2.jpg',
        title: 'Shawl Dark Purple',
        price: 10,
    },
    {
        id: 16,
        image: 'img/sp3.jpg',
        title: 'Shawl Dark Chocolate',
        price: 10,
    },
    {
        id: 17,
        image: 'img/sp4.jpg',
        title: 'Shawl Light Chocolate',
        price: 10,
    },
    {
        id: 18,
        image: 'img/sp5.jpg',
        title: 'Shawl Light Grey',
        price: 10,
    },
    {
        id: 19,
        image: 'img/sc1.jpg',
        title: 'Shawl Black',
        price: 10,
    },
    {
        id: 20,
        image: 'img/bawal7.jpg',
        title: 'Bawal Dark Blue',
        price: 10,
    },
    {
        id: 21,
        image: 'img/hs1.jpg',
        title: 'Handsock',
        price: 10,
    }

];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>RM ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "RM "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>RM ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}
