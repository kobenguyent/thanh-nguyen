export {};
const { I } = inject();
import { Pet } from '../model/pet';

Feature('Pet - Update an existing pet');

Scenario('Verify updating pet successfully', async () => {
	const petData = new Pet({});
	await I.sendPostRequest('/pet', petData);

	await I.sendPutRequest('/pet', petData);
	await I.seeResponseCodeIsSuccessful();
	await I.seeResponseContainsJson(petData);
});

Scenario('Verify Invalid ID supplied', async () => {
	const petData = new Pet({ id: 'hfdjh'});

	await I.sendPutRequest('/pet', petData);
	await I.seeResponseCodeIs(400);
});

Scenario('Verify Pet not found', async () => {
	const petData = new Pet({ id: '67676'});

	await I.sendPutRequest('/pet', petData);
	await I.seeResponseCodeIs(404);
});

Scenario('Verify updating pet with form data', async () => {
	const petData = new Pet({});
	await I.sendPostRequest('/pet', petData);

	const res = await I.sendPostRequest(`/pet/${petData.id}?name=hello&status=sold`);
	await I.seeResponseCodeIsSuccessful();
	await I.seeResponseContainsJson(res.data);
});

Scenario('Verify updating pet with form data - invalid query string', async () => {
	const petData = new Pet({});
	await I.sendPostRequest('/pet', petData);

	const res = await I.sendPostRequest(`/pet/${petData.id}?name=hello&state=sold`);
	await I.seeResponseCodeIsSuccessful();
	await I.seeResponseContainsJson(res.data);
});
