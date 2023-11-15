/*
створити декоратор Memoize для методу класу, 
який буде на основі отриманих аргументів метода повертати закешоване значення
*/

export function hashCode(str: string): number {
  var h: number = 0;
  for (var i = 0; i < str.length; i++) {
    h = 31 * h + str.charCodeAt(i);
  }
  return h & 0xffffffff;
}

function Memoize<T, A extends any[], R>(
  originalMethod: (...args: A) => R,
  context: ClassMethodDecoratorContext<T, (...args: A) => R>
) {
  if (context.kind != "method") throw new Error("Method only");

  function replacementFunction(this: T, ...args: A): R {
    // The decorated method's parameters will be passed in as args.
    let hash: string = "";
    for (let i: number = 0; i < args.length; i++) {
      hash += args[i];
    }

    // Execute the behavior originally programmed in
    // the decorated method
    const result = originalMethod.apply(this, args);

    return originalMethod.apply(this, args);
  }

  return replacementFunction;
}

{
  // Capture the functional behavior of the decorated method
  const originalMethod = descriptor.value;

  // Override the decorated method's behavior with new behavior
  descriptor.value = function (...args: any[]) {
    let msg: string = `${propertyKey}`;

    // The decorated method's parameters will be passed in as args.
    let hash: string = "";
    for (let i: number = 0; i < args.length; i++) {
      hash += args[i];
    }

    // Emit a message to the console
    console.log(
      `Memoize says - before calling the method: ${msg} 
      were calculated its parameters hash: ${hashCode(hash)}`
    );

    // Execute the behavior originally programmed in
    // the decorated method
    const result = originalMethod.apply(this, args);

    // if the decorated method returned a value when executed,
    // capture that result
    if (result) {
      msg = `${propertyKey} and returned: ${JSON.stringify(result)}`;
    } else {
      msg = `${propertyKey}`;
    }

    // Having executed the decorated method's behavior, emit
    // a message to the console report what happened
    console.log(`Memoize says - after calling the method: ${msg}`);

    // Return decorated method return value
    return result;
  };
}

function enumerable(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class User {
  @Memoize
  about = function (name: string, age: number): string {
    return `N: ${name}, A: ${age}`;
  };
}

/*
створити декоратор Debounce для методу класу, 
який за отриманим значенням буде відтерміновувати запуск методу
*/
