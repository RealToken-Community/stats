main()

function main() {
    getApiData();
}


function getApiData() {
    const API_KEY = ''
    const url = "https://api.realt.community/v1/token"

    let nbHouses = 0
    let nbTokens = 0
    let sumUnitTokenPrice = 0
    let sumTotalTokenPrice = 0
    let sumTotalYield = 0
    let sumTotalGrossRentMonth = 0
    let sumTotalGrossRentYear = 0
    let sumTotalNetRentDay = 0
    let sumTotalNetRentMonth = 0
    let sumTotalNetRentYear = 0
    let sumNetRentDayPerToken = 0
    let sumNetRentMonthPerToken = 0
    let sumNetRentYearPerToken = 0

    let xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.setRequestHeader("accept", "*/*");
    xhr.setRequestHeader("X-AUTH-REALT-TOKEN", API_KEY);

    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
        let data = JSON.parse(xhr.responseText)

        nbHouses = data.length

        data.forEach(token => {
            console.log("token::", typeof token, token)
            nbTokens += token.totalTokens
            sumUnitTokenPrice += token.tokenPrice
            sumTotalTokenPrice += token.totalInvestment
            sumTotalYield += token.annualPercentageYield
            sumTotalGrossRentMonth += token.grossRentMonth
            sumTotalGrossRentYear += token.grossRentYear

            sumTotalNetRentDay += token.netRentDay
            sumTotalNetRentMonth += token.netRentMonth
            sumTotalNetRentYear += token.netRentYear
            sumNetRentDayPerToken += token.netRentDayPerToken
            sumNetRentMonthPerToken += token.netRentMonthPerToken
            sumNetRentYearPerToken += token.netRentYearPerToken
        })

        averageYield = sumTotalYield / nbHouses
        averageGrossRentMonth = sumTotalGrossRentMonth / nbHouses
        averageGrossRentYear = sumTotalGrossRentYear / nbHouses
        averageNetRentDay = sumTotalNetRentDay / nbHouses
        averageNetRentMonth = sumTotalNetRentMonth / nbHouses
        averageNetRentYear = sumTotalNetRentYear / nbHouses

        $("#nbHouses").text(new Intl.NumberFormat('us-US').format(nbHouses))
        $("#nbTokens").text(new Intl.NumberFormat('us-US').format(nbTokens))
        $("#sumTotalTokenPrice").text(new Intl.NumberFormat('us-US').format(sumTotalTokenPrice.toFixed(2)))
        $("#sumTotalGrossRentMonth").text(new Intl.NumberFormat('us-US').format(sumTotalGrossRentMonth.toFixed(2)))
        $("#sumTotalGrossRentYear").text(new Intl.NumberFormat('us-US').format(sumTotalGrossRentYear.toFixed(2)))
        $("#sumNetRentDay").text(new Intl.NumberFormat('us-US').format(sumTotalNetRentDay.toFixed(2)))
        $("#sumNetRentMonth").text(new Intl.NumberFormat('us-US').format(sumTotalNetRentMonth.toFixed(2)))
        $("#sumNetRentYear").text(new Intl.NumberFormat('us-US').format(sumTotalNetRentYear.toFixed(2)))
        
        $("#sumUnitTokenPrice").text(new Intl.NumberFormat('us-US').format(sumUnitTokenPrice.toFixed(2)))
        $("#sumNetRentDayPerToken").text(new Intl.NumberFormat('us-US').format(sumNetRentDayPerToken.toFixed(2)))
        $("#sumNetRentMonthPerToken").text(new Intl.NumberFormat('us-US').format(sumNetRentMonthPerToken.toFixed(2)))
        $("#sumNetRentYearPerToken").text(new Intl.NumberFormat('us-US').format(sumNetRentYearPerToken.toFixed(2)))
        $("#averageYield").text(new Intl.NumberFormat('us-US').format(averageYield.toFixed(2)))
        $("#averageGrossRentMonth").text(new Intl.NumberFormat('us-US').format(averageGrossRentMonth.toFixed(2)))
        $("#averageGrossRentYear").text(new Intl.NumberFormat('us-US').format(averageGrossRentYear.toFixed(2)))
        $("#averageNetRentDay").text(new Intl.NumberFormat('us-US').format(averageNetRentDay.toFixed(2)))
        $("#averageNetRentMonth").text(new Intl.NumberFormat('us-US').format(averageNetRentMonth.toFixed(2)))
        $("#averageNetRentYear").text(new Intl.NumberFormat('us-US').format(averageNetRentYear.toFixed(2)))
    }};

    xhr.send();
}

function getTokensCoordinates() {

}
