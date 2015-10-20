var fs = require('fs');

var endsWith = function(text, suffix) {
  return text.indexOf(suffix, text.length - suffix.length) !== -1;
};

fs.readdir(process.argv[2], function(err, list) {
  if (err) throw err;
  list.filter(function(file){
    if (endsWith(file, '.' + process.argv[3])) {
      console.log(file);
	}
  });
});
