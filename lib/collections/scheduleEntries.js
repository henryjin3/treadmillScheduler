ScheduleEntries = new Mongo.Collection("scheduleEntries");

if(Meteor.isClient) {
  Template.body.helpers({
    scheduleEntries: function() {
      return ScheduleEntries.find({});
    }
  });
}
