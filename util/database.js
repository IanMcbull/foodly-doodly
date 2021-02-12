const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://foodly_doodly:foodly_doodly@cluster0.cxhcy.mongodb.net/Foodly_Doodly_DB?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
    if(err){
    return console.log('something went wrong, please check your connection')
    }
  const response = client.db("Foodly_Doodly_DB").collection("Recipes").findOne({Name:'Spaghetti'},((err,data)=>{
      if(err){
          console.log(err)
      }else{
          console.log(data)
      }
  }));

  // perform actions on the collection object
  client.close();
});

