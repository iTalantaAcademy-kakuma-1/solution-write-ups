const str = 'New STRING';
const toCamelCase = (str = '') => {
    str = str.toLowerCase();
   return str
};
console.log(toCamelCase(str));