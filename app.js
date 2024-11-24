const express=require('express');
const QRcode=require('qrcode');
const app=express();
const port=8080;

app.get('/qrcode',(req,res)=>{
const url='https://www.example.com';
QRcode.toDataURL(url,(err,qrCodeUrl)=>{
    if (err){
res.status(500).send('internet err');
    }else{
        res.send(`
            <!DOCTYPE html>
<html >
<head>
    
<title> QR Generator</title>
</head>
<body>
    <h1>QR code Generator</h1>
    <img src="${qrCodeUrl}" alt="QR code">
    <p>scan the QR code to visit the website</p>
</body>
</html> `);
    }
});
});

app.listen(port,()=>{
    console.log(`listening on port ${port}`);
    
});