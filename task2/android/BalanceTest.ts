export {};
const { I, androidHomeScreen } = inject();
const income = '50';
const expense = '30';

Feature('Balance @android');

Scenario('Adding income successfully', async () => {
    await androidHomeScreen.addNewIncome(income);
    I.waitAndSeeText(income);
});

Scenario('Adding expense successfully', async () => {
    await androidHomeScreen.addNewExpense(expense);
    I.waitAndSeeText(expense);
});

Scenario('Balance updates correctly with income and expense', async () => {
    await androidHomeScreen.addNewIncome(income);
    await androidHomeScreen.addNewExpense(expense);
    I.waitAndSeeText('20');
});
