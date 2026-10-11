// Finally!! its a logical Task :)


// The answer using Built-in Functions Or Built-in String Methods،
// .. .trim .. .replace .

function cleanText(text) {
  return text.trim() // حذف الفراغات من بداية النص ونهايته
  .replace(/\s+/g, " "); // استبدال كل مجموعة فراغات بمسافة واحدة
}

let text = prompt("Enter your text:");

console.log(cleanText(text));




//----------------------------------------------

//Another Answer using Arrow Function and .split .filter .join


let cleanText = (text) => {
  return text
    .split(/\s+/) // تقسيم النص إلى مصفوفة عند الفراغات
    .filter((word) => word !== "") // إزالة العناصر النصية الفارغة
    .join(" "); // جمع الكلمات بمسافة واحدة بينها
};

let text2 = prompt("Enter your text:");
console.log(cleanText(text2));


