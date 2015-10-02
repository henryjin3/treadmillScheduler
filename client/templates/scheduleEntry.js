Template.body.events({
  "change #name": function(event) {
    var name = event.target.value;

    ScheduleEntries.update(this._id, {
      $set: { name: name }
    });
  },
  "click #reserveBtn": function(event) {
    ScheduleEntries.update(this._id, {
      $set: { name: Meteor.user().profile.name }
    });
  }
})
