console.log(this);

function a() {
  console.log(this);
  this.newVariable = 'Hello';
}

var b = function() {
  console.log(this);
}

a();

console.log(newVariable);

b();

var c = {
  name: 'The c object',
  log: function () {
    var self = this;

    self.name = 'Updated c object';
    console.log(this, self);

    var setName = function(newName) {
      self.name = newName;
      console.log('Inside setName \'this\':', this, ' and \'self\':', self);
    }

    setName('Updated again! The c object');
    console.log(self);
  }
}

c.log();
