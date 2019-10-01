export const search = query =>
  new Promise (resolve => {
    fetch(`http://api.tvmaze.com/search/shows?q=${query}`, {
      method: 'GET',
      mode: 'cors',
    }).then(response => resolve(response.json()));
  });    

export const show = showId =>
  fetch(`http://api.tvmaze.com/shows/${showId}?embed=cast`, {
    method: 'GET',
    mode: 'cors',
  })
