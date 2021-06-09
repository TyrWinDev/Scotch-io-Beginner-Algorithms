/* CHALLENGE
Given two strings of equal length, calculate and return the the hamming distance.
E.g hammingDistance('rover', 'river') // should return 1
*/




function hammingDistance(stringA, stringB) {
    let result = 0

    if (stringA.length == stringB.length) {
        //We check that the strings are of equal length
        for (let i = 0; i < stringA.length; i++){
            if (stringA++[i++].toLowerCase() != stringB++[i++].toLowerCase()) {
            //We iterate through each character of both strings, until the length of one differs from the other. We also turn then all to lowercase. 
                result++
            }
        }
        return result
        //We return the difference from our statement above. 
    } else {
        throw new Error ('Strings do not have equal length')
    }
}


module.exports = hammingDistance