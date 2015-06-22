var i, j, sum = 0;
for(i = 2; i <= 100; i++){
	for(j = 1; j < i; j++){
		sum+=i*j;
	}
}
console.log(sum*2);