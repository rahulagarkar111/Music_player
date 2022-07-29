
let songIndex=0;
let audioElement=new Audio('bappa.mp3');
let masterPlay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let gif= document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));


let songs=[
    {songname:"Vande mataram- Sonu Nigam", filepath:"songs/1.mp3" , coverpath:"covers/1.jpg"},
    {songname:"Darkhaast-Shivaay_(Arijit_Singh)", filepath:"songs/2.mp3" , coverpath:"covers/2.jpg"},
    {songname:"Barish- Tanishk Bagchi", filepath:"songs/3.mp3" , coverpath:"covers/3.jpg"},
    {songname:"Ae dil hai mushkil- Arijit", filepath:"songs/4.mp3" , coverpath:"covers/4.jpg"},
    {songname:"Besabriyaan- Armaan Malik", filepath:"songs/5.mp3" , coverpath:"covers/5.jpg"},
    {songname:"Deewani Mastani- Shreya Ghoshal", filepath:"songs/6.mp3" , coverpath:"covers/6.jpg"},
    {songname:"Dil diya gallan- Atif Aslam", filepath:"songs/7.mp3" , coverpath:"covers/7.jpg"},
    {songname:"Bappa-Vishal Dadlani", filepath:"songs/8.mp3" , coverpath:"covers/8.jpg"},
    {songname:"Raazi", filepath:"songs/9.mp3" , coverpath:"covers/9.jpg"},

]
    songItems.forEach((element,i) => {
        
        element.getElementsByTagName("img")[0].src=songs[i].coverpath;
        element.getElementsByClassName("soname")[0].innerHTML=songs[i].songname;
    
    });




masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate' ,()=>{
   

    let progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
  
    myprogressbar.value=progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=(myprogressbar.value*audioElement.duration)/100;
})

const makeallplay = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}


Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        songIndex=parseInt(e.target.id);
        audioElement.src=`songs/${songIndex}.mp3`;

        if(e.target.classList.contains('fa-circle-play')){
        makeallplay();
       e.target.classList.remove('fa-circle-play');
       e.target.classList.add('fa-circle-pause');
       masterSongName.innerText = songs[songIndex-1].songname;
       audioElement.currentTime=0;
       audioElement.play();
       gif.style.opacity = 1;
       masterPlay.classList.remove('fa-circle-play');
       masterPlay.classList.add('fa-circle-pause');
    }

    else{
  
        audioElement.pause();
        e.target.classList.remove('fa-circle-pause');
        e.target.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
    })
})


document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    masterSongName.innerText = songs[songIndex].songname;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})



