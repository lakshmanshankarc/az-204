 module.exports=async function (context,req){
    context.res={
        body:{
            hello:"World",
            key:process.env.COSMOS_KEY
        }
    }
 }