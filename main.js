function age_calc(name, relationship, age) {
	return `My ${relationship}, ${name}, is ${age} years old (${age*12} months)`;
}

console.log(age_calc("Barb", "mom", 62));
console.log(age_calc("Jeff", "dad", 60));
console.log(age_calc("Jeff", "brother", 24));
	    
