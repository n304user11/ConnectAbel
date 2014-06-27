/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
var opts = {
    'gAudioPreloadPreference': 'auto',

    'gVideoPreloadPreference': 'auto'
};
var resources = [
];
var symbols = {
"stage": {
    version: "4.0.0",
    minimumCompatibleVersion: "4.0.0",
    build: "4.0.0.359",
    baseState: "Base State",
    scaleToFit: "none",
    centerStage: "none",
    initialState: "Base State",
    gpuAccelerate: false,
    resizeInstances: false,
    content: {
            dom: [
],
            symbolInstances: [

            ]
        },
    states: {
        "Base State": {
            "${_photo_ico}": [
                ["style", "opacity", '0']
            ],
            "${_photo_txt}": [
                ["style", "opacity", '0']
            ],
            "${_connect_people}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '0']
            ],
            "${_people_txt}": [
                ["style", "opacity", '0']
            ],
            "${_connect_photo}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '0']
            ],
            "${_event_txt}": [
                ["style", "opacity", '0']
            ],
            "${_connect_event}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '1'],
                ["transform", "scaleY", '0']
            ],
            "body > div:nth-child(2) > a:nth-child(2)": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0']
            ],
            "${_people_ico}": [
                ["transform", "scaleX", '1'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '1']
            ],
            "${_event_ico}": [
                ["style", "opacity", '0']
            ],
            "${_login_stripe}": [
                ["transform", "translateY", '-30px']
            ],
            "body > div:nth-child(2) > a:nth-child(3)": [
                ["transform", "scaleX", '0'],
                ["transform", "scaleY", '0']
            ],
            "${_logout_btn}": [
                ["transform", "translateX", '228px']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 1915,
            autoPlay: true,
            timeline: [
                { id: "eid52", tween: [ "transform", "${_connect_photo}", "scaleX", '1', { fromValue: '0'}], position: 875, duration: 625, easing: "easeInOutSine" },
                { id: "eid21", tween: [ "transform", "${_login_stripe}", "translateY", '0px', { fromValue: '-30px'}], position: 0, duration: 250 },
                { id: "eid65", tween: [ "style", "${_photo_txt}", "opacity", '1', { fromValue: '0'}], position: 1375, duration: 540, easing: "easeInOutSine" },
                { id: "eid23", tween: [ "transform", "${_logout_btn}", "translateX", '0px', { fromValue: '228px'}], position: 250, duration: 500 },
                { id: "eid55", tween: [ "transform", "${_connect_people}", "scaleY", '1', { fromValue: '0'}], position: 875, duration: 625, easing: "easeInOutSine" },
                { id: "eid47", tween: [ "transform", "${_connect_event}", "scaleY", '1', { fromValue: '0'}], position: 875, duration: 625, easing: "easeInOutSine" },
                { id: "eid61", tween: [ "style", "${_event_ico}", "opacity", '1', { fromValue: '0'}], position: 1325, duration: 540, easing: "easeInOutSine" },
                { id: "eid46", tween: [ "transform", "${_connect_event}", "scaleX", '1', { fromValue: '0'}], position: 875, duration: 625, easing: "easeInOutSine" },
                { id: "eid67", tween: [ "style", "${_people_txt}", "opacity", '1', { fromValue: '0'}], position: 1375, duration: 540, easing: "easeInOutSine" },
                { id: "eid60", tween: [ "style", "${_photo_ico}", "opacity", '1', { fromValue: '0'}], position: 1325, duration: 540, easing: "easeInOutSine" },
                { id: "eid54", tween: [ "transform", "${_connect_people}", "scaleX", '1', { fromValue: '0'}], position: 875, duration: 625, easing: "easeInOutSine" },
                { id: "eid66", tween: [ "style", "${_event_txt}", "opacity", '1', { fromValue: '0'}], position: 1375, duration: 540, easing: "easeInOutSine" },
                { id: "eid59", tween: [ "style", "${_people_ico}", "opacity", '1', { fromValue: '0'}], position: 1325, duration: 540, easing: "easeInOutSine" },
                { id: "eid53", tween: [ "transform", "${_connect_photo}", "scaleY", '1', { fromValue: '0'}], position: 875, duration: 625, easing: "easeInOutSine" }            ]
        }
    }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources, opts);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-72878488");
