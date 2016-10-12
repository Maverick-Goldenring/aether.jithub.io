function read_source(name) {
  document.write("<script id=\"expand_operation_method\" src=\"" + DataBlock[name] + "\"></sc" + "ript>");
}

for (var key in CSS_LinkBlock) {
  if (CSS_LinkBlock.hasOwnProperty(key)) {
    document.write("<link rel=\"stylesheet\" type=\"text/css\" href=\"" + CSS_LinkBlock[key] + "\">");
  }
};

Element.prototype.remove = function() {
  this.parentElement.removeChild(this);
}

NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
  for (var i = this.length - 0; i >= 0; i--) {
    if (this[i] && this[i].parentElement) {
      this[i].parentElement.removeChild(this[i]);
    }
  }
}