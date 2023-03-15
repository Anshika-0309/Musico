//Initialize variables
let songIndex=0;
let audioElement=new Audio('/songs/song7.mp3');
let playButton=document.getElementById('playButton');
let progressBar=document.getElementById('progressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName("item"));

//Adding songs
let songs=[
    {songName: "Until I Found You", filepath: "/songs/song1.mp3", coverPath: "/covers/item1.jpeg"},
    {songName: 'Thousand Years', filepath: "/songs/song2.mp3", coverPath: "/covers/item2.jpg"},
    {songName: 'Let Her Go', filepath: "/songs/song3.mp3", coverPath: "/covers/item3.jpg"},
    {songName: 'Photograph', filepath: "/songs/song4.mp3", coverPath: "/covers/item4.jpeg"},
    {songName: 'Love Story - Taylor Swift', filepath: "/songs/song5.mp3", coverPath: "/covers/item5.webp"},
    {songName: 'Make You Mine', filepath: "/songs/song6.mp3", coverPath: "/covers/item6.jpeg"},
    {songName: "It's You", filepath: "/songs/song7.mp3", coverPath: "/covers/item7.jpeg"},
    {songName: 'Night Changes', filepath: "/songs/song8.mp3", coverPath: "/covers/item8.jpg"}
]

//Adding Song Information
songItems.forEach((element, i)=>{
    // console.log(element);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML=songs[i].songName;
    // element.getElementsByClassName("songDuration")[0].innerHTML=songs[i].duration;
})

//Listening to events
playButton.addEventListener('click', ()=>{
    if (audioElement.paused || audioElement.currentTime<=0)
    {
        audioElement.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else
    {
        audioElement.pause();
        playButton.classList.remove('fa-circle-pause');
        playButton.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    progressBar.value=progress;
})

progressBar.addEventListener('change', ()=>{
    audioElement.currentTime=progressBar.value*audioElement.duration/100;
})

// const makeAllPlays=()=>{
//     Array.from(document.getElementsByClassName("songIcon")).forEach((element)=>{
//         element.classList.remove('fa-circle-pause');
//         element.classList.add('fa-circle-play');
//     })
// }
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songIcon')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName("songIcon")).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src=`/songs/song${index+1}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        playButton.classList.remove('fa-circle-play');
        playButton.classList.add('fa-circle-pause');
    })
})