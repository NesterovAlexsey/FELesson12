// Задание 1
// У вас есть массив объектов:car
// Создайте на основе страрого массива новый массив объектов по образу: 
// [{brand: "BMW", isDiesel: true}, {brand: "Mercedes", isDiesel: false}...]

const cars = [
    { brand: "BMW", price: 20000, isDiesel: true },
    { brand: "Mercedes", price: 22000, isDiesel: false },
    { brand: "Porshe", price: 50000, isDiesel: true },
    { brand: "Nissan", price: 25000, isDiesel: false },
];

const carNameAndOil = cars.map((car) => {
    return `brand: "${car.brand}", isDisel: ${car.isDiesel}`
}); 

// Задание 2
// Создайте новый массив, где оставьте только машины с дизельным двигателем.

const carsWithDiesel = cars.filter((car) => car.isDiesel);

// Задание 3
// Создайте новый массив, где оставьте только машины не с дизельным двигателем.

const carsWithPetrol = cars.filter((car) => !car.isDiesel)

// Задание 4
// Посчитайте общую стоимость всех машин не с дизельным двигателем.

const carsPetrolPrice = carsWithPetrol.reduce((sum, car) => sum + car.price, 0);

// Задание 5
// Повысьте цену всех машин в массиве на 20%.

cars.forEach((car) => car.price = car.price*1.2);     

// Задание 6
// Создайте новый массив, где все дизельные машины заменены на 
// { brand: "Tesla", price: 25000, isDiesel: false }

const carsTesla = cars.map(car => {
    if (car.isDiesel) {
    return  {brand: "Tesla", price: 25000, isDiesel: false}
    }
    return car;
});
