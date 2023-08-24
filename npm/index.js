const _ = require("lodash");

const numbers = [31, 34, 434, 23, 3];
_.each(numbers, function(number, i){
  console.log(number);
});

//dont push node_module in git repository
//run npm install after cloning (looks automatically on dependencies)


//npm install ... --save
//npm install ... --save-dev (dev application)
//npm install ...@1.1.1 --save (install version 1.1.1)

/*Versioning
  8.2.6 (example)
  8: Major Version (Major Changes, Breaks the api)
  2: Minor version (new features, doesnt break the api)
  6: Patch (Bug fixes)

  (default) Minor version updates installed on clones (^ before version)
  Patch... (~)
  Exact version()
  New Major update (*)
*/

//npm install (in clone to install all dependencies)
//npm install --production (no dev dependencies)

//npm uninstall ... --save (ggf -dev)
//npm un
//npm remove ... --save 
//npm rm

//npm update (update everything)
//npm update ... (update ...)

//global modules: (installed on machine)
//npm install -g ... (e.g nodemon)
//npm root -g
//=> can be run everwhere 

//npm list (list all dependencies)
//npm list --depth 0 (on the first level)

//module bundler (line 1 in fronted)
//webpack