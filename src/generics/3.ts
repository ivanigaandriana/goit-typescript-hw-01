function merge<T extends object, U extends object> (objA:T, objB:U): T & U {
    return Object.assign({}, objA, objB);
  }
  const mergeObj = merge({name: 'Max'}, {age: 30});
  mergeObj.age;