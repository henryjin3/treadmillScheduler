if(Meteor.isClient) {
  Template.body.events({
    "click #reset": function(event) {
      event.preventDefault();

      Meteor.call('removeAllScheduleEntries');

      var startTime = 8;
      var length = 9;
      for(var i = 0; i < length; i++) {
        var currentTime = startTime+i;
        ScheduleEntries.insert({
          time: currentTime + ':00',
          timeValue: currentTime
        });
        ScheduleEntries.insert({
          time: currentTime + ':30',
          timeValue: currentTime + .5
        });
      }
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function() {
    return Meteor.methods({
      removeAllScheduleEntries: function() {
        return ScheduleEntries.remove({});
      }
    });
  });
}
