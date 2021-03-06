const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '2018-05-01',
  // authenticator: new IamAuthenticator({
  //   apikey: '{apikey}',
  // }),
  // url: '{url}',
});

const translateParams = {
  text: 'I like cats very much.',
  modelId: 'en-fr',
};

languageTranslator.translate(translateParams)
  .then(translationResult => {
    console.log(JSON.stringify(translationResult, null, 2));
  })
  .catch(err => {
    console.log('error:', err);
  });