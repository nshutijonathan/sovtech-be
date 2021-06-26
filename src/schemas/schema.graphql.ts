
const{ gql } =require ('apollo-server');
const schema = gql`
  type Peaple {
    name:String,
    height:Int,
    mass:Int,
    hair_color:String,
    skin_color:String,
    eye_color:String,
    birth_year:String,
    gender:String,
    homeworld:String,
    films:[String],
    species:[String],
    vehicles:[String],
    starships:[String],
    created:String,
    edited:String,
    url:String
  }
  type City{
    name:String,
    location:String,
    population:Int,
  }
  type Query {
    peaples: [Peaple] # returns an array of Peaple
    singlePerson:[City]
    cities:[City]# return an array of cities
  }
`;

module.exports=schema;