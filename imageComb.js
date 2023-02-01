//get the image
var img1 = new Image();

var img2 = new Image();

var img3 = new Image();
img3.src = "./images/SHG.png";

var image_input = document.querySelector("#imageAccept");
var imgList = [];
var img1List = ["https://i.postimg.cc/DmRBRXWJ/image1.png", "https://i.postimg.cc/v1DnQ0kQ/image10.jpg", "https://i.postimg.cc/N9HrX5QS/image2.jpg", "https://i.postimg.cc/6yRYKpRH/image3.jpg", "https://i.postimg.cc/njCGPFpG/image4.jpg", "https://i.postimg.cc/4HcbXWKK/image5.jpg", "https://i.postimg.cc/H8189dxx/image6.jpg", "https://i.postimg.cc/WtZMFf3z/image7.jpg", "https://i.postimg.cc/XBKG2mGg/image9.jpg"]
var dataURL = canvas.toDataURL("image/jpg");


image_input.addEventListener("change", (e)=>{
  
  if(window.File && window.FileReader && window.FileList && window.Blob){
  var files = e.target.files;
  
    for(let i =0; i<files.length; i++){
      if(!files[i].type.match("image")) continue;
      const picReader = new FileReader();
      picReader.addEventListener("load", function(event){
        const picFile = event.target;
        imgList[i] = picFile.result;
        img1.src = imgList[0];
        img2.src = imgList[1];
        var num = Math.floor(Math.random() * (img1List.length));
        if(files.length==1){
          img2.src = img1.src;
          img1.src = img1List[num];
         }
         console.log(img2, img1);
      })
      picReader.readAsDataURL(files[i]);
    }
}

})




//make the image
function rizz() {
  var canvas = document.getElementById("canvas");
  var canvasAlt = document.getElementById("canvasAlt")
  canvas.width = 600;
  canvas.height = 512;
  canvasAlt.width= 600;
  canvasAlt.height= 512; 
  var ctx = canvas.getContext("2d");
  var ctx2= canvasAlt.getContext("2d");
  ctx.drawImage(img1, 0, 0, img1.width, img1.height, 0, img3.height, canvas.width / 2, canvas.height - img3.height);
  ctx.drawImage(img2, 0, 0, img2.width, img2.height, canvas.width / 2, img3.height, canvas.width / 2, canvas.height - img3.height);
  ctx.drawImage(img3, 0, 0, img3.width, img3.height, 0, 0, canvas.width, img3.height);  
  ctx2.drawImage(img2, 0, 0, img2.width, img2.height, 0, img3.height, canvas.width / 2, canvas.height - img3.height);
  ctx2.drawImage(img1, 0, 0, img1.width, img1.height, canvas.width / 2, img3.height, canvas.width / 2, canvas.height - img3.height);
  ctx2.drawImage(img3, 0, 0, img3.width, img3.height, 0, 0, canvas.width, img3.height);  

  canvas.classList.add("created");
  canvasAlt.classList.add("created");
  document.body.appendChild(canvas);
  document.body.appendChild(canvasAlt);

}

// download the image
function downloader(){
  var canvas = document.getElementById("canvas");

  html2canvas(canvas).then(function(canvas) {
    // Convert the canvas to a data URL
    var dataURL = canvas.toDataURL();
  
    // Create a download link and trigger the download
    var link = document.createElement("a");
    link.download = "Sticker.png";
    link.href = dataURL;
    link.click();
  });
  
}
document.getElementById("canvas").addEventListener("click", function() {
downloader();
});

