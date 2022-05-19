export {};
const { I } = inject();
import { Pet } from '../model/pet';

Feature('Pet - Delete an existing pet');

Scenario('Verify deleting pet successfully', async () => {
	const petData = new Pet({});
	await I.sendPostRequest('/pet', petData);

	await I.sendDeleteRequest(`/pet/${petData.id}`);
	await I.seeResponseCodeIsSuccessful();
});

Scenario('Verify Invalid ID supplied', async () => {
	await I.sendDeleteRequest('/pet/gjghb');
	await I.seeResponseCodeIs(400);
});

Scenario('Verify non existing ID supplied', async () => {
	await I.sendDeleteRequest('/pet/4675678797798777978');
	await I.seeResponseCodeIsSuccessful();
});
