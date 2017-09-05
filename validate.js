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
    if (hashtags == '') { 
      return true; 
    } else return false;
  }
  // Проверка первого симовла хештега на равенстов '#'
  function isFirstSymbolHashtag(event, hashtags) {
    for (var i = 0; i < hashtags.length; i++) {
      if(history[i][0] != '#') {
        event.preventDefault();
        return true; (т.е. ошибка есть??)
      } else return false;
    }
  }
  // Проверка на максимальное количество хештегов
  function isCountHashtegs(event, hashtags) {
    var hashtagsCount = 6;
    
		if (hashtags.length > hashtagsCount) {
      event.preventDefault();
      return true ;
    } else return false;
  }
  // Проверка длины одного хештега
  function isMaxLength(event, hashtags) {
    var maxLength = 20;
		
    for (var i = 0; i < hashtags.length; i++) {
      if (hashtags[i].length > maxLength ) {
        event.preventDefault();
        return true;
      } else return false;
    }
  }
  // Проверка на одинаковые хештеги
  function isEqualHashtag(event, hashtags) {
    for(var i = 0; i < hashtags.length; i++) {
      var item = hashtags[i];
      for (var j = i+1; j < hashtags.length; j++) {
        if (item === hashtags[j]) {
          event.preventDefault();
          return true;
        } else return false;
      }
    }				
  }
 })();