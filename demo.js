let Person = {
  name: { first: "Le", second: "Minh", last: "Chuong"},
  age: 21,
  gender: "male",
  interest: ["game", "music"],
  bio: function () {
    document.write(
      this.name.first +
        " " +
        this.name.second +
        " " +
        this.name.last +
        " is " +
        this.age +
        " years old. He likes " +
        this.interest[0] +
        " and " +
        this.interest[1] +
        ". <br />"
    );
  },
  greeting: function () {
    document.write("Hi! I'm " + this.name.last + ".");
  },
};
document.write(Person.name.first + '<br />');
Person.greeting();
document.write('<br />');
Person.bio();
// Person.tall = '1.78 m';
// document.write('I\'m height ' + Person.tall + '<br />');
Person['weight'] = '66kg';
document.write('I\'m weight ' + Person.weight + '<br />');
let myDataName = 'height';
let myDataValue = '1.78m';
Person[myDataName] = myDataValue;
document.write(Person.height);