let output = document.getElementById("input");

const Display = (num) => {
	output.value += num;
}

const Calculate = () => {
	try {
		output.value = eval(output.value);
	} catch (err) {
		alert("Invalid Syntax");
	}
}
const Clear = () => {
	output.value = "";
}
const Delete = () => {
	output.value = output.value.slice(0, -1);
}
