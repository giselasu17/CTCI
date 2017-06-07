/* 1.2 Check permutation: Given two strings write a method to decide if one is permutation of the other*/
function CheckPermutation(string1, string2) {
    var dictionary = {};
    if (string1.length != string2.length) {
        return false;
    } else {
        for (var i = 0; i<string1.length; i++) {
            if(dictionary[string1[i]]) {
                dictionary[string1[i]] += 1;
            } else {
                dictionary[string1[i]] = 1
            }
        }
        for (var i = 0; i<string2.length; i++) {
            if(dictionary[string2[i]]) {
                dictionary[string2[i]] -= 1;
            } else {
                dictionary[string2[i]] = 1
            }
        }
        for (key in dictionary) {
            if(dictionary[key] != 0) {
                return false;
            }
        }
        return true;
    }
}