// The clock shows 'h' hours, 'm' minutes and 's' seconds after midnight.
// Your task is to make the 'past' function return the time converted to milliseconds.
// More examples in the test cases below.

function past(h, m, s){
    const msInHour = h * 60 * 60;
    const msInMinutes = m * 60;
    const msInSeconds = s;
    const milliseconds = (msInHour + msInMinutes + msInSeconds)*1000;
    return milliseconds;

}

module.exports = {
    past
};