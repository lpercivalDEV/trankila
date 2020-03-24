# Trankila - meditation app
Trankila is a simple meditation app with a visual timer, timer selections, and background videos.

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](http://placecorgi.com/1200/650)
![alt tag](http://placecorgi.com/1200/650)
![alt tag](http://placecorgi.com/1200/650)
![alt tag](http://placecorgi.com/1200/650)
![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript

Trankila is built using vanilla JavaScript, CSS, and HTML. Each time selection button has data attributes that hold the time values for each selection. This attribute is then used to populate the time display at the bottom of the app.

There is a circular image that helps visualize the passing of time. By using two svg images layered on top of one another, I am able to use the circle and stroke to animate the movement of one circle "filling in" the circle behind it.

There is a play button that has a click event listener attached to it which will start the sound and video once clicked. It will also display the pause icon. When the pause icon is clicked, it will stop the sound/video and switch back to displaying the play icon.

The videos are selected using the colored icons on the right side of the app. These buttons have data attributes that can be used to replace the default `src` of the video element with the appropriate video. The sound files have data attributes that are used to calculate how much time has passed which is used to update the time display at the bottom of the app.

Keyboard only navigation is possible in this app.


## Optimizations

I would like to improve this app by implementing an API instead of using video files because they are large and impact performance. It would also allow for more variety and easier updates since switching out videos would simply mean making a different api call.

Improving the UI to allow for the "hiding" of the timer/selectors would also be nice as users would then be less distracted and the screen would look less cluttered.

If I were to transform this into a full stack application, I would allow users to set up accounts and have the ability for them to enter daily journals and save their favorite videos for meditation (using an api instead of video files).

## Lessons Learned:

This was a nice exercise in using data attributes to do some nifty things on the javascript side of things. It was also cool to figure out how to manipulate SVG files and layering them and using their properties to do different effects.
