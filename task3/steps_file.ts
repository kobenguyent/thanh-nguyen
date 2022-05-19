const { actor } = require('codeceptjs');
import ex from 'codeceptjs-expectwrapper';

export = function () {
    return actor({...ex});
}
