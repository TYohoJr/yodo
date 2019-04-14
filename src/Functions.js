export const LoanPayOffMonths = props => {
    let apr = props.loanApr / 100;
    let principal = props.loanAmount;
    let totalInterestPaid = 0;
    let payment = props.loanPayment;
    let totalMonths = 0;
    let interest = (apr / 12) * principal;
    let recursivelyCalculatePayOff = function(principal, payment, interest) {
        if(principal < payment) {
            totalMonths++;
            totalInterestPaid += (apr / 12) * principal;
            return {totalInterestPaid, totalMonths, principal};
        }
        totalMonths++;
        interest = (apr / 12) * principal;
        totalInterestPaid += interest;
        principal = principal - (payment - interest);
        return recursivelyCalculatePayOff(principal, payment, interest);
    }
    return recursivelyCalculatePayOff(principal, payment, interest);
}
