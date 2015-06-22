function getB(A){
	return (1000 * (1000 - 2*A))/(2000 - 2*A);
}

var max = 0;

var index;
for(index = 1; index <= 500; index++){
	var B = getB(index);
	var C = 1000 - B - index;
	var left = index*index + B*B;
	var right = C*C;
	if(left == right){
		console.log(index*B*C);
	}
}