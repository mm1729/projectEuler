var primes = [2];
var count = 1;
var num;
var done = false;
var prime = false;
for(num = 3; !done; num = num + 2){
	var i;
	for(i = 0; i < primes.length; i++){
		
		if(num % primes[i] == 0){
			break;
		} else if (primes[i] == primes[primes.length - 1]){
			primes[primes.length] = num;
		}			
	}

	if(primes.length == 10001){
		done = true;
	}

}
console.log(primes[primes.length - 1]);