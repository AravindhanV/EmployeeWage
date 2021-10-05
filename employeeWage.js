//UC1
{
    const IS_ABSENT = 0;
    let empCheck = Math.floor(Math.random() * 10) % 2;
    if (empCheck === IS_ABSENT) {
        console.log("UC1: Employee Absent");
        return;
    } else {
        console.log("UC1: Employee Present");
    }
}


{
    const IS_PART_TIME = 1;
    const IS_FULL_TIME = 2;
    const PART_TIME_HOURS = 4;
    const FULL_TIME_HOURS = 8;
    const WAGE_PER_HOUR = 20;

    function getEmployeeHours(empCheck) {
        switch (empCheck) {
            case IS_PART_TIME:
                return PART_TIME_HOURS;
            case IS_FULL_TIME:
                return FULL_TIME_HOURS;
            default:
                return 0;
        }
    }

    const NO_OF_WORKING_DAYS = 20;
    const MAX_HRS_IN_MONTH = 160;

    let totalHrs = 0;
    let totalDays = 0;
    while (totalHrs < MAX_HRS_IN_MONTH && totalDays < NO_OF_WORKING_DAYS) {
        let empCheck = Math.floor(Math.random() * 10) % 3;
        totalHrs += getEmployeeHours(empCheck);
        totalDays++;
    }

    let empWage = totalHrs * WAGE_PER_HOUR;
    console.log("Days: " + totalDays + ", Hours: " + totalHrs + ", Wage: " + empWage);
}
