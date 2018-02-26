class Sorter {
  constructor() {
    this.elements = new Array();
  }

  add(element) {
    this.elements.push(element);
  }

  at(index) {
    return this.elements[index];
  }

  get length() {
    return this.elements.length;
  }

  toArray() {
    return this.elements;
  }

  sort(indices) {
    for (var i = (indices.length -1); i >= 0; i --) {
      for (var j = (indices.length - 1); j > 0; j --) {
        if (indices[j] < indices[j - 1]) {
          var temp = indices[j];
          indices[j] = indices[j - 1];
          indices[j - 1] = temp; 
        }
      }
    }

    if (this.comparator === undefined) {
      for (var i = 0; i < indices.length; i++) { 
        for (var j = 0; j < indices.length; j++) { 
          if (this.elements[indices[i]] < this.elements[indices[j]]) { 
            var temp = this.elements[indices[i]];
            this.elements[indices[i]] = this.elements[indices[j]];
            this.elements[indices[j]] = temp;
          }
        }
      }  
    } else {
            if (this.comparator(this.elements[indices[0]], this.elements[indices[1]]) > 0) {
              var temp = this.elements[indices[0]];
              this.elements[indices[0]] = this.elements[indices[1]];
              this.elements[indices[1]] = temp;
            }     
    }        
}
    

  setComparator(compareFunction) {
    this.comparator = compareFunction;
  }
}

module.exports = Sorter;