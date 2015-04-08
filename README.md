# Responsive Web Design Test Bed

A test bed for testing a locally hosted project using multiple form factors on
a single web page.

## Usage

First of all, run the project you want to test on `localhost` using port `8080`.
Then, to run the test bed, navigate to the root directory and run the `http-server` node
module using:

```bash
$ http-server -p [chosen-port]
```

Finally, navigate to the test bed by typing into the browser:

```
http://localhost:[chosen-port]
```

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
