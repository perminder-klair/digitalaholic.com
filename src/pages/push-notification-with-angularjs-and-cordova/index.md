---
title: Push Notification with AngularJs and Cordova
date: "2014-08-21"
---

In this tutorial you will learn How to setup Push Notification Server for Apple and Google Cloud

<!-- end -->

### Prerequisites

- AngularJs and Cordova App already setuped

### Install required cordova plugins

We will now install required cordova plugins to make push notifications work.

`
cordova plugin add https://github.com/phonegap-build/PushPlugin.git
cordova plugin add org.apache.cordova.device
cordova plugin add org.apache.cordova.dialogs
cordova plugin add org.apache.cordova.vibration
`

### Include Push Angular Service
Include AnguarJs Push Service, copy the code from following gist to your Angular App

https://gist.github.com/perminder-klair/03ed857a5344e288cfbd#file-angularpushservice-js

### Usage:

```language-javascript
module.controller('MainCtrl', function($scope, $pushService) {

  $pushService.register().then(function(result) {
      // Success!
   }, function(err) {
      // An error occured. Show a message to the user
   });

 });
```

Now, we can send device regID to the server and store  into a database for later use to send push notifications.

### Sending Push Notifications

To send push notifications to devices who installed our app, (as we have device regIDs already stored in our database).

Upload PushServer php class to your server:

https://gist.github.com/perminder-klair/03ed857a5344e288cfbd#file-pushserver-php

To send push notifications, include PushServer.php file in your server and execute following:

```language-php
$message = 'My First Push Notification!';
$pushServer = new PushSerer();
//To send push notification to android device
$pushServer->pushToGoogle('REG-ID-HERE', $message);
//To send push notification to iOS device
$pushServer->pushToApple('DEVICE-TOKEN-HERE', $message);
```

That's all. Any question or query regarding this feel free to post comment below. I will be happy to reply :)
