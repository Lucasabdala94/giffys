export default function getGifs({ keyword = 'morty' } = {}) {
  const api_key = 'F2Pe2JgAyBjt7Dc3Z7ab8L9gATmvcl7g'
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=25&offset=0&rating=g&lang=es`;

  return fetch(apiUrl)
    .then(res => res.json())
    .catch(console.log("error en consulta"))
    .then(response => {
      const { data = [] } = response;
      if (Array.isArray(data)) {
        const gifs = data.map(image => {
          const { images, title, id } = image;
          const { url } = images?.downsized_medium;
          return { title, id, url }
        });
        return gifs;
      }
      return [];
    }
    )
}