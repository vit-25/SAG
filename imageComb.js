//get the image
var img1 = new Image();

var img2 = new Image();

var img3 = new Image();
img3.src = "./images/SHG.png";

var image_input = document.querySelector("#imageAccept");
var imgList = [];
var img1List = ["./images/image1.jpg", "./images/image2.jpg", "./images/image3.jpg", "./images/image4.jpg", "./images/image5.jpg", "./images/image6.jpg", "./images/image7.jpg", "./images/image8.jpg", "./images/image9.jpg", "./images/image10.jpg"]


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
        var num = Math.floor(Math.random() * (img1List.length+1));
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
  var width = Math.min(img1.width, img2.width);
  var height = Math.min(img1.height, img2.height);
  canvas.width = width * 2;
  canvas.height = height + img3.height;
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img1, (img1.width - width) / 2, (img1.height - height) / 2, width, height, 0, img3.height, width, height);
  ctx.drawImage(img2, (img2.width - width) / 2, (img2.height - height) / 2, width, height, width, img3.height, width, height);
  ctx.drawImage(img3, 0, 0, img3.width, img3.height, 0, 0, canvas.width, img3.height);
  canvas.classList.add("created");
  document.body.appendChild(canvas);

}

// download the image
document.getElementById("canvas").addEventListener("click", function() {
  var image = document.getElementsByClassName("created");
  var link = document.createElement("a");
  link.download = "image.png";
  link.href = image.src;
  link.click();
});