## finco. finance app

### SoftUni project

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Technologies and frameworks used:

- React;
- React Router DOM;
- Firebase;
    + databese,
    + authentication
- Bootstrap;

### This App will be deployed to Firebase

Direct link can be opened for project viewing: https://finco-app-3c312.web.app/

### App Info:

finco. is a finance app. It has functionality related to a personal wallet, financial tools and expense trackers.

A user can add bank cards, expenses and read finance related news.

If you are registered or use an existing account, please navigate to Dashboard where the main functionality can be seen. All data is dynamically loaded from the Firebase database. You can `create`, `edit` and `delete` items.

The same can be applied to the News section. Unlike the Dashboard, the News section is not private for the currently logged in user. However, post in the News section can only be edited and removed by the author New posts can be added only by logged in users.

Authnetication and authorization is also implemented. So you can `edit` and `delete` only if you are authorized to do so.

Since the authentication is based on the Firebase service, please feel free to create a new user from the Sign Up button and use it for testing (if not use:  email: nikolayzhechev@yahoo; pass: 1234qwer).