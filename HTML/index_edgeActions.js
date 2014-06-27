/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${_div4}", "click", function(sym, e) {
         // insert code for mouse click here
         var posi = sym.getPosition() // this is a numeric variable that gets the current time in the animation its in miliseconds so at one second this will have a value of 1000 at two seconds 2000 and so on
         if (posi == '3000'){
                   sym.play("Label 2"); // this if statement is checking to see what slide the animation is on, if it is in the first slide, it will play the begining of the last slide
         }
         else {
         	window.open("main.html","_self");
         }
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_div3}", "click", function(sym, e) {
         // insert code for mouse click here
         var pos = sym.getPosition() // this is a numeric variable that gets the current time in the animation its in miliseconds so at one second this will have a value of 1000 at two seconds 2000 and so on
         if (pos == '3000'){
                   sym.play("Label 1"); // this if statement is checking to see what slide the animation is on, if it is in the first slide, it will play the begining of the last slide
         }

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-378865511");