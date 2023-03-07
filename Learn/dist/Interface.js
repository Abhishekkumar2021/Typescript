"use strict";
class Instagram {
    constructor(cameraMode, filter, burstMode) {
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
