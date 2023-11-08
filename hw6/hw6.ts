/*
У вас є дві сутності - список фільмів і список категорій фільмів.
Кожен фільм містить поля: назва, рік випуску, рейтинг, список нагород.
Категорія містить поля: назва і фільми.
*/
type BaseFilm = {
  [key: string]: any;
};

interface IFilm extends BaseFilm {
  name: string;
  yearRelease: number;
  rate: number;
  awards: string[];
}

interface IFilmCategory extends BaseFilm {
  name: string;
  films: IFilm[];
}

/*
У кожного списку є пошук за ім'ям (це, по суті, фільтрація), 
у списку фільмів є додаткова фільтрація за роком випуску, рейтингом і нагородами.

У нас визначено три типи фільтрів:

Фільтр відповідності має поле filter
Фільтр діапазону має поле filter і filterTo
Фільтр пошуку за значеннями має поле values

Кожен список містить стан його фільтрів, який може бути змінений тільки методом 
applySearchValue або applyFiltersValue (за наявності додаткових фільтрів)
*/
interface IFilter {
  fieldName: string;
  parameterOne: string | number;
  parameterTwo?: number;
  doFiltering: <T extends BaseFilm>(item: T) => boolean;
}

abstract class FilterBase implements IFilter {
  constructor(fieldName: string, param1: string | number, param2?: number) {
    this.parameterOne = param1;
    this.parameterTwo = param2;
    this.fieldName = fieldName;
  }
  abstract doFiltering: <T extends BaseFilm>(item: T) => boolean;

  protected initialDataIsCorrect = <T extends BaseFilm>(
    item: T,
    checkBoth: boolean = false
  ): boolean => {
    if (this.parameterOne === undefined) return false;
    if (this.fieldName === undefined) return false;
    if (item[this.fieldName] === undefined) return false;

    if (
      checkBoth &&
      this.parameterTwo === undefined &&
      typeof this.parameterOne !== "number"
    )
      return false;

    return true;
  };

  protected isArray = function (obj: any): obj is Array<any> {
    return Array.isArray(obj);
  };

  fieldName: string;
  parameterOne: string | number;
  parameterTwo?: number | undefined;
}

class FilterByOneProperty extends FilterBase {
  constructor(fieldName: string, param1: string | number) {
    super(fieldName, param1);
  }

  doFiltering = <T extends BaseFilm>(item: T) => {
    if (!this.initialDataIsCorrect(item)) return false;

    if (this.isArray(item[this.fieldName])) {
      return item[this.fieldName].includes(this.parameterOne);
    } else {
      return this.parameterOne === item[this.fieldName];
    }
  };
}

class FilterByRange extends FilterBase {
  constructor(fieldName: string, param1: string | number, param2: number) {
    super(fieldName, param1, param2);
  }

  doFiltering = <T extends BaseFilm>(item: T) => {
    if (!this.initialDataIsCorrect(item, true)) return false;
    return (
      this.parameterOne <= item[this.fieldName] &&
      item[this.fieldName] <= (this.parameterTwo as unknown as number)
    );
  };
}

interface IFilteringList<T extends BaseFilm> {
  initialList: T[];
  filtersList: IFilter[];

  filteredList: () => T[];
  addFilter: (filter: IFilter) => number;
  removeFilterByIndex: (index: number) => void;
}

class FilteringList<T extends BaseFilm> implements IFilteringList<T> {
  initialList: T[] = [];
  filtersList: IFilter[] = [];

  constructor(initialList: T[]) {
    this.initialList = initialList;
  }
  filteredList = (): T[] => {
    let result: T[] = [];

    for (let item of this.initialList) {
      let correct: boolean = true;

      for (let filter of this.filtersList) {
        if (filter.doFiltering(item)) continue;
        correct = false;
        break;
      }
      if (!correct) continue;

      result.push(item);
    }

    return result;
  };

  addFilter = (filter: IFilter): number => {
    return this.filtersList.push(filter);
  };

  removeFilterByIndex = (index: number): void => {
    if (this.filtersList.length <= index) return;
    this.filtersList.slice(index, 1);
  };
}

/*
Вам необхідно подумати про поділ вашого коду на різні сутності, інтерфеси і типи, 
щоб зробити ваше рішення типобезпечним. Реалізація всіх методів не є необхідною - це за бажанням.
*/

let films: IFilm[] = [
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

let filmCategories: IFilmCategory[] = [
  { name: "Category5", films: [films[2], films[3], films[0]] },
  { name: "Category1", films: [films[1], films[2], films[0]] },
  { name: "Category2", films: [films[0], films[3], films[1]] },
  { name: "Category3", films: [films[0], films[2], films[1]] },
  { name: "Category4", films: [films[4], films[1], films[3]] },
];

let filteredFilms = new FilteringList<IFilm>(films);
filteredFilms.addFilter(new FilterByOneProperty("awards", "award2"));
//filteredFilms.addFilter(new FilterByOneProperty("name", "Name4"));
filteredFilms.addFilter(new FilterByRange("yearRelease", 2021, 2023));
filteredFilms.addFilter(new FilterByRange("rate", 4, 7));
console.log(filteredFilms.filteredList());

let filteredFilmCategories = new FilteringList<IFilmCategory>(filmCategories);
filteredFilmCategories.addFilter(new FilterByOneProperty("name", "Category2"));
console.log(filteredFilmCategories.filteredList());
