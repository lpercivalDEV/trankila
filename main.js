const app = () => {
  const song = document.querySelector(".song");
  const play = document.querySelector(".play");
  const outline = document.querySelector(".moving-outline circle");
  const video = document.querySelector(".vid-container iframe");

  //sounds
  const sounds = document.querySelectorAll(".sound-picker button");

  //time display
  const timeDisplay = document.querySelector(".time-display");
  const timeSelect = document.querySelectorAll(".time-select button");

  //get length of timer circle outline
  const outlineLength = outline.getTotalLength();

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

  //select different sounds
  sounds.forEach(sound => {
    sound.addEventListener("click", function(){
      // song.src = this.getAttribute("data-sound");
      video.src = this.getAttribute("data-video");
      video.play();
      // checkPlaying(song);
    })
  });


  //play sound
  play.addEventListener("click", ()=> {
    checkPlaying(song);
  })

  //keyboard access play sound
  play.addEventListener("keydown", ()=> {
    checkPlaying(song);
  })

  //stop/play sound option
  const checkPlaying = song => {
    if(song.paused){
      // song.play();
      video.play();
      play.src = "./svg/pause.svg";
    }else{
      // song.pause();
      video.pause();
      play.src = "./svg/play.svg";
    }
  }

  //calculate elapsed song time
  video.ontimeupdate = () => {
    let currentTime = video.currentTime;
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
      video.currentTime = 0;
      play.src = "./svg/play.svg";
      video.pause();
    }
    // else if(currentTime < 0){
    //   song.pause();
    //   video.pause();
    // }
  }
};

app();
