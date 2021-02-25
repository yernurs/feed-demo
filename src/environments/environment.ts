// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    name: 'default',
    firebase: {
        config: {
            apiKey: "AIzaSyAWfYnkgPgnicuf7TgDmflcRShpLYc6cw8",
            authDomain: "business-networking-dev.firebaseapp.com",
            databaseURL: "https://business-networking-dev.firebaseio.com",
            projectId: "business-networking-dev",
            storageBucket: "business-networking-dev.appspot.com",
            messagingSenderId: "501153927043",
            appId: "1:501153927043:web:96a0e2caab0ca8079570b6"
        },
        actionCodeSettings: {
            url: 'http://localhost:5200/demo',
            handleCodeInApp: true
        }
    }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
