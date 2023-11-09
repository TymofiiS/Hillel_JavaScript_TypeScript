"use strict";
class FilterBase {
    constructor(fieldName, param1, param2) {
        this.initialDataIsCorrect = (item, checkBoth = false) => {
            if (this.parameterOne === undefined)
                return false;
            if (this.fieldName === undefined)
                return false;
            if (item[this.fieldName] === undefined)
                return false;
            if (checkBoth &&
                this.parameterTwo === undefined &&
                typeof this.parameterOne !== "number")
                return false;
            return true;
        };
        this.isArray = function (obj) {
            return Array.isArray(obj);
        };
        this.parameterOne = param1;
        this.parameterTwo = param2;
        this.fieldName = fieldName;
    }
}
class FilterByOneProperty extends FilterBase {
    constructor(fieldName, param1) {
        super(fieldName, param1);
        this.doFiltering = (item) => {
            if (!this.initialDataIsCorrect(item))
                return false;
            if (this.isArray(item[this.fieldName])) {
                return item[this.fieldName].includes(this.parameterOne);
            }
            else {
                return this.parameterOne === item[this.fieldName];
            }
        };
    }
}
class FilterByRange extends FilterBase {
    constructor(fieldName, param1, param2) {
        super(fieldName, param1, param2);
        this.doFiltering = (item) => {
            if (!this.initialDataIsCorrect(item, true))
                return false;
            return (this.parameterOne <= item[this.fieldName] &&
                item[this.fieldName] <= this.parameterTwo);
        };
    }
}
class FilteringList {
    constructor(initialList) {
        this.initialList = [];
        this.filtersList = [];
        this.filteredList = () => {
            let result = [];
            for (let item of this.initialList) {
                let correct = true;
                for (let filter of this.filtersList) {
                    if (filter.doFiltering(item))
                        continue;
                    correct = false;
                    break;
                }
                if (!correct)
                    continue;
                result.push(item);
            }
            return result;
        };
        this.addFilter = (filter) => {
            return this.filtersList.push(filter);
        };
        this.removeFilterByIndex = (index) => {
            if (this.filtersList.length <= index)
                return;
            this.filtersList.slice(index, 1);
        };
        this.initialList = initialList;
    }
}
/*

У нас визначено три типи фільтрів:

Фільтр відповідності має поле filter
Фільтр діапазону має поле filter і filterTo
Фільтр пошуку за значеннями має поле values

Кожен список містить стан його фільтрів, який може бути змінений тільки методом applySearchValue або applyFiltersValue (за наявності додаткових фільтрів)

Вам необхідно подумати про поділ вашого коду на різні сутності, інтерфеси і типи, щоб зробити ваше рішення типобезпечним. Реалізація всіх методів не є необхідною - це за бажанням.
*/
let films = [
    {
        name: "Name1",
        yearRelease: 2020,
        rate: 3,
        awards: ["award1", "award2", "award3"],
    },
    {
        name: "Name3",
        yearRelease: 2022,
        rate: 5,
        awards: ["award10", "award2", "award13"],
    },
    {
        name: "Name2",
        yearRelease: 2021,
        rate: 1,
        awards: ["award1", "award7", "award3"],
    },
    {
        name: "Name4",
        yearRelease: 2022,
        rate: 7,
        awards: ["award3", "award2", "award7"],
    },
    {
        name: "Name7",
        yearRelease: 2023,
        rate: 3,
        awards: ["award13", "award2", "award7"],
    },
];
let filmCategories = [
    { name: "Category5", films: [films[2], films[3], films[0]] },
    { name: "Category1", films: [films[1], films[2], films[0]] },
    { name: "Category2", films: [films[0], films[3], films[1]] },
    { name: "Category3", films: [films[0], films[2], films[1]] },
    { name: "Category4", films: [films[4], films[1], films[3]] },
];
let filteredFilms = new FilteringList(films);
filteredFilms.addFilter(new FilterByOneProperty("awards", "award2"));
//filteredFilms.addFilter(new FilterByOneProperty("name", "Name4"));
filteredFilms.addFilter(new FilterByRange("yearRelease", 2021, 2023));
filteredFilms.addFilter(new FilterByRange("rate", 4, 7));
console.log(filteredFilms.filteredList());
let filteredFilmCategories = new FilteringList(filmCategories);
filteredFilmCategories.addFilter(new FilterByOneProperty("name", "Category2"));
console.log(filteredFilmCategories.filteredList());
