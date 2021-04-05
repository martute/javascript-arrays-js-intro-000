var chocolateBars = ["snicker", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(chocolateBars, foo) {
chocolateBars1 = ["foo", ...chocolateBars];
return chocolateBars1;
}

function destructivelyAddElementToBeginningOfArray(chocolateBars, mueslli) {
  ["mueslli", ...chocolateBars];
  return chocolateBars;
}
