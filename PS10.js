var primes = [2];
var count = 1;
var num;
for(num = 3; num < 2000000; num = num + 2){
	var i;
	for(i = 0; i < primes.length; i++){
		
		if(num % primes[i] == 0){
			break;
		} else if (primes[i] == primes[primes.length - 1]){
			primes[primes.length] = num;
		}			
	}
}
console.log("primes length: " + primes.length);

var j, sum = 0;
for(j in primes){
	sum += primes[j];
}

console.log("sum: " + sum);