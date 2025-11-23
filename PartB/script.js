let nums =[10,3,7,20,13,2];
let squares = nums.map((n)=> n*n);
console.log("Squares:",squares);

function isPrime(n){
    if(n < 2) return false;
    for(let i=2; i<=Math.sqrt(n); i++){
        if(n % i === 0) return false;
    }
    return true;
}
let primes = nums.filter(isPrime);
console.log("Primes:",primes);

let sum = nums.reduce((acc,curr) => acc + curr, 0);
console.log("Sum:",sum);

let sortedDesc = [...nums].sort((a,b) => b - a);
console.log("Sorted:",sortedDesc);

function displayCar()
{
 console.log("Vehicle Typr: Car");
}
function displayTruck()
{
 console.log("Vehicle Typr: Truck");
}
function displayBike()
{
 console.log("Vehicle Typr: Bike");
}
function vehicleInfo(vehicleCategory,callbackFn)
{
    console.log("Category:",vehicleCategory);
    callbackFn;
}
vehicleInfo("Car",displayCar);
vehicleInfo("Truck",displayTruck);
vehicleInfo("Bike",displayBike);