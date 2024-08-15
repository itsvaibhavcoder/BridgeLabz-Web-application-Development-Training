abstract class TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void
    getReelTime(): number{
        return 10
    }
}

class FaceBook extends TakePhoto{
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst : number
    ){
        super(cameraMode, filter)
    }

    getSepia(): void {
        console.log("Sepia");
    }
}

const fb = new FaceBook("test", "Test", 6)
fb.getReelTime()