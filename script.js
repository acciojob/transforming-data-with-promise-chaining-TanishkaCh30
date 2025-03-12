let btn = document.getElementById("btn");
let inputValue = document.getElementById("ip");
let op = document.getElementById("output");

btn.addEventListener("click",()=>{
	let value = inputValue.value;
	new Promise((resolve,reject)=>{
		setTimeout(()=>{
		op.innerText = `Result: ${value}`;
		resolve(value);
	},2000)
	})
	.then((value)=>{
		return new Promise((resolve,reject)=>{
		setTimeout(()=>{
			value = value*2;
			op.innerText = `Result: ${value}`;
			 resolve(value);
		},2000)
		})
			})
		.then((value)=>{
			return new Promise((resolve,reject)=>{
				setTimeout(()=>{
					value = value-3;
					op.innerText = `Result: ${value}`;
					resolve(value);
				},1000)
			})
		})
	.then((value)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				value = value/2;
				op.innerText = `Result: ${value}`;
				resolve(value);
			},1000)
		})
	})
	.then((value)=>{
		return new Promise((resolve,reject)=>{
			setTimeout(()=>{
				value = value+10;
				op.innerText = `Final Result: ${value}`;
				// resolve(value);
			},1000);
		})
	})
})