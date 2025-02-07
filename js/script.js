// #1 Створити змінні для зберігання температури за Цельсієм та Фаренгейтом. Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
 const kelvin = 50;
 const farangate = (kelvin - 273.15 ) * 1.8 + 32;
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

 // #5
