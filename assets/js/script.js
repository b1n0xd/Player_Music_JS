let musicas = [
    {titulo:'Midnight Story', artista:'Matt Oakley', src:'./musicas/Matt Oakley.mp3', img:'./imagens/Matt Oakley - Midnight Story.jpeg'},
    {titulo:'Native Ocean', artista:'One Man Book', src:'./musicas/One Man Book.mp3', img:'./imagens/nativeocean.jpeg'},
    {titulo:'Girl', artista:'Maarten Schellekens', src:'musicas/Maarten Schellekens.mp3', img:'imagens/maartenschellekens.jpeg'},
];
// Variáveis 
let musica = document.querySelector('audio');
let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.nomeMusica');
let nomeArtista = document.querySelector('.nomeArtista');
renderizarMusica(indexMusica);
//Eventos
duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));
document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.botao-pause').addEventListener('click', pausarMusica);
musica.addEventListener('timeupdate', atualizarBarra);
//Funcao anonima
document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    if (indexMusica < 0){
        indexMusica = 2;
    }
    pausarMusica();
    renderizarMusica(indexMusica);
});
document.querySelector('.proximo').addEventListener('click', () => {
    indexMusica++;
    if (indexMusica > 2){
        indexMusica = 0;
    }
    pausarMusica();
    renderizarMusica(indexMusica);
});



//Funcoes
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
}

function tocarMusica(){
        musica.play();
        document.querySelector('.botao-pause').style.display = 'block';
        document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}
function atualizarBarra(){
    var barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
    campoSegundos = '0' + campoSegundos;
    }
    return campoMinutos+ ':' +campoSegundos;
}

