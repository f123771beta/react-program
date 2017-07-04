const action_types = 'SWITCH_LANGUAGE';
import content from './data/content.json';
//const api = require('./api');
let api = {

  getContent(language = 'en') {
    return content.filter(obj => obj.lang === language)[0];
  }

};

const initialState = {
  content: api.getContent() // Loads default language content (en) as an initial state
};



let reducer = function (state = initialState, action) {
  switch (action.type) {
    case action_types:
      return {
        content: api.getContent(action.language)
      };
    default:
      return state;
  }
};

module.exports = reducer;
