import {byId} from "../decorators/Locators";
const { I } = inject();

export = {

    buttons: {
        income:  byId({ id: 'income_button'}),
        expense:  byId({ id: 'expense_button'}),
        numpad: {
            '0': byId({ id: 'buttonKeyboard0'}),
            '1': byId({ id: 'buttonKeyboard1'}),
            '2': byId({ id: 'buttonKeyboard2'}),
            '3': byId({ id: 'buttonKeyboard3'}),
            '4': byId({ id: 'buttonKeyboard4'}),
            '5': byId({ id: 'buttonKeyboard5'}),
            '6': byId({ id: 'buttonKeyboard6'}),
            '7': byId({ id: 'buttonKeyboard7'}),
            '8': byId({ id: 'buttonKeyboard8'}),
            '9': byId({ id: 'buttonKeyboard9'}),
        },
        chooseCategory: byId({id: 'keyboard_action_button'}),
        firstCategory: byId({id: 'imageView'}),
    },

    addNewIncome(amount) {
        I.waitAndTap(this.buttons.income);
        amount.split('').forEach(e => {
            I.waitAndTap(this.buttons.numpad[e]);
        });
        I.waitAndTap(this.buttons.chooseCategory);
        I.waitAndTap(this.buttons.firstCategory);
    },

    addNewExpense(amount) {
        I.waitAndTap(this.buttons.expense);
        amount.split('').forEach(e => {
            I.waitAndTap(this.buttons.numpad[e]);
        });
        I.waitAndTap(this.buttons.chooseCategory);
        I.waitAndTap(this.buttons.firstCategory);
    },
}
