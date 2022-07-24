function Person(name, age, job) {
    var privateField1 = 'test';
    this.name = name;
    this.age = age;
    this.job = job;
    this.privilegedMethod = function () { return privateField1; }
};

Person.prototype.sayName = function () {
    return this.name + ' ' + this.privilegedMethod();
};