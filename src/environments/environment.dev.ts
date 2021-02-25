export const environment = {
    production: false,
    name: 'dev',
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
            url: 'http://localhost:5200/profile/new',
            handleCodeInApp: true
        }
    }
};
