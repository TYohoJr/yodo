export const LoanPayOffMonths = props => {
    if (!props.loanAmount || !props.loanApr || !props.loanPayment) {
        return alert('Please fill out all fields.')
    }
    let apr = Number(props.loanApr) / 100;
    let principal = Number(props.loanAmount);
    let totalInterestPaid = 0;
    let payment = Number(props.loanPayment);
    let totalMonths = 0;
    let interest = (apr / 12) * principal;
    if (interest > payment) {
        return alert('Your payment is less than the interest, causing this loan to never be payed off!');
    }
    let recursivelyCalculatePayOff = function (principal, payment, interest) {
        if (principal < payment) {
            totalMonths++;
            totalInterestPaid += (apr / 12) * principal;
            return {
                'Months To Pay Off': totalMonths,
                'Total Interest Paid': `$ ${totalInterestPaid.toFixed(2)}`,
                'Last Months Payment': `$ ${principal.toFixed(2)}`
            };
        }
        totalMonths++;
        interest = (apr / 12) * principal;
        totalInterestPaid += interest;
        principal = principal - (payment - interest);
        return recursivelyCalculatePayOff(principal, payment, interest);
    }
    return recursivelyCalculatePayOff(principal, payment, interest);
}

export const LoanPayOffPayment = props => {
    return 'Lots-O-Months'
}
