module.exports = {
  sum(a, b) {
    return a + b;
  },
  sayHello() {
    return "hello";
  },
  arrayMaker(a, b, c) {
    return [a, b, c];
  },

  checkEmail(string) {
    if (string.split("").includes("@")) {
      return true;
    } else {
      return false;
    }
  },
};
