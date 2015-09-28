Template.body.events({
  "change #name": function(event) {
    var name = event.target.value;
    console.log(name);

    ScheduleEntries.update(this._id, {
      $set: { name: name }
    });
  }
})
