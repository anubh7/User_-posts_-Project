const ImageKit = require("imagekit");
const imagekit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey:"public_Umo6rE4oENhTzZgv+Hq71HSzAAM=",
    urlEndpoint:"https://ik.imagekit.io/x9zqkt5ef"
})


async function uploadfile(buffer){

    const result=await imagekit.upload({
        file:buffer.toString('base64'),
        fileName:"image.jpg"
    })
    return result

}

module.exports=uploadfile;