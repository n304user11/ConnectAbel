var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

// the following functions were added by Ian (6th June 2014)

/* this function is from http://spring.io/guides/gs/consuming-rest-jquery/

The $(document).ready(function () {}); defines an anonymous function that
is executed as soon as the browser has loaded the page and constructed the
DOM (Document Object Model). This might be before the images and other remote
assets have been completely received so this allows scripts to run as soon
as possible. You should use onload instead if you want to delay running the 
script until all the images and other remote assets have been received.

In this example application, I have used a mix of the techniques, partially
because I have merged two different examples! 

The function that is run in this case uses jQuery’s $.ajax() method to consume 
the REST service at http://rest-service.guides.spring.io/greeting. 

If successful, it will assign the JSON received to data 
(I believe that this is making use of a jQuery method that allows arbitrary
data to be stored with specific DOM elements -- in this case the page or
document). The JSON returned is expected to be of the form:

{"id":40214,"content":"Hello, World!"}

Where the value of the id will change each time so you know that you are receiving
the result of your own invocation.

The id and content are then appended to the greeting-id and greeting-content 
DOM elements found on index.html respectively.

Note the use of the jQuery promise .then(). This directs jQuery to execute 
the anonymous function when the $.ajax() method completes, passing the 
data result from the completed AJAX request.
*/

$(document).ready(function() {
    $.ajax({
        url: "http://rest-service.guides.spring.io/greeting"
    }).then(function(data) {
       $('.greeting-id').append(data.id);
       $('.greeting-content').append(data.content);
    });
});

// capture a picture, call onSuccess when it succeeds and onFail if something goes wrong
function capturePhoto() {
    navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
                                                   });
}

// load the image into a HTML element already present on the page
function onSuccess(imageData) {
    var image = document.getElementById('myImage');
    image.src = "data:image/jpeg;base64," + imageData;
}

// should taking a picture fail, display an alert to tell the user
function onFail(message) {
    alert('Failed because: ' + message);
}