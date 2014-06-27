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
            "${_email}": [
                ["transform", "translateY", '-345px'],
                ["style", "opacity", '0.000000']
            ],
            "${_div1} > label:nth-child(1)": [
                ["style", "display", 'inline-block'],
                ["style", "opacity", '0.000000'],
                ["transform", "translateY", '-345px']
            ],
            "${_div1} > label:nth-child(3)": [
                ["style", "display", 'inline-block'],
                ["style", "opacity", '0.000000'],
                ["transform", "translateY", '-345px']
            ],
            "${_logo}": [
                ["transform", "scaleX", '0'],
                ["style", "opacity", '0'],
                ["transform", "scaleY", '0']
            ],
            "${_password}": [
                ["transform", "translateY", '-345px'],
                ["style", "opacity", '0.000000']
            ],
            "${_div2}": [
                ["transform", "translateY", '18px'],
                ["style", "opacity", '0']
            ],
            "${_login_btn}": [
                ["transform", "translateY", '36px'],
                ["style", "opacity", '0']
            ],
            "${_signup_btn}": [
                ["transform", "translateY", '-326px'],
                ["style", "opacity", '0']
            ]
        }
    },
    timelines: {
        "Default Timeline": {
            fromState: "Base State",
            toState: "",
            duration: 10000,
            autoPlay: true,
            labels: {
                "Label 1": 5000,
                "Label 2": 8000
            },
            timeline: [
                { id: "eid72", tween: [ "style", "${_div2}", "opacity", '0', { fromValue: '0'}], position: 2000, duration: 0, easing: "easeOutElastic" },
                { id: "eid74", tween: [ "style", "${_div2}", "opacity", '0', { fromValue: '0'}], position: 3000, duration: 0, easing: "easeOutElastic" },
                { id: "eid44", tween: [ "style", "${_div2}", "opacity", '1', { fromValue: '0'}], position: 8750, duration: 1250, easing: "easeOutQuart" },
                { id: "eid79", tween: [ "style", "${_login_btn}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 1000 },
                { id: "eid47", tween: [ "style", "${_login_btn}", "opacity", '0', { fromValue: '1'}], position: 9000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid64", tween: [ "transform", "${_logo}", "scaleX", '4.08', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutElastic" },
                { id: "eid69", tween: [ "transform", "${_logo}", "scaleX", '1', { fromValue: '4.08'}], position: 500, duration: 1500, easing: "easeOutElastic" },
                { id: "eid78", tween: [ "style", "${_signup_btn}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 1000 },
                { id: "eid7", tween: [ "style", "${_signup_btn}", "opacity", '0', { fromValue: '1'}], position: 5500, duration: 1500, easing: "easeOutExpo" },
                { id: "eid35", tween: [ "style", "${_signup_btn}", "opacity", '1', { fromValue: '0'}], position: 8000, duration: 0, easing: "easeOutExpo" },
                { id: "eid65", tween: [ "transform", "${_logo}", "scaleY", '0.03', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutElastic" },
                { id: "eid70", tween: [ "transform", "${_logo}", "scaleY", '1', { fromValue: '0.03'}], position: 500, duration: 1500, easing: "easeOutElastic" },
                { id: "eid82", tween: [ "style", "${_logo}", "opacity", '1', { fromValue: '0'}], position: 250, duration: 1250, easing: "easeOutElastic" },
                { id: "eid12", tween: [ "style", "${_div1} > label:nth-child(1)", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid51", tween: [ "style", "${_div1} > label:nth-child(1)", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutExpo" },
                { id: "eid14", tween: [ "style", "${_div1} > label:nth-child(3)", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid48", tween: [ "style", "${_div1} > label:nth-child(3)", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutExpo" },
                { id: "eid42", tween: [ "transform", "${_div2}", "translateY", '-162px', { fromValue: '18px'}], position: 8000, duration: 1250 },
                { id: "eid5", tween: [ "transform", "${_login_btn}", "translateY", '75px', { fromValue: '36px'}], position: 5000, duration: 2000, easing: "easeInOutElastic" },
                { id: "eid39", tween: [ "transform", "${_login_btn}", "translateY", '36px', { fromValue: '75px'}], position: 8000, duration: 0, easing: "easeInOutElastic" },
                { id: "eid38", tween: [ "transform", "${_signup_btn}", "translateY", '-275px', { fromValue: '-326px'}], position: 8000, duration: 2000, easing: "easeInOutElastic" },
                { id: "eid15", tween: [ "style", "${_password}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid50", tween: [ "style", "${_password}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutExpo" },
                { id: "eid13", tween: [ "style", "${_email}", "opacity", '1', { fromValue: '0.000000'}], position: 6000, duration: 1000, easing: "easeOutExpo" },
                { id: "eid49", tween: [ "style", "${_email}", "opacity", '0', { fromValue: '1'}], position: 8000, duration: 0, easing: "easeOutExpo" }            ]
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
})(jQuery, AdobeEdge, "EDGE-378865511");
