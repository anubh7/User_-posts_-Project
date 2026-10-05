require('dotenv').config(); // yeh line environment variables ko load karne ke liye use hoti hai. Isme dotenv package ka use kiya gaya hai jo ki .env file me defined variables ko load karta hai taki ham unko easily access kar sake.
const app=require('./src/app');
const connectDB=require('./src/db/db');

connectDB(); // yeh function database ko connect karne ke liye use hota hai. Isme connectDB() function call kiya gaya hai jo ki database ko connect karega.

//listen mtlb hai hmne server ko start kar diya hai aur port number 3000 pe listen kar raha hai. Yaha pe 3000 port number hai jisse ki server ko identify kiya ja sake. Agar aapko server ko kisi aur port pe run karna hai to aap yaha pe port number change kar sakte ho. 
app.listen(3000,()=>{
    console.log("server is running on port 3000")
})