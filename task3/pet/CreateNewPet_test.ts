const { I } = inject();
import { Pet } from '../model/pet';

Feature('Pet - Create a new pet in the store');

Scenario('Verify creating new pet successfully', async () => {
	const petData = new Pet({ id: 11 });

	await I.sendPostRequest('/pet', petData);
	await I.seeResponseCodeIsSuccessful();
	await I.seeResponseContainsJson(petData);
});

Scenario('Verify Invalid input', async () => {
	const petData = '';

	await I.sendPostRequest('/pet', petData);
	await I.seeResponseCodeIs(400);
});
