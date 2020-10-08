//Link para o Json
const MTGstandard = 'https://mtgjson.com/api/v5/Standard.json'
//fetch
let cardstock
fetch(MTGstandard).then(res => res.json()).then(XBurguer => cardstock = XBurguer.data)
//Aqui armazeno o JSON para não ter que requerir toda hora
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomcard(){
    //let cardcollection = (Object.entries(cardstock))
    let output = document.getElementById('output')
    ranCollection = Object.entries(cardstock)[0,getRandomInt(0, Object.entries(cardstock).length-1)]
    ranCard = ranCollection[1].cards[getRandomInt(0,ranCollection[1].cards.length-1)]
    stringzona=`<div class="card">
                <p>${ranCard.name}</p>
                <p>${ranCard.type}</p>
                <p>${(ranCard.text).replaceAll("{W}","<img src='img/w.png'>").replaceAll("{U}","<img src='img/u.png'>").replaceAll("{B}","<img src='img/b.png'>").replaceAll("{R}","<img src='img/r.png'").replaceAll("{G}", "<img src='img/g.png'>").replaceAll("{T}","<img src='img/t.png'>")}</p>
    `
    if(ranCard.power!=undefined){
        stringzona+=`<p class='PowTough'>${ranCard.power}/${ranCard.toughness}</p>
        </div>`
    }
    output.innerHTML+=stringzona
}