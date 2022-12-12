//Function to convert age from dob

export function calculate_age(dob) {

    let birthDate = new Date(dob)
    let diff_ms = Date.now() - birthDate.getTime();
    let age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);

}