/*global module:false*/
module.exports = function (grunt) {
    grunt.initConfig({
      //压缩HTML
      htmlmin: {
        options: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          collapseWhitespace: true,
          collapseBooleanAttributes: true,
          removeAttributeQuotes: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeOptionalTags: true
        },
        html: {
          files: [{
            expand: true, 
           cwd: '', //注意这里可以指定目录，如果不指定目录默认是全站
           src: ['*.html','views/{,*/}*.html'], 
           dest: 'dist/'
          }]
        }
      }
    });
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.registerTask('html', ['htmlmin']);
    //在app目录下执行grunt html
};