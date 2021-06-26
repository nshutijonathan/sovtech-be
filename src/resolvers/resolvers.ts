
const axios =require('axios');
let peapleData:any[]=[];
const getPeapleData=async()=>{
    const {data}=await axios.get('https://swapi.dev/api/people/');
    peapleData=[...data.results];
    return peapleData
}

const peapleDataSet=getPeapleData();
const cityData=[{"name":"kigali","location":"center","population":2222},{"name":"huye","location":"left" ,"population":44422}];
const serverResolvers = {
    Query: {
      peaples() {
        return peapleDataSet;
      }, 
      singlePerson(){
        return cityData.filter((value)=>{
          value.name='kigali'
        })
      },
      cities(){
          return cityData
      }
    }
  };
  
module.exports=serverResolvers;