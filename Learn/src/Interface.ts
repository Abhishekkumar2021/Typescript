interface TakePhoto {
    cameraMode: string;
    takePhoto(): void;
    filter?: string;
    burstMode?: boolean;
}

class Instagram implements TakePhoto {
    cameraMode: string;
    filter: string;
    burstMode: boolean;
    constructor(cameraMode: string, filter: string, burstMode: boolean) {
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    takePhoto() {
        console.log("Taking a photo");
    }
}

let instagram = new Instagram("portrait", "black and white", true);
instagram.takePhoto();