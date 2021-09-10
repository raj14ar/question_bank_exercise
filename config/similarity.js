module.exports.calculateSimilarity = function (str1, str2) {
    // remove white space of Query from search result
  str1 = str1.replace(/ /g, "").toLowerCase();
  // if Query from result contains search term passed calculate the similarty percentage
  if (str1.includes(str2)) {
    return ((str2.length / str1.length) * 100).toFixed(2);
  }
  return 0;
};
