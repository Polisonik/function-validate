(function validate() { 
  var form = document.querySelector('.upload-form');			
  var inputHashtag = form.querySelector('.upload-form-hashtags');
  var hashtags = inputHashtag.value.split(' ');
  
  isEmptyHashtag(hashtags);
  isFirstSymbol(event, hashtags);
  isCountHashtegs(event, mhashtags);
  isMaxLength(event, hashtags);
  isEqualHashtag(event, hashtags);

	// проверка,если хештеги отсутствуют
  function isEmptyHashtag(hashtags) {
    return !!hashtags;
  }
  // Проверка первого симовла хештега на равенстов '#'
  function isFirstSymbolHashtag(event, hashtags) {
    for (var i = 0; i < hashtags.length; i++) {
      return (hashtags[i][0] != '#');
    }
  }
  // Проверка на максимальное количество хештегов
  function isCountHashtegs(event, hashtags) {
    var hashtagsCount = 6;
    return (hashtags.length > hashtagsCount)
  }
  // Проверка длины одного хештега
  function isMaxLength(event, hashtags) {
    var maxLength = 20;
		
    for (var i = 0; i < hashtags.length; i++) {
      return (hashtags[i].length > maxLength)
    }
  }
  // Проверка на одинаковые хештеги
  function isEqualHashtag(event, hashtags) {
    for(var i = 0; i < hashtags.length; i++) {
      var item = hashtags[i];
      for (var j = i+1; j < hashtags.length; j++) {
        return (item === hashtags[j])
      }
    }				
  }
 })();