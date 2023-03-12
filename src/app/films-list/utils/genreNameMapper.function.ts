export function genreNameMapper(genreCodeArr: number[]): any {
  let filmGenre = '';
  if (!genreCodeArr.length) {
    return filmGenre;
  }
  const genreNamesArr = genreCodeArr.map((item) => {
    let itemName = '';
    switch (item) {
      case 1:
        itemName = 'драма';
        break;
      case 2:
        itemName = 'биография';
        break;
      case 3:
        itemName = 'история';
        break;
      case 4:
        itemName = 'фэнтези';
        break;
      case 5:
        itemName = 'приключения';
        break;
      case 6:
        itemName = 'боевик';
        break;
      case 7:
        itemName = 'мультфильм';
        break;
      case 8:
        itemName = 'комедия';
        break;
      case 9:
        itemName = 'триллер';
        break;
      case 10:
        itemName = 'детектив';
        break;
      case 11:
        itemName = 'фантастика';
        break;
    }
    return itemName;
  });

  if (genreNamesArr.length === 1) {
    filmGenre = genreNamesArr[0];
  } else {
    filmGenre = genreNamesArr.join(', ');
  }
  return filmGenre;
}
