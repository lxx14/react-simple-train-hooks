const url = "https://api.unsplash.com/photos/?client_id=ca5a2a324ba06f2cf8bede88a989bb6c2f5f87730032b3c6256b72888f2cc94c";

export const getItems = () => {
  return fetch(url)
}