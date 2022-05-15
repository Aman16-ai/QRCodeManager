
let scanBtn = document.getElementById('scan-btn');
scanBtn.addEventListener('click', () => {
  document.getElementById('qr-content').innerHTML="";
  let videoElement = document.createElement('video')
  videoElement.setAttribute('id', 'preview')
  videoElement.style = "border:2px solid red"
  videoElement.style = "width:500px"
  document.getElementById('qr-content').appendChild(videoElement)
  let scanner = new Instascan.Scanner({ video: document.getElementById('preview') });
  scanner.addListener('scan', function (content) {
    alert(content)
    scanner.stop();
    document.getElementById('qr-content').removeChild(videoElement)
  });
  Instascan.Camera.getCameras().then(function (cameras) {
    if (cameras.length > 0) {
      scanner.start(cameras[0]);
    } else {
      alert("No camera found")
    }
  }).catch(function (e) {
    console.error(e);
  });
})