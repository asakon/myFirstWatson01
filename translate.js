const LanguageTranslatorV3 = require('ibm-watson/language-translator/v3');
const { IamAuthenticator } = require('ibm-watson/auth');

const languageTranslator = new LanguageTranslatorV3({
  version: '{version}',
  authenticator: new IamAuthenticator({
    apikey: '{apikey}',
  }),
  url: '{url}',
});
