// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyCvAnr18sQufz1icrGlnrcj2aCo2Sr9JlQ',
      authDomain: 'okno-lab.firebaseapp.com',
      databaseURL: 'https://okno-lab.firebaseio.com',
      projectId: 'okno-lab',
      storageBucket: 'okno-lab.appspot.com',
      messagingSenderId: '381676732145'
  }
};
