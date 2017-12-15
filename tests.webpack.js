
var context = require.context('./src/app/components', true, /-test\.js?$/);
context.keys().forEach(context);
