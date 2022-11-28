var opn = require("opn");
var project = require("../project.json");

module.exports = function(grunt) {

  var open = async function(name) {
    var ids = [];
    var type = "document";
    if (name == "sheets") {
      ids = project.sheets;
      type = "spreadsheets";
    } else {
      ids = [project.docs[name]]
    }
    for (var id of ids) {
      await opn(`https://docs.google.com/${type}/d/${id}/edit`);
    }
  }

  grunt.registerTask("open", async function() {
    var done = this.async();
    var name = grunt.option("name");
    open(name).then(done);
  });
}