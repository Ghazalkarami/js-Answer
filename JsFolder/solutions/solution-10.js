function sum(...Argument) {
    let x = 0;
    for (const arg of Argument) {
      x += arg;
    }
    return x ;
  }
  
  sum(6,8,9)