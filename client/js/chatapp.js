/**
 * This is our top-level namespace. We will be placing all our objects under
 * this namespace.
 */
window.ChatApp = {
    View : {},
    Model : { }
}

/**
 * This is the socket.io server we will be connecting to.
 */
ChatApp.serverUrl = 'http://192.168.90.23:8080/';

/**
 * We only actually start executing the javascript, once the dom is fully
 * loaded. All the initialization for the application logic is done here.
 */
$(document).ready(function() {

    var app = new ChatApp.Application();

});
