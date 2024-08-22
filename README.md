# Codegarden 2024 Demo - Property Editor UIs

Open the the project (just in the root, not the PackageDevelopment folder) in the terminal, and install Umbraco

```dotnet new umbraco --name Umbraco```

In the Umbraco folder, create a folder called `App_Plugins`

In App_Plugins, create a folder called `MyPackage`

Move the `umbraco-package.json` file from the root to the folder `MyPackage`

In the terminal, go to the `PackageDevelopment`

```cd PackageDevelopment```

Install the dependencies

```npm i```

Build the property editor
```npm run build```
or
```npm run build:watch```

Open a new terminal and go to the Umbraco folder

```cd Umbraco```

You can now run and install Umbraco
```dotnet run```
