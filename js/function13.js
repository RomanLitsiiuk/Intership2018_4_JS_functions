const newObj = {
  name: 'Rimus',
  age: 25,
  getName: function () {
    console.log(this.name);
  },
  getAge: function () {
    console.log(this.age);
  }
};
function returnOwnProperty(obj) {
  return Object.assign({}, obj);
}
const newObj2 = returnOwnProperty(newObj);
newObj2.getName();
newObj2.getAge();
