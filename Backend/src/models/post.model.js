const mongoose=require('mongoose');

//hmne yaha pe mongoose ka schema create kiya hai jisme hamne post ke liye image aur caption ka field define kiya hai. Yaha pe image aur caption dono string type ke hai. Agar aapko aur fields add karna hai to aap yaha pe add kar sakte ho.
const postSchema=new mongoose.Schema({
    image:String,
    caption:String,
})

const userSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String,
    
})

const postModel=mongoose.model('post',postSchema); //string ke andr jo bhi name hoga wo collection ka name hoga. Yaha pe 'post' collection ka name hai. Agar aapko collection ka name change karna hai to aap yaha pe change kar sakte ho.

module.exports=postModel;