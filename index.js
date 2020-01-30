var katzDeliLine = [];

<<<<<<< HEAD
// takeANumber accepts 1) current line, 2) new person's name.
// --> returns welcome message to new person including their place in line.
// ex: "Welcome, Ada. You are number 1 in line."
function takeANumber (line, name) {
	line.push(name);
	return `Welcome, ${name}. You are number ${line.length} in line.`;
}


// nowSeving accepts 1) current line.
// --> returns first person in line, then removes them from the line.
function nowServing (line) {
  if (line.length < 1) {
        return "There is nobody waiting to be served!";
    }
  
=======
    
// takeANumber accepts 1) current line, 2) new person's name.
// --> returns welcome message to new person including their place in line.
// ex: "Welcome, Ada. You are number 1 in line."
const takeANumber = function(line, name) {
	katzDeliLine.push(name);
	return `Welcome ${name}. You are number ${line.length} in line.`;
}

// nowSeving accepts 1) current line.
// --> returns first person in line, then removes them from the line.
const nowServing = function(line) {
>>>>>>> 5642b030b9570269f997148a0f6352df049043a0
	let currentPerson = line[0];
	line.shift();
	return `Currently serving ${currentPerson}.`;
}


// currentLine accepts 1) current line
// --> returns the current line as a string formatted as:
// "The line is currently: 1. Ada, 2. Grace"
// **IF** the line is empty, "The line is currently empty"


function currentLine (line) {

	if (line.length < 1) {
        return "The line is currently empty.";
    }

	let numberedNames = [];

=======
const currentLine = function(line) {

	if (line.length < 1) {
        return "The line is currently empty.";
      }

	let numberedNames = [];

>>>>>>> 5642b030b9570269f997148a0f6352df049043a0
	for (let i = 0; i < line.length; i++) {
		let name = line[i];
		numberedNames.push(`${i + 1}. ${name}`);
	}
	let nameList = numberedNames.join(', ');
	return `The line is currently: ${nameList}`;
<<<<<<< HEAD
}
=======
}
>>>>>>> 5642b030b9570269f997148a0f6352df049043a0
