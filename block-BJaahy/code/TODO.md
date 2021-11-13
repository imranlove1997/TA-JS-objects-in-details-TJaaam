# More about class

- Create a class named `Square` which accepts one parameter `side` and will set two property `width` and `height` to the value of `side`.
```js
class Square {
    contractor(side){
        this.width = side;
        this.height= side;
    }
}
```
- Add a method name `description` that will alert a message saying `The square is ${width} x ${height}`
```js
class Square {
    contractor(side) {
        this.width = side;
        this.height= side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}`);
    }
}
```
- Create a method inside the class named `calcArea` that will return the area of the square.
```js
class Square {
    contractor(side) {
        this.width = side;
        this.height= side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea() {
        return this.width * this.height;
    }
}
```
- Create a `area` getter method using which we can get the area of the square.
```js
class Square {
    contractor(side) {
        this.width = side;
        this.height= side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea() {
        return this.width * this.height;
    }
    get area() {
        return this.width * this.height;
    }
}
```
- Create a `area` setter method that will accept the area of the square. Based on the value of area it will set the value of `width` and `height`.
```js
class Square {
    contractor(side) {
        this.width = side;
        this.height= side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea() {
        return this.width * this.height;
    }
    get area() {
        return this.width * this.height;
    }
    set area() {
        let side = Math.sqrt(value);
        this.width = side;
        this.height = side;
    }
}
```
- Create a static method named `isEqual` which accepts two `square` object with `width` and `height` property. If the area of both square is same it will return `true` or `false`.
```js
class Square {
    contractor(side) {
        this.width = side;
        this.height= side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea() {
        return this.width * this.height;
    }
    get area() {
        return this.width * this.height;
    }
    set area() {
        let side = Math.sqrt(value);
        this.width = side;
        this.height = side;
    }
    static isEqual(a, b) {
        return a.width * a.height === b.width * b.height;
    }
}
```
- Create two instance of the `Square` class
```js
class Square {
    contractor(side) {
        this.width = side;
        this.height= side;
    }
    description() {
        alert(`The square is ${this.width} x ${this.height}`);
    }
    calcArea() {
        return this.width * this.height;
    }
    get area() {
        return this.width * this.height;
    }
    set area() {
        let side = Math.sqrt(value);
        this.width = side;
        this.height = side;
    }
    static isEqual(a, b) {
        return a.width * a.height === b.width * b.height;
    }
}
```
- Check the `area` getter method on both square. Check the `area` property on one square more than 4 times.

- Check the `isEqual` method and pass the two instance you created above.

## User Class

- Create a `User` class that accepts `firstName` and `lastName` property
```js
class User {
    contractor(firstName, lastName){
        this.frstName = firstName;
        this.lastName = lastName;
    }
}
```
- Create a getter method named `fullName` that will return the full name of the person.
```js
class User {
    contractor(firstName, lastName){
        this.frstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
```
- Create a `fullName` setter method that will accept full name parameter of the person. It will update the `firstName` and `lastName` based on the input. Say if the user passed `Arya Stark` it will update the `firstName` to `Arya` and `lastName` to `Stark`. It will also change one condition if the length of the name passed is less than 5 characters it will alert a message saying `Full name should be more than 5 characters`

- Create a method named `nameContains` which will accept string and will return `true` or `false` based on if the name of the user contains the text that passed by user.

- Create two instance of the `User` class

- Check by using the `fullName` setter method with name bigger than 5 characters.

- Check by using the `fullName` setter method with name less than 5 characters.

- Check the `fullName` using getter

- Check the `nameContains` method