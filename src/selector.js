// YOUR CODE HERE
class ${
  constructor(string){
    let str = string.substring(1);
    if(string[0] === '.'){
      this.elements = Array.from(document.getElementsByClassName(str));
    }else if(string[0] === '#'){
      this.elements = Array.from(document.getElementById(str));
    }else{
      this.elements = Array.from(document.getElementsByTagName(str));
    }

  }

}
