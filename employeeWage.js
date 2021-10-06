const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORING_DAYS = 20;
const MAX_HOURS_IN_MONTH = 160;

function getWorkingHours(empCheck){
    switch(empCheck){
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

let totalEmployeeHours = 0;
let totalWorkingDays = 0;
let empDailyWageArr = new Array();

function calcDailyWage(empHrs){
    return empHrs * WAGE_PER_HOUR;
}

while(totalEmployeeHours<=MAX_HOURS_IN_MONTH && 
    totalWorkingDays < NUM_OF_WORING_DAYS){
        totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHours = getWorkingHours(empCheck);
    totalEmployeeHours+= empHours;
    empDailyWageArr.push(calcDailyWage(empHours));
}
let employeeWage = calcDailyWage(totalEmployeeHours);
console.log("Total Days: "+ totalWorkingDays+" Total Hours: "+ totalEmployeeHours+" Employee Wage: "+ employeeWage);

let totalWage=0;
function sum(dailyWage){
    totalWage+=dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("UC7A- Total Days: "+ totalWorkingDays+ " Total hours: "
        + totalEmployeeHours + " Emp Wage: "+ totalWage);