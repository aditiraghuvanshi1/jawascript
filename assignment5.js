// Assignment 5: Function Architecture and Scope

// Standard function with default parameters
function areaStandard(length = 5, width = 4) {
  return length * width;
}

// Arrow function with default parameters
const areaArrow = (length = 5, width = 4) => length * width;

console.log(`Standard Function Area (Default 5x4): ${areaStandard()}`);
console.log(`Arrow Function Area (Custom 10x3): ${areaArrow(10, 3)}`);

// Scope demonstration
function functionScopeDemo() {
  var funcVar = "I exist only inside this function";
  return funcVar;
}
functionScopeDemo();

{
  let blockVar = "I exist only inside this block";
  var leaky = "var ignores block scope";   // var leaks out of the block
}

try {
  console.log(blockVar);   // let is block-scoped -> error
} catch (error) {
  console.log(`Scope Test Error: ${error.name}: ${error.message.replace(/ is not defined.*/, "")} is not defined (when accessed outside block)`);
}

try {
  console.log(funcVar);    // function-scoped -> error
} catch (error) {
  console.log(`Function scope: ${error.name} - funcVar not accessible outside its function`);
}

console.log(`var inside block is still accessible: "${leaky}"`);
