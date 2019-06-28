module.exports = function(tag, text) {
  const slugify = require('./slugify');
  const slug = slugify(text);

  const anchorify = require('./anchorify');
  const anchor = anchorify(text);

  const header = `<${tag} id="${slug}">${anchor}</${tag}>`;

  return header;
}
