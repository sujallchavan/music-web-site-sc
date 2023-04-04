console.log("hello mf");
let songIndex=0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterplay');
let myprogressbar=document.getElementById('myprogressbar');
let songitems =Array.from(document.getElementsByClassName('songitem'));
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]

songitems.forEach((element1, i)=>{ 
    element1.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element1.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})

//audioElement.play();
//handal play puse click
masterplay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
       
    }
})
audioElement.addEventListener('timeupdate', ()=>{ 
    // Update Seekbar
    //console.log('timeupdate');
     progress = parseInt((audioElement.currentTime/audioElement.duration)* 100); 
    myprogressbar.value = progress;
})

myprogressbar.addEventListener( 'change' , ()=>{
 
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100;

})