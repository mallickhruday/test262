function __consolePrintHandle__(msg){
	print(msg);
}

function $DONE(){
	if(arguments.length === 0)
		__consolePrintHandle__('Test262:AsyncTestComplete');
	else
		__consolePrintHandle__('Error: ' + arguments[0]);
}