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
