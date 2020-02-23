const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  //sounds
  const sounds = document.querySelectorAll(".sound-picker button");

  //time display
  const timeDisplay = document.querySelector(".time-display");

  //get length of timer circle outline
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);

  //duration
  let duration = 600;

  outline.style.strokeDasharray = outlineLength;
  outline.style.strokeDashoffset = outlineLength;

  //play sound
  play.addEventListener("click", ()=> {
    checkPlaying(song);
  })

  //stop/play sound option
  const checkPlaying = song => {
    if(song.paused){
      song.play();
      video.play();
      play.src = "./svg/pause.svg";
    }else{
      song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  }

  //calculate elapsed song time
  song.ontimeupdate = () => {
    let currentTime = song.currentTime;
    let elapsed = duration - currentTime;
    let seconds = Math.floor(elapsed % 60);
    let minutes = Math.floor(elapsed / 60);

    //animate timer circle
    let progress = outlineLength - (currentTime / duration) * outlineLength;
    outline.style.strokeDashoffset = progress;
  }
};

app();
