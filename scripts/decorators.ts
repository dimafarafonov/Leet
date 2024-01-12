function first() {
  console.log("first(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("first(): called");
  };
}

function second() {
  console.log("second(): factory evaluated");
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("second(): called", target, propertyKey, descriptor);
  };
}

class ExampleClass {
  @first()
  @second()
  method() {}
}

const entity = new ExampleClass()
// continue on decorats : set up nodemon watching tsx files
