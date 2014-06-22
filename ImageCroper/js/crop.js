if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
  alert('The File APIs are not fully supported in this browser.');
} else {
    function createImageCropper( input , workCanvas, targetCanvas  ){
        return new ImageCropper( input , workCanvas, targetCanvas );
    }

    function ImageCropper( input , workCanvas, targetCanvas ){
        this.input = input;
        this.workCanvas = workCanvas;
        this.targetCanvas = targetCanvas;
        this.x = 0;
        this.y = 0;
        this.image = new Image();
        this.aspectRatio = new AspectRatio("9:6");
        var cr = this;
        input.addEventListener("change", function(){
            getImage( cr );
        }, false);
        this.addInputListener = addInputListener;
        this.downloadCroppedImage = function(){
            window.location.href = this.targetCanvas.toDataURL();
        }
    }
    function getImage(  cropper ){
        file = cropper.input.files[0];
        var Reader = new FileReader();
        Reader.onload = (function(theFile , cropper) {
            return function(e) {
               var url = e.target.result;
                updateImageCropper( cropper, url );
            };
        })( file , cropper );
        x =  cropper;
        Reader.readAsDataURL( file );
    }
    function updateImageCropper( cropper , url){
        cropper.image.src = url;
        cropper.workCanvas.width = cropper.image.width;
        cropper.workCanvas.height = cropper.image.height;
        cropper.workCanvas.getContext("2d").drawImage( cropper.image, 0 , 0 );
        updateOutput(cropper);
    }
    function AspectRatio( ar ){
        console.log(ar);
        var WH = ar.split(":");
        this.width = WH[0];
        this.height = height = WH[1];
    }
    function updateCropSize( cropper, w , h ){
        cropper.targetCanvas.width = w;
        cropper.targetCanvas.height = h;
    }
    function updateAspectRatio( cropper , ar ){
        var AR = new AspectRatio( ar );
        cropper.aspectRatio = AR;
    }
    function updateOutput( cropper ){
        var w = cropper.targetCanvas.width;
        var h = cropper.targetCanvas.height;
        var x = cropper.x;
        var y = cropper.y;
        var c = cropper.targetCanvas.getContext("2d");
        //img,sx,sy,swidth,sheight,x,y,width,height)
        c.drawImage( cropper.image , x , y , w ,h, 0 , 0 , w, h);
    }
    function addInputListener( ar , scale , x , y ){
        var AR = this.aspectRatio;
        var self = this;
        ar.addEventListener("change", function(){
            var ar = this.value;
            updateAspectRatio( self, ar  ); 
            var AR = self.aspectRatio;
            var w = AR.width * scale.value;
            var h = AR.height * scale.value;
            updateCropSize( self , w, h );
            updateOutput( self );
        },false);
        scale.addEventListener("change", function(){
            var AR = self.aspectRatio;
            var w = AR.width * scale.value;
            var h = AR.height * scale.value;
            updateCropSize( self , w, h );
            updateOutput( self ); 
        },false);
        x.addEventListener("change", function(){
           self.x = x.value;
            updateOutput( self );
        },false);
        y.addEventListener("change", function(){
            self.y = y.value;
            updateOutput( self );
        },false);
    }

}