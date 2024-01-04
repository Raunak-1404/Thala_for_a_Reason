function validate () {
    let input = document.getElementById("input").value;
    if(input.length == 7) {
        // let video = document.createElement("video");
        // video.src.innerHTML = "./98cbb274.mp4";
        let button = document.getElementById('button');
        button.parentNode.removeChild(button);

        let heading1 = document.getElementById("heading");
        heading1.parentNode.removeChild(heading1);
        
        let text1 = document.getElementById("text1");
        text1.innerHTML = "Congratulation you're a Thala ❤️"

        
        let input = document.getElementById("input");
        input.parentNode.removeChild(input);

        let box = document.getElementById('box');
        let meme = document.getElementById('meme');
        let video = document.createElement('video');
        video.src = './98cbb274.mp4';
        video.autoplay = true;


        
        meme.appendChild(video);

        video.style.alignContent = "center";
        video.style.width = "100%";
        video.style.height = "100%";

        box.style.width = "500px";
        box.style.height = '800px';

        text1.style.textAlign = "center";
        text1.style.paddingLeft = "24px";




        video.addEventListener('ended', () => {
            video.parentNode.removeChild(video);
            let text = document.getElementById("meme_text");
            text.innerHTML = ""
        })

    } else {
        
        
        let image = document.createElement('img');
        let meme = document.getElementById('meme');
        image.src = './_9c3e2f08-5b8d-11ea-af9c-120932ee3561.avif'
        let button = document.getElementById('button');
        button.parentNode.removeChild(button);

        let heading1 = document.getElementById("heading");
        heading1.parentNode.removeChild(heading1);
        
        let text1 = document.getElementById("text1");
        text1.parentNode.removeChild(text1);

        
        let input = document.getElementById("input");
        input.parentNode.removeChild(input);

        meme.appendChild(image);
        image.style.marginTop = '30px';
        image.style.width = '700px'
    }
}