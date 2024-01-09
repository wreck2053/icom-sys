function searchFunction(query, productNames) {
  const results = productNames.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );

  return results;
}

export default searchFunction;
