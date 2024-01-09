export function shuffleList(list) {
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
}

export const imagesContext = require.context(
  "../assets/images",
  false,
  /\.jpg$/
);

export function processData(data, brands, shuffleData, shuffleBrands) {
  if (data) {
    for (let id in data) {
      data[id].Image = imagesContext("./" + id + ".jpg");
      data[id].ID = id;
    }
  }

  const productData = data ? Object.values(data) : [];
  const brandNames = brands ? Object.values(brands) : [];

  if (shuffleData) shuffleList(productData);
  if (shuffleBrands) shuffleList(brandNames);

  return [productData, brandNames];
}
