const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://MERNgofood:gofoodpassword@cluster0.d4bgsz0.mongodb.net/merngofood?retryWrites=true&w=majority';

const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection("food_items");
        fetched_data.find({}).toArray(async function(err,data){

            const foodCategory= await mongoose.connection.db.collection("food_category");
            foodCategory.find({}).toArray(function(err,catData){
                if(err) console.log(err);
                else {
                        global.food_items=data;
                        global.foodCategory=catData;
                        
                    }
            })

            // if(err) console.log(err);
            // else {
            //     global.food_items=data;
                
            // }
        })
    } catch (error) {
        console.error('Error connecting to MongoDB:', error.message);
    }
};

module.exports = mongoDB;

