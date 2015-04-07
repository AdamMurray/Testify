module.exports = function(grunt) {
  grunt.initConfig({

    jade: {
      compile: {
        options: {
          client: false,
          pretty: true
        },
        files: [ {
          cwd: "app/views",
          src: "**/*.jade",
          dest: "./",
          expand: true,
          ext: ".html"
        } ]
      }
    },

  });

  grunt.loadNpmTasks("grunt-contrib-jade");
};
