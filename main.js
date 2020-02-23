const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container video");

  //sounds
  const sounds = document.querySelectorAll(".sound-picker button");

  //time display
  const timeDisplay = document.querySelector(".time-display");
  const timeSelect = document.querySelectorAll(".time-select button");

  //get length of timer circle outline
  const outlineLength = outline.getTotalLength();
  console.log(outlineLength);

  //default duration
  let duration = 600;

  //select duration
  timeSelect.forEach(option => {
    option.addEventListener("click", function(){
      duration = this.getAttribute("data-time");
      timeDisplay.textContent = `${Math.floor(duration/60)}:${Math.floor(duration%60)}`;
    })
  })

  //timer circle outline and offset circle
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

    //animate text
    timeDisplay.textContent = `${minutes}:${seconds}`;

    if(currentTime >= duration){
      song.pause();
      song.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
  }
};

app();
