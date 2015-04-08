# Responsive Web Design Test Bed

A test bed for testing a locally hosted project using multiple form factors on
a single web page.

## Usage

### Command Prompt

**Note: NodeJS may need to be installed on your system for the node modules to run**

This first option involves running commands directly on the CLI, and should work
on all operating systems. A second option
below is also available, which involves double-clicking on Windows batch files.
This is, of course, a Windows only option; however, Linux bash files will be added
soon.

First of all, run the project you want to test on `localhost` using port `8080`.
Then, to run the test bed, navigate to the root directory of the test bed
(`RWDTestBed`) and run the `http-server` node module using:

```bash
> http-server -p [chosen-port]
```

Finally, navigate to the test bed by typing into the browser:

```
http://localhost:[chosen-port]
```

### Batch Files (Windows)

Alternatively, the test bed can be run by double-clicking on the batch file
`RunRWDTestBed_Windows.bat`. This will run the `http-server` in the current directory
using port `8000`, open a browser tab/window, and navigate to `http://localhost:8000`.

As in the first option, the project you want to test must be running on `localhost`
port `8080`. This will be configurable in future.

## Screenshots

### Apple mobiles
![alt tag](./screenshots/shot_1.PNG)

### Android mobiles
![alt tag](./screenshots/shot_2.PNG)

### Android tablets
![alt tag](./screenshots/shot_3.PNG)

## Future Improvements

* Ability to choose which site to show via a form when the site is first loaded

* Ability to run site from a shortcut or link

* Improved styles

* Ability to create a new kind of form factor from within the app
