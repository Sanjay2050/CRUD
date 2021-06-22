const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        //mangodb connection string
        const con=await mongoose.connect(process.env.MoNGO_URI,{
            
            useNewUrlParser:true,
            useUnifiesTopology:true,
            UseFindAndModify:false,
            useCreateIndex:true

        })
            console.log('MongoDB Conneted:${con.connection.host}');

    }catch(err)
    {
console.log(err);
process.exit(1);

    }
}

module.exports= connectDB