/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */

/**
 * Represents a Holberton class.
 */
export class HolbertonClass {
  /**
   * Creates an instance of HolbertonClass.
   * @param {number} year - The year the class was created.
   * @param {string} location - The location of the class.
   */
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  /**
   * Gets the year of the class.
   * @returns {number} The year of the class.
   */
  get year() {
    return this._year;
  }

  /**
   * Gets the location of the class.
   * @returns {string} The location of the class.
   */
  get location() {
    return this._location;
  }
}

/**
 * Represents a student at Holberton.
 */
export class StudentHolberton {
  /**
   * Creates an instance of StudentHolberton.
   * @param {string} firstName - The first name of the student.
   * @param {string} lastName - The last name of the student.
   * @param {HolbertonClass} holbertonClass - The class the student is enrolled in.
   */
  constructor(firstName, lastName, holbertonClass) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._holbertonClass = holbertonClass;
  }

  /**
   * Gets the full name of the student.
   * @returns {string} The full name of the student.
   */
  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  /**
   * Gets the class the student is enrolled in.
   * @returns {HolbertonClass} The class of the student.
   */
  get holbertonClass() {
    return this._holbertonClass;
  }

  /**
   * Gets a description of the student including their full name, class year, and location.
   * @returns {string} The full description of the student.
   */
  get fullStudentDescription() {
    return `${this.fullName} - ${this.holbertonClass.year} - ${this.holbertonClass.location}`;
  }
}

// Sample data
const class2019 = new HolbertonClass(2019, 'San Francisco');
const class2020 = new HolbertonClass(2020, 'San Francisco');

const student1 = new StudentHolberton('Guillaume', 'Salva', class2020);
const student2 = new StudentHolberton('John', 'Doe', class2020);
const student3 = new StudentHolberton('Albert', 'Clinton', class2019);
const student4 = new StudentHolberton('Donald', 'Bush', class2019);
const student5 = new StudentHolberton('Jason', 'Sandler', class2019);

const listOfStudents = [student1, student2, student3, student4, student5];
export default listOfStudents;
