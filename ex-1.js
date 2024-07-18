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

// O(n)  ในการทำงานเปรียบเทียบ ซ้ายไปขวา ตรวจสอบค่าที่ต้องการค้นหาในทุกตำแหน่งที่ละตัว ความเร็วในการทำงานขึ้นอยู่กับสมาชิกจำนวนในข้อมูล


let students1 = ["Andrew", "Bobby", "Diana", "George", "Hannah", "Isaac", "Jasmine", "John"]
let searchStudent1 = "John";
console.log(findStudentIndex(students1, searchStudent1))


let students2 = ["Alice", "Bob", "Charlie", "Diana", "Ethan", "Fiona"];
let searchStudent2 = "Andrew";
console.log(findStudentIndex(students2, searchStudent2));