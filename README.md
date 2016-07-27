# ng-kaltura-player

## Overview
A directive for [AngularJS](http://angularjs.org) for embedding the [Kaltura](http://www.kaltura.com) video player.

## Setup
1. Install with npm or bower  
`npm install ng-kaltura-player` or `bower install ng-kaltura-player`

2. Include in your project  
`<script src="bower_components/ng-kaltura-player/index.js"></script>`

3. Inject the directive  
`angular.module('App', ['Kaltura.directives'])`

## Usage
`<kaltura-player width="640px" height="320px" video="selectedVideo"></kaltura-player>`

#### Attributes
* `width`: The player width. You can specify px for pixels or % for percentage
* `height`: The player height. You can specify px for pixels or % for percentage
* `video.pid`: Your Kaltura publisher ID.
* `video.uiconfid`: Your Kaltura player ID.
* `video.entryid`: The entry ID of the video to play.
* `video.flahvars`: A Kaltura player flashvars object listing player configuration and plugins.
