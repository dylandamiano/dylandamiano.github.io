var alpha;
alpha = 50;

buildSpace.printf = function () {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
};
buildSpace.test = function () {
    console.log("test!");
};
buildSpace.printf(1, 2, 3, 4, 5.);
