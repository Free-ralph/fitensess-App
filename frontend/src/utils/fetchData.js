export const exersiceOptions = {
	method: 'GET',
	// headers: {
	// 	'X-RapidAPI-Key': '1813829145msh833c644a187b3adp1038b5jsn079b91f9ceed',
	// 	'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
	// }
};

// fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));

export const youtubeOptions = {
	method: 'GET',
	headers: {
	  'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
	  'X-RapidAPI-Key': '1813829145msh833c644a187b3adp1038b5jsn079b91f9ceed',
	},
  };

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data
} ;