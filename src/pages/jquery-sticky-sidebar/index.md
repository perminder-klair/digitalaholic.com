---
title: jQuery Sticky Sidebar
date: "2014-07-01"
spoiler: Create sticky side bar for a website
---

In this tutorial I am going to show , how can we create sticky side bar for a website. We can use this sidebar as shoping cart details or something like that.

<!-- end -->

Demo: http://codepen.io/perminder-klair/pen/tdzue

The sidebar will stay in view until we reach footer with sticky stopper class.

Let's get started with veyr basic HTML structure like this:

```language-html
<div class="container">
  <div class="header">
    This is header
  </div>
  <div class="sidebar sticky">
    This is side bar
  </div>
  <div class="content">
    This is main content
  </div>
  <div class="footer">
    <div class="sticky-stopper"></div>
    This is my footer
  </div>
</div>
```

We will add some styling to this as follow:

```language-css
.container {
  width: 1000px;
  position: relative;
}

.header {
  clear: both;
  margin-bottom: 10px;
  border: 1px solid #000000;
  height: 90px;
}

.sidebar {
  float: left;
  width: 350px;
  border: 1px solid #000000;
}

.content {
  float: right;
  width: 640px;
  border: 1px solid #000000;
  height: 800px;
}

.footer {
  clear: both;
  margin-top: 10px;
  border: 1px solid #000000;
  height: 820px;
}
```

And finally to handle sticky side bar we will use some jQuery code, make sure you include jQuery in your project.

```language-javascript
$( document ).ready(function() {
  var $sticky = $('.sticky');
  var $stickyrStopper = $('.sticky-stopper');
  if (!!$sticky.offset()) { // make sure ".sticky" element exists

    var generalSidebarHeight = $sticky.innerHeight();
    var stickyTop = $sticky.offset().top;
    var stickOffset = 0;
    var stickyStopperPosition = $stickyrStopper.offset().top;
    var stopPoint = stickyStopperPosition - generalSidebarHeight - stickOffset;
    var diff = stopPoint + stickOffset;

    $(window).scroll(function(){ // scroll event
      var windowTop = $(window).scrollTop(); // returns number

      if (stopPoint < windowTop) {
          $sticky.css({ position: 'absolute', top: diff });
      } else if (stickyTop < windowTop+stickOffset) {
          $sticky.css({ position: 'fixed', top: stickOffset });
      } else {
          $sticky.css({position: 'absolute', top: 'initial'});
      }
    });

  }
});
```

That's all, now you have a nice basic sticky sidebar. You can amend it according to your needs.
Again, a working demo can be found at codepen: http://codepen.io/perminder-klair/pen/tdzue

Any questions? Feel free to use comments box below.
