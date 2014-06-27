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
      
      
      Symbol.bindElementAction(compId, symbolName, "${_connect_people}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play("Label 1");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_connect_photo}", "click", function(sym, e) {
         // insert code for mouse click here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("Label 2");

      });
      //Edge binding end

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${_connect_event}", "click", function(sym, e) {
         sym.play("Label 3");
         

      });
      //Edge binding end

      

   })("stage");
   //Edge symbol end:'stage'

})(jQuery, AdobeEdge, "EDGE-72878488");