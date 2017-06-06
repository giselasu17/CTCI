/* 1.1 Is Unique: Implement an algorithmto determine if a string has all unique characters*/
function IsUnique(string) {
    var dictionary  = {};
    for (var i = 0; i<string.length; i++) {
        if (dictionary [string[i]]) {
            return false;
        } else {
            dictionary [string[i]] = 1;
        }
    }
    return true;
}

function IsUniqueBetter(string) {
    var str =  string.split( '').sort().join('');
    for (var i = 0; i<str.length-1; i++) {
        if (str[i] == str[i + 1]) {
            return false;
        }
    }
    return true;
}