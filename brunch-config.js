// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {joinTo: 'app.css'}
};

exports.plugins = {
  babel: {presets: ['latest']},
  postcss: {
    modules: true,
    processors: [
      require('autoprefixer')(['last 8 versions']),
      require('csswring')()
    ]
  }
};
