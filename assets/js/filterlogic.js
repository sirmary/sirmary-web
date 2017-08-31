/* eslint-disable */
export default function FilterLogicFunction (keyData) {

	var filterKeywords = {}
	var filterKeys = []

	keyData.forEach(function (question) {

		question.f.forEach(function (filter) {
			if(filter=='') return;
			filterKeywords[filter] = Array.isArray(filterKeywords[filter]) ? filterKeywords[filter] : []
			filterKeywords[filter].push(question.q)
			filterKeys.push(filter)
		})
	})

	function startsWith (str, word) {
	    return str.lastIndexOf(word, 0) === 0
	}

	function cleanCharacters (str) {
		if(str == null)
			return ''

		return str.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '').toLowerCase()
	}

	function getShortMatchingKeys (text,input) {
		for (var index = 0; index < filterKeys.length; index++) {
			let keyword = filterKeys[index]
			if( keyword.length <= 6 &&  keyword.length > input.length && startsWith(keyword, input ) )
			{
				return filterKeywords[keyword].indexOf(text.label) > -1
			}
		}
		return false;
	}

	function getLongMatchingKeys (text,input) {
		for (var index = 0; index < filterKeys.length; index++) {
			let keyword = filterKeys[index];
			if( keyword.length >= 6 && startsWith(keyword, input ) )
				return filterKeywords[keyword].indexOf(text.label) > -1
		}
		return false;
	}

	function getExactMatchingKeysInText (text,input) {
		for (var index = 0; index < filterKeys.length; index++) {
			let keyword = filterKeys[index]
			if( startsWith(keyword, input ) ) {
        // sentence has keyword
				return (filterKeywords[keyword].indexOf(text.label) > -1)
			}
		}
		return false;
	}

	function getEnteredKey (text,input) {
		if(filterKeywords[input] != null )
			return filterKeywords[input].indexOf(text.label) > -1
		return false
	}

	function performKeyLogic (text,input){
		input = cleanCharacters(input);
		// if there is already a key with entered text
		if( getEnteredKey(text,input) )
			return true

		// if any of the keywords exist in the sentence
		if( getExactMatchingKeysInText(text,input) )
			return true

		// filter-keywords with 5 or less characters,  3 characters of the keyword
		// filter keywords with 5 or less characters, between first 3,4,5 characters
		if(input.length >2 && input.length <6 && getShortMatchingKeys(text,input))
			return true

		// filter-keywords with 6 or more characters,  4 characters of the keyword
		if(input.length > 3 && getLongMatchingKeys(text,input))
			return true

		return false
	}

	function performSentenceLogic(text,input) {
		var words = input.split(" ")
		for (var index = 0; index < words.length; index++) {
			let singleWord = words[index]
			if (performKeyLogic(text, singleWord)) {
				return true;
      }
		}
		return false;
	}


	return { "performSentenceLogic" : performSentenceLogic }
}

