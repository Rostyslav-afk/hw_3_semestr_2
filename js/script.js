// #1 Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
 const celsius = 50;
 const farangate = (celsius * 1.8 ) + 32;
 console.log("Farangate:",farangate); 

// #2 Створити змінну для зберігання кількості днів у місяці. Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
 const dayMonth = 30;
 const minutesMonth = dayMonth * 24 * 60;
 const hoursMonth = dayMonth * 24;
 console.log("Minutes:",minutesMonth, "Hours:", hoursMonth);

 // #3 Створити змінні для зберігання рівня здоров'я та енергії гравця в грі. Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
const healthBar = 100;
const energyBar = 250;
const resultFirst = healthBar - 20;
const resultSecond = energyBar - 150;
console.log("HealthBar(org 100):", resultFirst, "EnergyBar(org 250):", resultSecond);

// #4 Створити змінну для зберігання суми покупки в магазині. Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
 const totalPrice = 100;
 const rebaja = totalPrice * 0.1 ;
 const newPrice = totalPrice - rebaja;
 console.log("Ціна зі знижкою:", newPrice + "UAH");

 // #5 Створити змінну для зберігання числа з плаваючою комою. Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
const pointNumber = 1.6;
console.log(Math.floor(pointNumber))

// #6 Створити змінну для зберігання рядка, який містить числа з плаваючою комою. Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
const floatNumber = "6.78wad12";
console.log(Number.parseFloat(floatNumber));

// #7 Створити змінну для зберігання рядка, який містить ціле число. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
const intNumber = "23";
console.log(Number.parseInt(intNumber));

// #8 Створити змінну для зберігання числа. Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
const vNumber = 9;
console.log("V9 = " + Math.sqrt(vNumber));

// #9 Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка. Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль. Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
const theNumber = "12.a2ad";
console.log(Number.parseInt(theNumber));
console.log(theNumber.toString());



