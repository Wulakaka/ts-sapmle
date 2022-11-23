declare namespace myLib {
    function makeGreeting(s: string): string;

    let numberOfGreetings: number;
}

let result = myLib.makeGreeting("hello, world");
console.log("The computed greeting is: " + result);

let count = myLib.numberOfGreetings;
console.log("The count is " + count);

greet({
    greeting: 'hello world',
    duration: 4000
})

interface GreetingSettings {
    greeting: string;
    duration?: number;
    color?: string;
}
declare function greet(setting: GreetingSettings): void;
