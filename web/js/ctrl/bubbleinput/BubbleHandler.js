"use strict";

tutao.provide('tutao.tutanota.ctrl.bubbleinput.BubbleHandler');


/**
 * The BubbleInputField delegates certain tasks like retrieving suggestions and creating bubbles
 * to the BubbleHandler.
 *
 * This interface is implemented by ViewModels which make use of the BubbleInputField
 *
 * @interface
 */
tutao.tutanota.ctrl.bubbleinput.BubbleHandler = function() {};

/**
 * @param {string} text The text to filter for.
 * @return {Array.<tutao.tutanota.ctrl.bubbleinput.Suggestion>} suggestions that are valid for text.
 */
tutao.tutanota.ctrl.bubbleinput.BubbleHandler.prototype.getSuggestions = function(text) {};

/**
 * Creates a new bubble for a suggestion.
 * @param {tutao.tutanota.ctrl.bubbleinput.Suggestion} suggestion The suggestion.
 * @return {tutao.tutanota.ctrl.bubbleinput.Bubble=} Returns the new bubble or null if none could be created.
 */
tutao.tutanota.ctrl.bubbleinput.BubbleHandler.prototype.createBubbleFromSuggestion = function(suggestion) {};

/**
 * Creates a new bubble from the provided text.
 * @param {string} text
 * @return {Array.<tutao.tutanota.ctrl.bubbleinput.Bubble>} Returns the new bubble or null if none could be created.
 */
tutao.tutanota.ctrl.bubbleinput.BubbleHandler.prototype.createBubblesFromText = function(text) {};

/**
 * Notifies the BubbleHandler that the given bubble was deleted.
 * @param {tutao.tutanota.ctrl.bubbleinput.Bubble} bubble The bubble that was deleted.
 */
tutao.tutanota.ctrl.bubbleinput.BubbleHandler.prototype.bubbleDeleted = function(bubble) {};

/**
 * Gets invoked whenever the button gets clicked
 */
tutao.tutanota.ctrl.bubbleinput.BubbleHandler.prototype.buttonClick = function() {};

/**
 * Is invoked in order to display the image on the button
 * @return {string} the path to the button that should be displayed.
 */
tutao.tutanota.ctrl.bubbleinput.BubbleHandler.prototype.buttonCss = function() {};
