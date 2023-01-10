console.log("Test video script 6");

document.addEventListener(
  "keydown",
  (event) => {
    if (event.ctrlKey) {
        if (event.altKey) {
            if (event.key == "l" || event.key == "L") {
                console.log("Ctrl + L pressed");
                let videos = document.getElementsByTagName("video");
                for (var i = 0; i < videos.length; i++) {
                    videos[i].playbackRate = 2.5;
                    console.log(videos[i]);
                }
            }
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
