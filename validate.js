(function validate() { 
	var form = document.querySelector('.upload-form');			
	var inputHashtag = form.querySelector('.upload-form-hashtags');
	var hashtags = inputHashtag.value.split(' ');
	
	isFirstSymbol(hashtags);
	isCountHashtegs(hashtags);
	
	// Проверка первого симовла хештега на равенстов '#'
	function isFirstSymbol(event, hashtags) {
		if (hashtags == '') { // проверка,если хештеги отсутствуют
			return; 
		}
		for (var i = 0; i < hashtags.length; i++) {
			if(history[i][0] != '#') {
				event.preventDefault();
				inputHashtag.style.borderColor = 'red';
				showError() //хэш-тег начинается с символа `#` (решётка) и состоит из одного слова;
			}
		}
	}
	// Проверка на максимальное количество хештегов
	function isCountHashtegs(event, hashtags) {
		var hashtagsCount = 6;
		if (hashtags == '') { // проверка,если хештеги отсутствуют
			return; 
		}
		if (hashtags.length > hashtagsCount) {
		  event.preventDefault();
			inputHashtag.style.borderColor = 'red';
			showError() // нельзя указать больше пяти хэш-тегов;
	  }
  }
	
	function isMaxLength(event, hashtags) {
		var maxLength = 20;
		
		for (var i = 0; i < hashtags.length; i++) {
		  if (hashtags[i].length > maxLength ) {
			  event.preventDefault();
				inputHashtag.style.borderColor = "red";
				showError(); //вывести ошибку
	    }  
   	}
	}
				for(var i = 0; i < hashtags.length; i++) {
					var item = hashtags[i];
          for (var j = i+1; j < hashtags.length; j++) {
	          if (item === hashtags[j]) {
              event.preventDefault();
							inputHashtag.style.borderColor = "red";
              inputHashtag.setCustomValidity("не должно быть повторяющихся хэш-тегов");
            }
				  }
			  }	
				
              inputHashtag.setCustomValidity("максимальная длина одного хэш-тега 20 символов");
					}
					
				}
      }
		}