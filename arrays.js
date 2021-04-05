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

function accessElementInArray(chocolateBars, 2) {
  return chocolateBars[2];
}
