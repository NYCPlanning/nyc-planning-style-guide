module.exports = function(text) {
  const slugify = require('./slugify');
  const slug = slugify(text);
  const anchor = `${text} <sup><a href="#${slug}" class="silver"><i class="fas fa-link"></i></a></sup>`;
  return anchor;
}
