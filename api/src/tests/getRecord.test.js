/* eslint-disable no-undef */
//imports for test
import "@babel/polyfill";
import getRecord from '../services/getRecord';
import Repository from '../repository/dataRepository';
import testData from './sampleTestData.json';
import Record from '../entities/Record';
jest.mock('../repository/dataRepository');
// mock data is used for testing 
const _testId = 1;
const expectedDbResult = testData.find((data)=> data._dbId === _testId);
beforeEach(()=>{
	
});
describe('Get Record by Id Test', () => {
	it('Test Get Record by Id where valid data is returned', async () => {
		Repository.mockClear();
		Repository.mockImplementation(()=>({
			getDataById: async() => expectedDbResult
		}));
		const expectedResult = new Record(expectedDbResult._dbId, expectedDbResult._name);
		const getRecordById = new getRecord();
		const response = await getRecordById.SearchById(1);
		expect(response).not.toBeNull();
		expect(response).toEqual(expectedResult);
	});

	it('Test Get Record by Id where data is not found', async () => {
		Repository.mockClear();
		Repository.mockImplementation(()=>({
			getDataById: async() => undefined
		}));
		const getRecordById = new getRecord();
		const response = await getRecordById.SearchById(2);
		expect(response).toBeNull();
	});

});