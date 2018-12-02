(function(global, $) {

    // Set up Greetr so that it generates an object
    // We return with the new keyword so we don't need to say new all the time
    var Greetr = function(firstName, lastName, language) {
      return new Greetr.init(firstName, lastName, language);
    }

    // Here we'll put any methods that we want to use inside our object
    // that's returned from Greetr
    Greetr.prototype = {};

    // The actual function constructor
    Greetr.init = function(firstName, lastName, language) {

      var self = this;

      // Set up default properties
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';

    }

    // In order to use methods from Greetr's prototype,
    // the object we created with Greetr needs to point to that prototype
    Greetr.init.prototype = Greetr.prototype;

    // Expose our Grretr function and its alias G$ to the outside world
    // by attaching them to our global object, so that we can call our
    // Greetr function anywhere, because it sits on the global object
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
