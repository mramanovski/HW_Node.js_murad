function add (x, y) {
    console.log(x, y);
    return x + y;
  }
  
  function div (x, y) {
    return x / y;
  }
  
  function sub (x, y) {
    return x - y;
  }
  
  function multi (x, y) {
    return x * y;
  }
  function power(a,b){
    return Math.pow(a,b);
  }
  function root(a,b){
    return Math.pow(a,1/b);
  }

  module.exports = {
    add,
    div,
    sub,
    multi,
    power,
    root
  };