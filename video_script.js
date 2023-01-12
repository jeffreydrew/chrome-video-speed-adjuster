console.log("Video Speed Adjuster Running...");

document.addEventListener(
    "keydown",
    (event) => {
        if (event.key == "d" || event.key == "D"){
          console.log("D pressed, video speed + 0.5");
          let videos = document.getElementsByTagName("video");
          for (var i = 0; i < videos.length; i++) {
            if (videos[i].playbackRate < 16){
              videos[i].playbackRate += 0.5;
            }
            else{
              videos[i].playbackRate += 0;
            }
            console.log(videos[i] + ": " + videos[i].playbackRate);
          }
        }
        if (event.key == "s" || event.key == "S") {
          console.log("S pressed, video speed - 0.5");
          let videos = document.getElementsByTagName("video");
          for (var i = 0; i < videos.length; i++) {
            if (videos[i].playbackRate != 0) {
              videos[i].playbackRate -= 0.5;
            } else {
              videos[i].playbackRate -= 0;
            }
            console.log(videos[i] + ": " + videos[i].playbackRate);
          }
        }
        if (event.key == "r" || event.key == "R") {
          console.log("R pressed, video speed reset");
          let videos = document.getElementsByTagName("video");
          for (var i = 0; i < videos.length; i++) {
            videos[i].playbackRate = 1;
            console.log(videos[i] + ": " + videos[i].playbackRate);
          }
        }
    }, false);

// let videos = document.getElementsByTagName("video");
// for (var i = 0; i < videos.length; i++) {
//   videos[i].playbackRate = 2.5;
//   console.log(videos[i]);
// }

// video.playbackRate = 2.5;
// console.log(video);
