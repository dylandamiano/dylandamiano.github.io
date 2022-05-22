var alpha: number;
alpha = 50;

declare namespace buildSpace {
    export function printf(...args): void;
    export function test(): void;
}

buildSpace.printf = function(...args) {
    for (var i = 0; i < args.length; i++) {
        console.log(args[i]);
    }
}

buildSpace.test = function() {
    console.log("test!");
}

buildSpace.printf(1,2,3,4,5);