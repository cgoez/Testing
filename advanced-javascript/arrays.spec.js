const arrayFunctions = require("./arrays");

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test the data type being called back, and perform some sort of operation on the data.

describe("Arrays", () => {
  //Helper Function
  function isFunction(func) {
    it("should be a function", () => {
      expect(typeof func).toBe("function");
    });
  }

  describe("map", () => {
    const cb = item => item + 2;
    const mappedArray = arrayFunctions.map([1, 2, 3], cb);
    //Checks if function is type of function
    isFunction(arrayFunctions.map);
    it("Should return an array", () => {
      expect(mappedArray instanceof Array).toBeTruthy();
    });
    it("Should return expected outcome", () => {
      expect(mappedArray).toEqual([3, 4, 5]);
    });
  });

  describe("reduce", () => {
    //Checks if function is type of function
    isFunction(arrayFunctions.reduce);

    const elements = [1, 2, 3];
    const memo = elements.shift();
    const cb = (memo, item) => {
      return memo + item;
    };
    const reduce = arrayFunctions.reduce(elements, cb, memo);
    it("Should return expected outcome", () => {
      expect(reduce).toBe(6);
    });
  });

  describe("find", () => {
    //Checks if function is type of function
    isFunction(arrayFunctions.find);

    const elements = [1, 2, 3];
    const cb = elements => {
      return elements < 2;
    };
    const find = arrayFunctions.find(elements, cb);
    it("Should return expected outcome", () => {
      expect(find).toBe(1);
    });
  });

  describe("filter", () => {
    //Checks if function is type of function
    isFunction(arrayFunctions.filter);

    const elements = [4, 5, 6];
    const cb = (item) => {
      return item < 5;
    };
    const filter = arrayFunctions.filter(elements, cb);
    it("Should return expected outcome", () => {
      expect(filter).toEqual([4]);
    });
  });

  describe("flatten", () => {
    //Checks if function is type of function
    isFunction(arrayFunctions.flatten);

    const elements = [1, 2, 3, [4, 5, 6]];
    const flatten = arrayFunctions.flatten(elements);
    it("Should return expected outcome", () => {
      expect(flatten).toEqual([1, 2, 3, 4, 5, 6]);
    });
  });
});
