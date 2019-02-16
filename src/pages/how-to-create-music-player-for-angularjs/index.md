---
title: How to create music player for AngularJs
date: "2014-06-29"
---

In this tutorial I am going to show you how can we create music player for AngularJs. I have created a special AngularJs module called [angular-soundmanager2](https://github.com/perminder-klair/angular-soundmanager2) for sake of this tutorial which means difficult work is already done for you!

<!-- end -->

Our music player is going to support following features:

- Play, Pause and Stop track
- Next and Prev track
- Seek track progress
- Change and mute volume
- Add single track to Playlist
- Add all tracks, Repeat, Clear Playlist

Live demo here: [http://perminder-klair.github.io/angular-soundmanager2/](http://perminder-klair.github.io/angular-soundmanager2/)


### Why use SoundManager2 ?

Answer is simple "[SoundManager 2](http://www.schillmania.com/projects/soundmanager2/) makes it easier to play audio using JavaScript."

SoundManager 2 gives you a single, powerful API that supports both new and old, using HTML5 audio where supported and optional Flash-based fallback where needed. Ideally when using SoundManager 2, audio "just works."

### Requirements

- AngularJS 1.2+

### Setup music player

#### Install dependencies

Install [angularSoundManager](https://github.com/perminder-klair/angular-soundmanager2) dependency using bower.

First, create `bower.json` file as follows:

```
{
    "name": "myApp",
    "version": "0.0.1",
    "authors": [
        "Parminder Klair"
    ],
    "description": "My AngularJs Music App",
    "dependencies": {
        "angular-soundmanager2": "*"
    },
}

```

Once we have created this file, using terminal install required dependencies:

```
bower install
```

#### Setup AngularJs App

Once bower completes installation, we will create a simple AngularJs app by create a file called `app.js`. We will pass some demo songs to our application view.

```language-javascript
angular.module('myApp', ['angularSoundManager'])

    .controller('MainCtrl', ['$scope', function ($scope) {
        $scope.songs = [
            {
                id: 'one',
                title: 'Rain',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/rain.mp3'
            },
            {
                id: 'two',
                title: 'Walking',
                url: 'http://www.schillmania.com/projects/soundmanager2/demo/_mp3/walking.mp3'
            },
            {
                id: 'three',
                title: 'Barrlping with Carl (featureblend.com)',
                url: 'http://www.freshly-ground.com/misc/music/carl-3-barlp.mp3'
            },
            {
                id: 'four',
                title: 'Angry cow sound?',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Mak.mp3'
            },
            {
                id: 'five',
                title: 'Things that open, close and roll',
                url: 'http://www.freshly-ground.com/data/audio/binaural/Things%20that%20open,%20close%20and%20roll.mp3'
            }
        ];

    }]);
```

Let me explain this file:

- First we setup an AngularJs app named as `myApp`
- Load `angularSoundManager` as a dependency for your app
- Create a new controller called `MainCtrl`.
- Lastly, we will pass array of `songs` using Angular `$scope` variable. Keep in mind that structure of array. You can add as much as songs in the array.

Next step is create a simple index file for our simple AngularJs applicaion. Let's create `index.html` file with content as follow:

```javascript-html
<!DOCTYPE html>
<html>

<head>
    <title>AnguarJs SoundManager2</title>
    <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="style.css"/>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min.js"></script>
    <script src="bower_component/angular-soundmanager2/dist/angular-soundmanager2.js"></script>
    <script src="app.js"></script>
</head>

<body ng-app="myApp">
<div class="container" ng-controller="MainCtrl">
    <div class="row">
        <div class="col-md-12">

            <h5>Songs</h5>
            <ul>
                <li ng-repeat="song in songs">
                    <button music-player data-type="playTrack" data-song="{{ $index }}" all-songs="songs"
                            my-playlist="playlist">{{ song.title }}
                    </button>
                    <button music-player data-type="addToPlaylist" data-song="{{ $index }}" all-songs="songs"
                            my-playlist="playlist">+
                    </button>
                </li>
            </ul>

            <button play-all="songs" my-playlist="playlist">Play all</button>

        </div>
    </div>

    <hr />

    <div class="row">
        <div class="col-md-12">
            <!-- init soundManager2 player -->
            <sound-manager></sound-manager>

            <p>
                Currently Playing: {{ currentPlaying.title }} ({{ currentPostion }} / {{ currentDuration }})
            </p>

            <div class="seekBase" seek-track>
                <div class="seekLoad" ng-style="{width : ( progress + '%' ) }"></div>
            </div>
            <br />
            <button play-music>Play</button>
            -
            <button pause-music>Pause</button>
            -
            <button stop-music>Stop</button>
            -
            <button repeat-music>Repeat ({{ repeat }})</button>
            <br/>
            <br/>
            Volume: {{ volume }}
            -
            <button music-volume data-type="increase">+</button>
            -
            <button music-volume data-type="decrease">-</button>
            -
            <button mute-music>Mute ({{ mute }})</button>
            <br/>
            <br/>
            <button prev-track>Prev Track</button>
            -
            <button next-track>Next Track</button>
            -
            <button clear-playlist>Clear Playlist</button>
            <br/>
            <br/>
            <h5>Playlist</h5>
            <ul set-playlist>
                <li ng-repeat="song in playlist">
                    <a play-from-playlist data-song="{{song.id}}">{{ song.title }}</a>
                    -
                    <a remove-from-playlist data-song="{{song.id}}" data-index="{{$index}}" my-playlist="playlist">
                        <small>(remove)</small>
                    </a>
                    -
                    <span ng-if="currentPlaying.id == song.id">(current)</span>
                </li>
            </ul>
        </div>
    </div>
</div>
</body>

</html>
```

This file includes all directives, which were auto-loaded from our angularSoundManager module.

Also, to make our player simple and nice to understand I have included Bootstrap 3 and some custom css, for this we will create `style.css` file as follow:

```language-css
.seekBase {
  height: 30px;
  width: 90%;
  border: 1px solid #cccccc;
}
.seekLoad {
	height: 30px;
  width: 0;
  background-color: #E0EAF1;
}

li {
	cursor: pointer;
}
```

Once all done, open the index.html to visit your newly created music player. So, it's fine to say that our simple AngularJs Music Application will be ready!

Simple? Yes! I have also uploaded code example at:
[https://github.com/perminder-klair/angular-soundmanager2/tree/master/examples](https://github.com/perminder-klair/angular-soundmanager2/tree/master/examples)

Feel free to play around it and fork it. For any question or suggestion please use comment box below.
