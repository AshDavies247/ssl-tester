export function secondsToTime(s: number) {
    const seconds = s.toFixed();
    const minutes = (s / 60).toFixed();
    const hours = (s / (60 * 60)).toFixed();
    const days = (s / (60 * 60 * 24)).toFixed();

    if (parseInt(seconds) < 60) return `${seconds} Sec`;
    else if (parseInt(minutes) < 60) return `${minutes} Min`;
    else if (parseInt(hours) < 24) return `${hours} Hrs`;
    else return `${days} Days`;
}
