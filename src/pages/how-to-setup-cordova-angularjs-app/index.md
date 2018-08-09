---
title: How to Setup Cordova AngularJs App
date: "2014-07-21"
---

In this tutoral, I am going to show how to setup and build simple AngularJs and Cordova App.
We will cover both Android app developement and iOS app development.

<!-- end -->

### Step One - Install required modules on your system

#### NodeJs:

Install NodeJs from http://nodejs.org on your local system.

#### Install Yeoman

Install Yeoman scaffolding system.

`npm install -g yo`

#### Install Grunt

Install Grunt, a javascript task runner. We are going to use Grunt to do some auto tasks.

`npm install -g grunt-cli`

#### Install Bower

A package manager for the web, we use this to keep app dependencies up to date.

`npm install -g bower`

####  Install Yeoman's AngularJS Generator

Yeoman generator for AngularJs, lets you quickly set up project with sensible defaults and best practices.

`npm install -g generator-angular`

To use AngularJs Generator please visit official page [https://github.com/yeoman/generator-angular](https://github.com/yeoman/generator-angular)

#### Install Cordova

`npm install -g cordova`

Please follow official Cordova guide for more information on usage: [http://cordova.apache.org/docs/en/3.5.0/](http://cordova.apache.org/docs/en/3.5.0/)

### Step Two - Setup AngularJs App

We can setup AngularJs app from scratch, but instead of spending time on it, we will use a scaffolding system called Yeoman. So, why wait, let's setup AngularJs App. Type the following commands into your terminal:

```
mkdir angular-cordova
cd angular-cordova
yo angular
```

This will setup your AngularJs application.

To run and test the app in browser:
`grunt serve`

If successful, AngularJs app will be loaded in your browser. All good? Let's move on to next step.


## Step Three - Setup Cordova

Create the Cordova App

`cordova create cordova com.example.angular-cordova AngularCordova`

Once done, it will create a directory named `cordova`.
Then move all files from `cordova` directory to root of your app.
You can now delete empty cordova directory.

#### Setting up AngularJs with Phonegap

1. In Gruntfile.js, change `dist: 'dist'` to `dist: 'www'` on line 25.

2. Open `app/index.html` file and add following just after google analytics sample code:

`<script type="text/javascript" src="cordova.js"></script>`

3. Now to initialise app on cordova ready, we will create a new Angular Factory Serice. Execute the following code in terminal to create a service:

`yo angular:factory cordova`

Once done, now you can find newly created file in `app/scripts/services/cordova.js`

Update the cordova factory code with the following:
```language-javascript
var d = $q.defer(),
resolved = false;

var self = this;
this.ready = d.promise;

        document.addEventListener('deviceready', function () {
	resolved = true;
	d.resolve($window.cordova);
});

// Check to make sure we didn't miss the
// event (just in case)
setTimeout(function () {
	if (!resolved) {
		if ($window.cordova) d.resolve($window.cordova);
	}
}, 3000);

// Public API here
return this;
```

Now, you can execute cordova related plugins after cordova is ready in your AngluarJs app like this:

```language-javascript
module.controller('MainCtrl', function($scope, cordova) {
  cordova.ready.then(function () {
      alert('Cordova is ready');
  });
});
```

Once all done, build Angularjs app for Phonegap

To build AngularJs app, run:

`grunt build`

### Step Four - Build app for platforms

#### Build app for Android

You can run following commands if you android SDK already installed.

To add android platform:

```
cordova platform add android
```

Build the App

```
cordova build android
```

Test the App on an Emulator or Device

```
cordova emulate android

//or to run on device

cordova run android
```

Once build completed, you can find generated APK file in directory:

`platforms/android/ant-build/`

#### Build app for iOS

Make sure you have Xcode install on your mac before proceeding.

To add iOS platform:

```
cordova platform add ios
```

Build the App

```
cordova build ios
```

Test the App on an iOS Emulator

```
cordova emulate android
```

---

That is all, hopefully this will help you in first step setup of your first AngularJs Cordova app.

To download source of this app, visit git repo. Feel free to fork it and try it!
https://github.com/perminder-klair/angular-cordova

Any questions or queries regarding this, feel free to post comment below.
