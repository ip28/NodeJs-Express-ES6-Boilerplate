import allData from './sampleData.json';
class dataRepository{
    async getAll(){
        return allData;
    }

    async getDataById(id){
        const dataItem = allData.find((item)=>item._dbId === id);
        return dataItem;
    }
}

export default dataRepository;