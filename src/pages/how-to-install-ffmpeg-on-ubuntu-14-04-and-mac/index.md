---
title: How to Install FFMPEG on Ubuntu 14.04 and Mac
date: "2014-08-26"
---
# How to Install FFMPEG

In this tutorial, I am going to show how to install FFMPEG easily on Ubuntu 14.04 and Mac OS X.
We can use FFMPEG to do tasks like convert and compress on music and video files.

<!-- end -->

## Ubuntu

To install ffmpeg on Ubuntu 14.04 LTS you have simply to open a terminal and execute the commands described below.

```
sudo apt-add-repository ppa:mc3man/trusty-media
sudo apt-get update
sudo apt-get install ffmpeg gstreamer0.10-ffmpeg
```

## Mac

To install ffmpeg on MAC OS X you should follow these steps:

1. Check if your Homebrew installation is up to date and working with `brew doctor`
2. Check all available options for ffmpeg with `brew options ffmpeg`
3. Install ffmpeg with all desired options with `brew install ffmpeg [all your options]`

### Example:

To install FFmpeg with all available options without disabling anything execute:

```
brew install ffmpeg --with-fdk-aac --with-ffplay --with-freetype --with-frei0r --with-libass --with-libvo-aacenc --with-libvorbis --with-libvpx --with-opencore-amr --with-openjpeg --with-opus --with-rtmpdump --with-schroedinger --with-speex --with-theora --with-tools
```

Any question or query, feel free to use comments box below.
