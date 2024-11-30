Template.registerHelper("settings", function (key) {
  return Meteor.settings.public[key];
});
