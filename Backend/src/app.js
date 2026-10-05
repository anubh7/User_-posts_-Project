//iss file me hamne server ko start karne ke liye express ka instance create kiya hai aur usko export kiya hai taki ham server ko start kar sake.
const express = require('express');
const multer=require('multer');
const uploadfile=require('./services/storage.service')
const postModel=require('./models/post.model')
const cors=require('cors');


const app = express();
app.use(cors()); //means ki hamne cors middleware ko use kiya hai taki hamare server me jo bhi request aayegi usko allow kiya ja sake. Agar aapko cors ko disable karna hai to aap yaha pe cors() ko remove kar sakte ho.
app.use(express.json()); //means ki hamne express.json() middleware ko use kiya hai taki hamare server me jo json data hai usko parse kiya ja sake aur usko req.body me access kiya ja sake (parse krne ka matlb ki agar client se json data aata hai to usko javascript object me convert kar diya jaye taki ham usko easily access kar sake aur use kar sake).

//yeh middleware sirf raw json data ko parse karne ke liye use hota hai. Agar aapko urlencoded data ko parse karna hai to aapko express.urlencoded() middleware ka use karna hoga.
//app.use(express.json()); //means ki hamne express.json() middleware ko use kiya hai taki hamare server me jo json data hai usko parse kiya ja sake aur usko req.body me access kiya ja sake (parse krne ka matlb ki agar client se json data aata hai to usko javascript object me convert kar diya jaye taki ham usko easily access kar sake aur use kar sa

const upload=multer({storage:multer.memoryStorage()}) //means ki hamne multer ka instance create kiya hai aur usme storage option ko memoryStorage() set kiya hai taki hamare server me jo bhi file upload hoti hai wo memory me store ho jaye aur usko req.file me access kiya ja sake. Agar aapko file ko disk me store karna hai to aapko multer.diskStorage() ka use karna hoga.

//api creation starts

//post api create ki jiski help se ham post create karenge aur usme image aur caption ka data send karenge. Yaha pe upload.single("image") ka use kiya gaya hai taki hamare server me jo bhi image file upload hoti hai wo req.file me access ho jaye. Yaha pe "image" ka matlb hai ki client se jo bhi image file send ki jayegi uska name "image" hoga. Agar aapko image file ka name change karna hai to aap yaha pe change kar sakte ho.

app.post('/create-posts',upload.single("image"), async(req,res)=>{
    const data=req.body;
    console.log(data);
    console.log(req.file);
    const result=await uploadfile(req.file.buffer); //yeh wo function hai jo ki storage.service.js me define kiya gaya hai aur usko import kiya gaya hai taki ham file ko upload kar sake. req.file.buffer me wo file ka buffer hota hai jo ki multer ke through upload hota hai.
    console.log(result);

    const post=await postModel.create({
        image:result.url,
        caption:req.body.caption
    })
    return res.status(201).json({
        message:"Post received", post:post
    });
})

//post method se jo bhi post send kiya gya hoga vo isme ham dekh skte hai 
app.get('/get-posts',async(req,res)=>{
    const posts=await postModel.find();
    return res.status(200).json({
        message:"Posts fetched successfully",
        posts:posts
    })
})
module.exports = app;
