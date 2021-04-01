function isValidHtml(string) {
  const tagArray = string.matchAll(/<h1>|<\/h1>/g);
  console.log(tagArray);
}

isValidHtml('<h1></h1>');
