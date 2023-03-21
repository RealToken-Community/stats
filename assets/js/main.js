/*
*	Dimension by HTML5 UP
*	html5up.net | @ajlkn
*	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

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
	let houseDetroit = 0
	let houseCleveland = 0
	let houseBirmingham = 0
	let houseKissimmee = 0
	let houseChicago = 0
	let houseJackson = 0
	let houseRochester = 0
	let houseToledo = 0
	let houseHighlandPark = 0
	let houseEastCleveland = 0
	let houseAkron = 0
	let houseDearbornHeights = 0
	let houseDeerfieldBeach = 0
	let propertyManagement = 0
	let realtPlatform = 0
	let insurance = 0
	let propertyTaxes = 0
	let utilities = 0
	let initialMaintenanceReserve = 0
	let propertyManagementYear = 0
	let realtPlatformYear = 0
	let insuranceYear = 0
	let propertyTaxesYear = 0
	let utilitiesYear = 0
	let totalsquareFeet = 0
	let totallotSize = 0
	let totalUnits = 0
	let totalrentedUnits = 0
	let totalvacantUnits = 0

	let xhr = new XMLHttpRequest();
	xhr.open("GET", url);

	xhr.setRequestHeader("accept", "*/*");
	xhr.setRequestHeader("X-AUTH-REALT-TOKEN", API_KEY);

	xhr.onreadystatechange = function () {
		if (xhr.readyState === 4) {
			let data = JSON.parse(xhr.responseText)


			data.forEach(token => {
				console.log("token::", typeof token, token)

				if (!token.fullName.match(/OLD-/g)) {
					nbHouses += 1
				}

				if (!token.fullName.match(/OLD-/g)) {
					nbTokens += token.totalTokens
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumUnitTokenPrice += token.tokenPrice
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumTotalTokenPrice += token.totalInvestment
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumTotalYield += token.annualPercentageYield
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumTotalGrossRentMonth += token.grossRentMonth
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumTotalGrossRentYear += token.grossRentYear
				}

				if (!token.fullName.match(/OLD-/g)) {
					sumTotalNetRentDay += token.netRentDay
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumTotalNetRentMonth += token.netRentMonth
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumTotalNetRentYear += token.netRentYear
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumNetRentDayPerToken += token.netRentDayPerToken
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumNetRentMonthPerToken += token.netRentMonthPerToken
				}
				if (!token.fullName.match(/OLD-/g)) {
					sumNetRentYearPerToken += token.netRentYearPerToken
				}


				if ((token.fullName.match(/Detroit/g)) && (!token.fullName.match(/OLD-/g))) {
					houseDetroit += 1
				}
				if ((token.fullName.match(/, Cleveland/g)) && (!token.fullName.match(/OLD-/g))) {
					houseCleveland += 1
				}
				if ((token.fullName.match(/Birmingham/g)) && (!token.fullName.match(/OLD-/g))) {
					houseBirmingham += 1
				}
				if ((token.fullName.match(/Kissimmee/g)) && (!token.fullName.match(/OLD-/g))) {
					houseKissimmee += 1
				}
				if ((token.fullName.match(/Chicago/g)) && (!token.fullName.match(/OLD-/g))) {
					houseChicago += 1
				}
				if ((token.fullName.match(/Jackson/g)) && (!token.fullName.match(/OLD-/g))) {
					houseJackson += 1
				}
				if ((token.fullName.match(/Rochester/g)) && (!token.fullName.match(/OLD-/g))) {
					houseRochester += 1
				}
				if ((token.fullName.match(/Toledo/g)) && (!token.fullName.match(/OLD-/g))) {
					houseToledo += 1
				}
				if ((token.fullName.match(/Highland Park/g)) && (!token.fullName.match(/OLD-/g))) {
					houseHighlandPark += 1
				}
				if ((token.fullName.match(/, East Cleveland/g)) && (!token.fullName.match(/OLD-/g))) {
					houseEastCleveland += 1
				}
				if ((token.fullName.match(/, Akron/g)) && (!token.fullName.match(/OLD-/g))) {
					houseAkron += 1
				}
				if ((token.fullName.match(/, Dearborn Heights/g)) && (!token.fullName.match(/OLD-/g))) {
					houseDearbornHeights += 1
				}
				if ((token.fullName.match(/, Deerfield Beach/g)) && (!token.fullName.match(/OLD-/g))) {
					houseDeerfieldBeach += 1
				}

				if (!token.fullName.match(/OLD-/g)) {
					propertyManagement += token.propertyManagement
				}
				if (!token.fullName.match(/OLD-/g)) {
					realtPlatform += token.realtPlatform
				}
				if (!token.fullName.match(/OLD-/g)) {
					insurance += token.insurance
				}
				if (!token.fullName.match(/OLD-/g)) {
					propertyTaxes += token.propertyTaxes
				}
				if (!token.fullName.match(/OLD-/g)) {
					utilities += token.utilities
				}
				if (!token.fullName.match(/OLD-/g)) {
					initialMaintenanceReserve += token.initialMaintenanceReserve
				}

				propertyManagementYear = propertyManagement * 12
				realtPlatformYear = realtPlatform * 12
				insuranceYear = insurance * 12
				propertyTaxesYear = propertyTaxes * 12
				utilitiesYear = utilities * 12

				if (!token.fullName.match(/OLD-/g)) {
					totalsquareFeet += token.squareFeet
				}
				if (!token.fullName.match(/OLD-/g)) {
					totallotSize += token.lotSize
				}
				if (!token.fullName.match(/OLD-/g)) {
					totalUnits += token.totalUnits
				}
				if (!token.fullName.match(/OLD-/g)) {
					totalrentedUnits += token.rentedUnits
				}



			})

			averageYield = sumTotalYield / nbHouses
			averageGrossRentMonth = sumTotalGrossRentMonth / nbHouses
			averageGrossRentYear = sumTotalGrossRentYear / nbHouses
			averageNetRentDay = sumTotalNetRentDay / nbHouses
			averageNetRentMonth = sumTotalNetRentMonth / nbHouses
			averageNetRentYear = sumTotalNetRentYear / nbHouses

			propertyManagementYear = propertyManagement * 12
			realtPlatformYear = realtPlatform * 12
			insuranceYear = insurance * 12
			propertyTaxesYear = propertyTaxes * 12
			utilitiesYear = utilities * 12

			totalvacantUnits = totalUnits - totalrentedUnits

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

			$("#houseDetroit").text(new Intl.NumberFormat('us-US').format(houseDetroit))
			$("#houseCleveland").text(new Intl.NumberFormat('us-US').format(houseCleveland))
			$("#houseBirmingham").text(new Intl.NumberFormat('us-US').format(houseBirmingham))
			$("#houseKissimmee").text(new Intl.NumberFormat('us-US').format(houseKissimmee))
			$("#houseChicago").text(new Intl.NumberFormat('us-US').format(houseChicago))
			$("#houseJackson").text(new Intl.NumberFormat('us-US').format(houseJackson))
			$("#houseRochester").text(new Intl.NumberFormat('us-US').format(houseRochester))
			$("#houseToledo").text(new Intl.NumberFormat('us-US').format(houseToledo))
			$("#houseHighlandPark").text(new Intl.NumberFormat('us-US').format(houseHighlandPark))
			$("#houseEastCleveland").text(new Intl.NumberFormat('us-US').format(houseEastCleveland))
			$("#houseAkron").text(new Intl.NumberFormat('us-US').format(houseAkron))
			$("#houseDearbornHeights").text(new Intl.NumberFormat('us-US').format(houseDearbornHeights))
			$("#houseDeerfieldBeach").text(new Intl.NumberFormat('us-US').format(houseDeerfieldBeach))

			$("#propertyManagement").text(new Intl.NumberFormat('us-US').format(propertyManagement.toFixed(2)))
			$("#realtPlatform").text(new Intl.NumberFormat('us-US').format(realtPlatform.toFixed(2)))
			$("#insurance").text(new Intl.NumberFormat('us-US').format(insurance.toFixed(2)))
			$("#propertyTaxes").text(new Intl.NumberFormat('us-US').format(propertyTaxes.toFixed(2)))
			$("#utilities").text(new Intl.NumberFormat('us-US').format(utilities.toFixed(2)))
			$("#initialMaintenanceReserve").text(new Intl.NumberFormat('us-US').format(initialMaintenanceReserve.toFixed(2)))

			$("#propertyManagementYear").text(new Intl.NumberFormat('us-US').format(propertyManagementYear.toFixed(2)))
			$("#realtPlatformYear").text(new Intl.NumberFormat('us-US').format(realtPlatformYear.toFixed(2)))
			$("#insuranceYear").text(new Intl.NumberFormat('us-US').format(insuranceYear.toFixed(2)))
			$("#propertyTaxesYear").text(new Intl.NumberFormat('us-US').format(propertyTaxesYear.toFixed(2)))
			$("#utilitiesYear").text(new Intl.NumberFormat('us-US').format(utilitiesYear.toFixed(2)))

			$("#totalsquareFeet").text(new Intl.NumberFormat('us-US').format(totalsquareFeet.toFixed(2)))
			$("#totallotSize").text(new Intl.NumberFormat('us-US').format(totallotSize.toFixed(2)))
			$("#totalUnits").text(new Intl.NumberFormat('us-US').format(totalUnits.toFixed(2)))
			$("#totalrentedUnits").text(new Intl.NumberFormat('us-US').format(totalrentedUnits.toFixed(2)))
			$("#totalvacantUnits").text(new Intl.NumberFormat('us-US').format(totalvacantUnits.toFixed(2)))
		}
	};

	xhr.send();
}

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$wrapper = $('#wrapper'),
		$header = $('#header'),
		$footer = $('#footer'),
		$main = $('#main'),
		$main_articles = $main.children('article');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: ['481px', '736px'],
		xsmall: ['361px', '480px'],
		xxsmall: [null, '360px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Fix: Flexbox min-height bug on IE.
	if (browser.name == 'ie') {

		var flexboxFixTimeoutId;

		$window.on('resize.flexbox-fix', function () {

			clearTimeout(flexboxFixTimeoutId);

			flexboxFixTimeoutId = setTimeout(function () {

				if ($wrapper.prop('scrollHeight') > $window.height())
					$wrapper.css('height', 'auto');
				else
					$wrapper.css('height', '100vh');

			}, 250);

		}).triggerHandler('resize.flexbox-fix');

	}

	// Nav.
	var $nav = $header.children('nav'),
		$nav_li = $nav.find('li');

	// Add "middle" alignment classes if we're dealing with an even number of items.
	if ($nav_li.length % 2 == 0) {

		$nav.addClass('use-middle');
		$nav_li.eq(($nav_li.length / 2)).addClass('is-middle');

	}

	// Main.
	var delay = 325,
		locked = false;

	// Methods.
	$main._show = function (id, initial) {

		var $article = $main_articles.filter('#' + id);

		// No such article? Bail.
		if ($article.length == 0)
			return;

		// Handle lock.

		// Already locked? Speed through "show" steps w/o delays.
		if (locked || (typeof initial != 'undefined' && initial === true)) {

			// Mark as switching.
			$body.addClass('is-switching');

			// Mark as visible.
			$body.addClass('is-article-visible');

			// Deactivate all articles (just in case one's already active).
			$main_articles.removeClass('active');

			// Hide header, footer.
			$header.hide();
			$footer.hide();

			// Show main, article.
			$main.show();
			$article.show();

			// Activate article.
			$article.addClass('active');

			// Unlock.
			locked = false;

			// Unmark as switching.
			setTimeout(function () {
				$body.removeClass('is-switching');
			}, (initial ? 1000 : 0));

			return;

		}

		// Lock.
		locked = true;

		// Article already visible? Just swap articles.
		if ($body.hasClass('is-article-visible')) {

			// Deactivate current article.
			var $currentArticle = $main_articles.filter('.active');

			$currentArticle.removeClass('active');

			// Show article.
			setTimeout(function () {

				// Hide current article.
				$currentArticle.hide();

				// Show article.
				$article.show();

				// Activate article.
				setTimeout(function () {

					$article.addClass('active');

					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function () {
						locked = false;
					}, delay);

				}, 25);

			}, delay);

		}

		// Otherwise, handle as normal.
		else {

			// Mark as visible.
			$body
				.addClass('is-article-visible');

			// Show article.
			setTimeout(function () {

				// Hide header, footer.
				$header.hide();
				$footer.hide();

				// Show main, article.
				$main.show();
				$article.show();

				// Activate article.
				setTimeout(function () {

					$article.addClass('active');

					// Window stuff.
					$window
						.scrollTop(0)
						.triggerHandler('resize.flexbox-fix');

					// Unlock.
					setTimeout(function () {
						locked = false;
					}, delay);

				}, 25);

			}, delay);

		}

	};

	$main._hide = function (addState) {

		var $article = $main_articles.filter('.active');

		// Article not visible? Bail.
		if (!$body.hasClass('is-article-visible'))
			return;

		// Add state?
		if (typeof addState != 'undefined'
			&& addState === true)
			history.pushState(null, null, '#');

		// Handle lock.

		// Already locked? Speed through "hide" steps w/o delays.
		if (locked) {

			// Mark as switching.
			$body.addClass('is-switching');

			// Deactivate article.
			$article.removeClass('active');

			// Hide article, main.
			$article.hide();
			$main.hide();

			// Show footer, header.
			$footer.show();
			$header.show();

			// Unmark as visible.
			$body.removeClass('is-article-visible');

			// Unlock.
			locked = false;

			// Unmark as switching.
			$body.removeClass('is-switching');

			// Window stuff.
			$window
				.scrollTop(0)
				.triggerHandler('resize.flexbox-fix');

			return;

		}

		// Lock.
		locked = true;

		// Deactivate article.
		$article.removeClass('active');

		// Hide article.
		setTimeout(function () {

			// Hide article, main.
			$article.hide();
			$main.hide();

			// Show footer, header.
			$footer.show();
			$header.show();

			// Unmark as visible.
			setTimeout(function () {

				$body.removeClass('is-article-visible');

				// Window stuff.
				$window
					.scrollTop(0)
					.triggerHandler('resize.flexbox-fix');

				// Unlock.
				setTimeout(function () {
					locked = false;
				}, delay);

			}, 25);

		}, delay);


	};

	// Articles.
	$main_articles.each(function () {

		var $this = $(this);

		// Close.
		$('<div class="close">Close</div>')
			.appendTo($this)
			.on('click', function () {
				location.hash = '';
			});

		// Prevent clicks from inside article from bubbling.
		$this.on('click', function (event) {
			event.stopPropagation();
		});

	});

	// Events.
	$body.on('click', function (event) {

		// Article visible? Hide.
		if ($body.hasClass('is-article-visible'))
			$main._hide(true);

	});

	$window.on('keyup', function (event) {

		switch (event.keyCode) {

			case 27:

				// Article visible? Hide.
				if ($body.hasClass('is-article-visible'))
					$main._hide(true);

				break;

			default:
				break;

		}

	});

	$window.on('hashchange', function (event) {

		// Empty hash?
		if (location.hash == ''
			|| location.hash == '#') {

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Hide.
			$main._hide();

		}

		// Otherwise, check for a matching article.
		else if ($main_articles.filter(location.hash).length > 0) {

			// Prevent default.
			event.preventDefault();
			event.stopPropagation();

			// Show article.
			$main._show(location.hash.substr(1));

		}

	});

	// Scroll restoration.
	// This prevents the page from scrolling back to the top on a hashchange.
	if ('scrollRestoration' in history)
		history.scrollRestoration = 'manual';
	else {

		var oldScrollPos = 0,
			scrollPos = 0,
			$htmlbody = $('html,body');

		$window
			.on('scroll', function () {

				oldScrollPos = scrollPos;
				scrollPos = $htmlbody.scrollTop();

			})
			.on('hashchange', function () {
				$window.scrollTop(oldScrollPos);
			});

	}

	// Initialize.

	// Hide main, articles.
	$main.hide();
	$main_articles.hide();

	// Initial article.
	if (location.hash != ''
		&& location.hash != '#')
		$window.on('load', function () {
			$main._show(location.hash.substr(1), true);
		});

})(jQuery);
