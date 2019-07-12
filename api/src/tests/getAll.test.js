/* eslint-disable no-undef */
//imports for test
import "@babel/polyfill";
import getAll from '../services/getAll';
import Repository from '../repository/dataRepository';
import testData from './sampleTestData.json';
import Record from '../entities/Record';
jest.mock('../repository/dataRepository');
// mock data is used for testing 
beforeEach(()=>{
	Repository.mockClear();
	Repository.mockImplementation(()=>({
			getAll: async() => testData
		}));
});
describe('Get All Records Test', () => {
	it('Test Get All Records where data is returned', async () => {
		const expectedResult = testData.map((data)=>new Record(data._dbId, data._name));
		const getAllRecords = new getAll();
		const response = await getAllRecords.List();
		expect(response).not.toBeNull();
		expect(response).toEqual(expectedResult);
	});

});