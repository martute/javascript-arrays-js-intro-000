var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars1 = ["foo", ...chocolateBars];
  return chocolateBars1;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, foo) {
  chocolateBars.unshift("foo");
  return chocolateBars;
}

function addElementToEndOfArray(chocolateBars, foo) {
  chocolateBars2 = [...chocolateBars, "foo"];
  return chocolateBars2;
}

function destructivelyAddElementToEndOfArray(chocolateBars, foo) {
  chocolateBars.push("foo");
  return chocolateBars;
}

function accessElementInArray(chocolateBars) {
  return chocolateBars[2];
}

function destructivelyRemoveElementFromBeginningOfArray(chocolateBars) {
  chocolateBars.shift();
  return chocolateBars;
}

function removeElementFromBeginningOfArray(chocolateBars) {
  chocolateBars3 = chocolateBars.slice(1);
  return chocolateBars3;
}
