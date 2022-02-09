export default function getFetch(newImput) {
  return fetch(
    `https://pixabay.com/api/?q=${newImput}&page=1&key=25274057-dba1b364b326199f79c25f588&image_type=photo&orientation=horizontal&per_page=12`
  ).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}
