"use strict";
class takePhoto {
    constructor(cameraMode, filter) {
        this.cameraMode = cameraMode;
        this.filter = filter;
    }
}
class Youtube extends takePhoto {
    constructor(cameraMode, filter, burstMode) {
        super(cameraMode, filter);
        this.cameraMode = cameraMode;
        this.filter = filter;
        this.burstMode = burstMode;
    }
    takePhoto() {
        console.log("Taking a photo in Youtube");
    }
}
let youtube = new Youtube("portrait", "black and white", true);
youtube.takePhoto();
