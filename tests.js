describe('the user service',function(){
  var service, repo, gui;
  
  beforeEach(function(){
    repo = userRepository();
    gui = guiComponent();
    service = userService(repo, gui);
  });

  it('asks the server for data as the button is pressed',function(){
    var email = "test@test.com";
    gui.emailTextBox.text = function() {
      return email;
    };
    spyOn(repo,'retrieveUsers');
    
    gui.simulateSearchButtonClick();
    
    expect(repo.retrieveUsers).toHaveBeenCalledWith(email);
    
  });
});