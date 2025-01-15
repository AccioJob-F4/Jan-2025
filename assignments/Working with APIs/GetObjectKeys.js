//your JS code here. If required.
// Add the getKeys method to Object.prototype
Object.prototype.getKeys = function () {
  return Object.keys(this);
};

// Create the student object with a name property
const student = {
  name: "John Doe",
};
