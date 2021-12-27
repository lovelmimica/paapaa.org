let memoryImages = document.querySelectorAll(".memories-section img");
let memoryModalWrapper = document.querySelector(".memory-image-modal-wrapper");

memoryImages.forEach(img => {
    img.addEventListener("click", (e) => {
        //e.stopPropagation();
        let src = 
        console.log("Dodajem klasu active");
        memoryModalWrapper.style.display = 'flex';
        memoryModalWrapper.classList.add("active");
        // memoryModalWrapper.scrollIntoView(true);
    });
});

memoryModalWrapper.addEventListener("click", () =>{
    memoryModalWrapper.style.display = 'none';
    memoryModalWrapper.classList.remove("active");
});

let audioPlayer = document.querySelector(".background-audio-wrapper audio");
audioPlayer.volume = 0.4;
let audioSources = ["assets/audio/israel-mawueta.mp3", "assets/audio/jim-reeves.mp3"];
//audioPlayer.play();
let i = 0;

audioPlayer.play();
audioPlayer.onended = () => {
    i = i == 0 ? 1 : 0;
    audioPlayer.src = audioSources[i];
    audioPlayer.load();
    audioPlayer.play();
};

let ctrlNext = document.querySelector(".background-audio-wrapper .ctrl-next");
ctrlNext.addEventListener('click', () => {
    i = i == 0 ? 1 : 0;
    audioPlayer.src = audioSources[i];
    audioPlayer.load();
    audioPlayer.play();
});