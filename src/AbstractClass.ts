abstract class takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
    ){}
    abstract takePhoto(): void;
}

class Youtube extends takePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burstMode: boolean,
    ){
        super(cameraMode, filter);
    }
    takePhoto(){
        console.log("Taking a photo in Youtube");
    }
}

let youtube = new Youtube("portrait", "black and white", true);
youtube.takePhoto();