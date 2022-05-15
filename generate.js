let btn = document.getElementById('generate-btn');

btn.addEventListener('click',()=> {
    let qrContentDiv = document.getElementById('qr-content');
    let content = document.getElementById('inputText').value;
    let qrcode = new QRCode(qrContentDiv,content)
})