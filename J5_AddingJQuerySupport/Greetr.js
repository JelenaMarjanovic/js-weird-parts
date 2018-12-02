(function(global, $) {

    // Set up Greetr so that it generates an object
    // We return with the new keyword so we don't need to say new all the time
    var Greetr = function(firstName, lastName, language) {
      return new Greetr.init(firstName, lastName, language);
    }

    var supportedLangs = ['en', 'es'];

    var greetings = {
      en: 'Hello',
      es: 'Hola'
    };

    var formalGreetings = {
      en: 'Greetings',
      es: 'Saludos'
    };

    var logMessages = {
      en: 'Logged in',
      es: 'Inició sesión'
    }

    // Here we'll put any methods that we want to use inside our object
    // that's returned from Greetr

    // In order to save memory space, we'll put any methods and other properties
    // that would be shared by all of the objects generated here, right there...
    Greetr.prototype = {

      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },

      validate: function() {
        if (supportedLangs.indexOf(this.language) === -1) {
          throw 'Invalid language!';
        }
      },

      greeting: function() {
        return greetings[this.language] + ' ' + this.firstName + '!';
      },

      formalGreeting: function() {
        return formalGreetings[this.language] + ' ' + this.fullName() + '!';
      },

      greet: function(formal) {
        var msg;

        // if undefined or null, it will be coerced to 'false'
        if (formal) {
          msg = this.formalGreeting();
        } else {
          msg = this.greeting();
        }

        if (console) {
          console.log(msg);
        }

        // 'this' refers to the calling object at execution time
        // It makes the method chainable
        return this;
      },

      log: function() {
        if (console) {
          console.log(logMessages[this.language] + ': ' + this.fullName());
        }

        return this;
      },

      // Change language on the fly
      setLang: function(lang) {
        this.language = lang;

        this.validate();

        return this;
      },

      HTMLGreeting: function(selector, formal) {
        if (!$) {
          throw 'jQuery not loaded!';
        }

        if (!selector) {
          throw 'Missing jQuery selector!';
        }

        var msg;

        if (formal) {
          msg = this.formalGreeting();
        } else {
          msg = this.greeting();
        }

        $(selector).html(msg);

        return this;
      }

    };

    // The actual function constructor
    Greetr.init = function(firstName, lastName, language) {

      var self = this;

      // Set up default properties
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'en';

      self.validate();

    }

    // In order to use methods from Greetr's prototype,
    // the object we created with Greetr needs to point to that prototype
    Greetr.init.prototype = Greetr.prototype;

    // Expose our Grretr function and its alias G$ to the outside world
    // by attaching them to our global object, so that we can call our
    // Greetr function anywhere, because it sits on the global object
    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
