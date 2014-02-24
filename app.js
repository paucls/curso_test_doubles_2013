function guiComponent(){
  var self = {};
  
  self.emailTextBox = {
    text: function() {}
  };
  
  //$('#theButton').click(self.onSearchButtonClicked);
  self.simulateSearchButtonClick = function() {
    self.onSearchButtonClicked();
  };
  self.onSearchButtonClicked = function() {};
  
  return self;
}

function userRepository() {
  var self = {};
  
  self.retrieveUsers = function(successCallback){};
  
  self.store = function(user) {};
  
  return self;
}

//
function User(fields) {
  if (fields)
    this._email = fields.email;
}
User.prototype.hasEmail = function(email){
  return this._email == email;
};
User.prototype.asRaw = function(){
  return {email: this._email};
};

//
function userService(userRepo, guiComponent){
  var self = {};
  var repo = userRepo;
  var gui = guiComponent;
  
  gui.onSearchButtonClicked = function(){
    repo.retrieveUsers(gui.emailTextBox.text());
  };
  
  self.findBy = function(email){
    return new User({email: 'test@test.com'});
  };
  
  self.findAllUsersBy = function(name){
  };
}
