const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://dbUser:dbUser123@cluster0.ocptv.mongodb.net/dbPets?retryWrites=true&w=majority");


const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));