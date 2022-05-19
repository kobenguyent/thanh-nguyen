import {endpoint} from "../endpoint";

const { I } = inject();
import {Pet, petStatus} from '../model/pet';

Feature('Pet - Find pets');

Scenario('Verify finding pets by status - available', async () => {
	const petData = new Pet({});
	await I.sendPostRequest('/pet', petData);
	const res = await I.sendGetRequest(endpoint.pet.findByStatus('available'));
	await I.seeResponseCodeIsSuccessful();
	await I.assertContain(JSON.stringify(res.data), petData.status);
});

Scenario('Verify finding pets by status - pending', async () => {
	const petData = new Pet({ status: petStatus[1]});
	await I.sendPostRequest('/pet', petData);

	const res = await I.sendGetRequest(endpoint.pet.findByStatus(petStatus[1]));
	await I.seeResponseCodeIsSuccessful();
	await I.assertContain(JSON.stringify(res.data), petData.status);
});

Scenario('Verify finding pets by status - sold', async () => {
	const petData = new Pet({ status: petStatus[2]});
	await I.sendPostRequest('/pet', petData);

	const res = await I.sendGetRequest(endpoint.pet.findByStatus(petStatus[2]));
	await I.seeResponseCodeIsSuccessful();
	await I.assertContain(JSON.stringify(res.data), petData.status);
});

Scenario('Verify finding pets by status - bogus status', async () => {
	const petData = new Pet({ status: petStatus[2]});
	await I.sendPostRequest('/pet', petData);

	await I.sendGetRequest(endpoint.pet.findByStatus('hello'));
	await I.seeResponseCodeIs(400);
});

Scenario('Verify finding pets by tags', async () => {
	const petData = new Pet({ tagName: 'hello'});
	await I.sendPostRequest('/pet', petData);
	const res = await I.sendGetRequest(endpoint.pet.findByTags('hello'));
	await I.seeResponseCodeIsSuccessful();
	await I.assertContain(JSON.stringify(res.data), petData.status);
});

Scenario('Verify finding pets by multiple tags', async () => {
	const petData = new Pet({ tagName: 'hello'});
	await I.sendPostRequest('/pet', petData);
	const res = await I.sendGetRequest(endpoint.pet.findByTags('abc') + `&tags=hello`);
	await I.seeResponseCodeIsSuccessful();
	await I.assertContain(JSON.stringify(res.data), petData.status);
});

Scenario('Verify finding pets by non existing tags', async () => {
	await I.sendGetRequest(endpoint.pet.findByTags('897099'));
	await I.seeResponseCodeIsSuccessful();
	await I.seeResponseContainsJson({});
});

Scenario('Verify finding pets by valid id', async () => {
	const petData = new Pet({});
	await I.sendPostRequest('/pet', petData);
	const res = await I.sendGetRequest(endpoint.pet.findById(petData.id.toString(10)));
	await I.seeResponseCodeIsSuccessful();
	await I.assertContain(JSON.stringify(res.data), petData.id);
});

Scenario('Verify finding pets by invalid id', async () => {
	await I.sendGetRequest(endpoint.pet.findById('ghbn'));
	await I.seeResponseCodeIs(400);
});

Scenario('Verify finding pets by non existing id', async () => {
	await I.sendGetRequest(endpoint.pet.findById('678676575857'));
	await I.seeResponseCodeIs(404);
});
