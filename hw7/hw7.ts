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
    // Method name
    const methodName = String(context.name);

    // The decorated method's parameters will be passed in as args.
    let hash: string = "";
    for (let i: number = 0; i < args.length; i++) {
      hash += args[i];
    }

    // Emit a message to the console
    console.log(
      `Memoize says - before calling the method: ${methodName} 
      were calculated its parameters hash: ${hashCode(hash)}`
    );

    // Execute the behavior originally programmed in
    // the decorated method
    const result = originalMethod.apply(this, args);

    // if the decorated method returned a value when executed,
    // capture that result
    const msg: string =
      result != null
        ? `${methodName} and returned: ${JSON.stringify(result)}`
        : `${methodName}`;

    // Having executed the decorated method's behavior, emit
    // a message to the console report what happened
    console.log(`Memoize says - after calling the method: ${msg}`);

    // Return decorated method return value
    return result;
  }

  return replacementFunction;
}

class User {
  @Memoize
  public About(name: string, age: number): string {
    console.log("Executing method About");
    return `N: ${name}, A: ${age}`;
  }
}

const user = new User();
console.log(user.About("name1", 1));

/*
створити декоратор Debounce для методу класу, 
який за отриманим значенням буде відтерміновувати запуск методу
*/
function Debounce(delayMSec: number = 0) {
  return function <T, A extends any[], R>(
    originalMethod: (...args: A) => R,
    context: ClassMethodDecoratorContext<T, (...args: A) => R>
  ) {
    if (context.kind != "method") throw new Error("Method only");

    async function replacementFunction(this: T, ...args: A): Promise<R> {
      console.log(`Method executing paused: ${Date.now()}`);

      await new Promise((f) => setTimeout(f, delayMSec));

      console.log(`Method executing continue: ${Date.now()}`);

      return originalMethod.apply(this, args);
    }

    return replacementFunction;
  };
}

class User1 {
  @Debounce(5000)
  public MethodForDelay() {
    console.log("Executing method MethodForDelay");
  }
}

const user1 = new User1();
console.log(`Before main executing: ${Date.now()}`);
console.log(user1.MethodForDelay());
console.log(`After main executing: ${Date.now()}`);
