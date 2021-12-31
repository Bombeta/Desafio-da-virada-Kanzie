
// const cabecalho = document.querySelector('header');

// console.log(cabecalho);


// 

// tweetar.addEventListener('click', );

/**
 *  passo a passo
 * 
 * 1° passo: capturar o valor da textarea para criar o tweet
 * 2° passo: construir o tweet
 * 3° passo: imprimir esse tweet
 */

const textarea = document.querySelector('textarea');
const tweetar = document.querySelector('button');
const feed = document.querySelector('.conteudoPrincipal__listaTweets');

//console.log(feed);

function pegarTweet(event){
    event.preventDefault();

    const tweetTextArea = textarea.value;
    criarTweet(tweetTextArea);

}

tweetar.addEventListener('click', pegarTweet);

// CRIAR O TWEET
// TEXTO DO TWEET
// NOME
// FOTO
// NOME DO USUÁRIO
// HORARIO

function criarTweet(tweetTexto){

    let data = new Date();
    let hora = data.getHours();
    let minutos = data.getMinutes();
    
    const tweet = {
        nome: "Daniel",
        foto: "./assets/img/ProfilePic.png",
        usuario: "@danielkenzie",
        texto: tweetTexto,
        tempo: `${hora}:${minutos}`,
    }

    listarTweet(tweet);
}

function listarTweet(tweet){

    // ASSOCIACÃO VIA DESESTRUTURAÇÃO
    const {nome, foto, usuario, texto, tempo} = tweet;

    let li = document.createElement("li");
    li.classList.add("conteudoPrincipal__tweet");

    let img = document.createElement("img");
    li.classList.add("tweet__conteudo");
    img.src = foto;
    img.classList.add("tweet__fotoPerfil");

    let div = document.createElement("div");
    div.classList.add("tweet__conteudo");

    let h2 = document.createElement("h2");
    h2.innerText = nome;

    let p = document.createElement("p");
    p.innerText = texto;

    let span = document.createElement("span");
    span.innerText = `  ${usuario} - ${tempo}`

    li.appendChild(img);
    li.appendChild(div);

    div.appendChild(h2);
    div.appendChild(span);
    div.appendChild(p);

    feed.appendChild(li);
    textarea.value = "";
    //console.log(feed);
}