Hello! Please follow these steps to integrate successfully the navigation module.

1. Install the dependencies:
	1. Boostrap 5: https://www.itsolutionstuff.com/post/how-to-add-bootstrap-5-in-angular-12example.html
	2. Ngx-Translate: https://micbdev.medium.com/creating-a-multilingual-application-with-ngx-translate-a-simple-approach-e5338a264645

2. Copy the assets:
	1. Take the three .scss files and copy them where you want them. Make sure you import them in your root stylesheet.
	2. Copy the icons folder into assets/img/
	3. Make sure you have created some translation file in step 2.1

3. Import the module:
	1. Copy the navigation folder in src/app
	2. Import the NavigationModule into the root module of the application (and other modules if you call it).
	3. Copy <app-main-nav></app-main-nav> above your router outlet in your app.component¨

4. Change the data files:
	1. Change the object in the navigation/data/menu.ts file to reflect your app architecture.
	2. Change the object in the navigation/data/socials.ts file to link it to your social accounts.

5. Change the variable files: 
	1. In assets/styles/variables.scss review the variables to reflect the way you want your app to look. 
	2. If you are importing the menu to a prexisting app, you might have more work to do in the navigation.scss file and the utilities.scss file.

6. Add the corresponding routes in your app.module.routing.

7. Enjoy your multilingual, reactive, GTM ready menu.

Cheers!








