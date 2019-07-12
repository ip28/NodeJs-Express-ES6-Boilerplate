import Record from '../entities/Record';
import Repository from '../repository/dataRepository';
class GetAll{
	constructor(){
		this._repository = new Repository();
	}
	async List(){
			const allData = await this._repository.getAll();
			const result = allData.map((data)=>new Record(data._dbId, data._name));
			return result;
	}
}

export default GetAll;
