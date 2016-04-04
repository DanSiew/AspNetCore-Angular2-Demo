System.config({
    //use typescript for compilation
    transpiler: 'typescript',
    //typescript compiler options
    typescriptOptions: {
        emitDecoratorMetadata: true,
        experimentalDecorator: true,
        noImplicitAny: true,
        typeCheck: true,              // also accepts "strict"
        tsconfig: true                // also accepts a path
    },
    //packages defines our app package
    packages: {
        appScripts: {
            defaultExtension: 'js'
        }

    }
});