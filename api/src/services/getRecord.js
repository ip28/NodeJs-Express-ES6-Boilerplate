import Record from '../entities/Record';
import Repository from '../repository/dataRepository';

class getRecord{
	constructor(){
		this._repository = new Repository();
	}
	async SearchById(id){
			const dataItem = await this._repository.getDataById(id);
			const record = dataItem? new Record(dataItem._dbId, dataItem._name):null;
			return record;
	}
}

export default getRecord;