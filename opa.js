if (Meteor.isClient) {

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {

      VK.init({
      	apiId: '4960248'
      });

      function authInfo(response) {
  		if (response.session) {
    	alert('user: '+response.session.mid);
  		} else {
    	alert('not auth');
  		}
	  }

      VK.Auth.login(authInfo)
    }
  });


  Template.findUser.events({
  	'click .find' : function () {
  		userId = $('.userId').val()
  		findUser(userId)
  	}
  })
}

function findUser(userId) {
	VK.Api.call('users.get', {user_ids: userId }, function(r) { 
  	if(r.response) { 
    console.log(r.response) 
    } 
  }); 
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
