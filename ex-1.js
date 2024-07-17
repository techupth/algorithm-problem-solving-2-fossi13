function findStudentIndex(students, searchStudent) {
	// เริ่มเขียนโค้ดตรงนี้จ้า

	for (let i = 0; i < students.length; i++) {
		if (students[i] === searchStudent) {
			return i;
		}
	}
	return -1;
	

}

// ตอบคำถามตรงนี้จ้า

//ใช้ O(n) ในการทำงานเปรียบเทียบ แต่ละค่า ถ้ามี ให้แสดงค่าที่ length ว่าอยู่ที่เท่าไร แต่ถ้าไม่มี ให้แสดง ค่า -1


let students1 = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
let searchStudent1 = "John";
console.log(findStudentIndex(students1, searchStudent1))


let students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
let searchStudent2 = "Andrew";
console.log(findStudentIndex(students2, searchStudent2));