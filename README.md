# Codegarden 2024 Demo - Property Editor UIs

Open the the project (just in the root, not the PackageDevelopment folder) in the terminal, and install Umbraco

```dotnet new umbraco --name Umbraco```

You should now have two folders: Umbraco and PackageDevelopment next to eachother.

In the Umbraco folder, create a folder called _App_Plugins_

In App_Plugins, create a folder called _MyPackage_

Move the file _umbraco-package.json_ from the root to the folder _MyPackage_

In the terminal, go to the PackageDevelopment

```cd PackageDevelopment```

Install the dependencies

```npm install```

Build the property editor using
```npm run build```
or
```npm run build:watch```

Open a new terminal and go to the Umbraco folder

```cd Umbraco```

You can now run and install Umbraco
```dotnet run```


After installing Umbraco, the property editor should show up as an option when creating a new datatype.

Enable the different settings for the datatype.

Be aware that the image from the property editor **will NOT SHOW** when you look at your document! This is because the image was hardcoded for this demo :-) you can edit the URL in `PackageDevelopment/src/my-property-editor.element.ts`
