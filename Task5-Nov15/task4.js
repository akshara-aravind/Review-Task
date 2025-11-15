function frequencySort(arr) {
    var freq = {};
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var item = arr_1[_i];
        freq[item] = (freq[item] || 0) + 1;
    }
    var key = Object.keys(freq);
    // console.log(key)
    var value = Object.values(freq);
    // console.log(value)
    var moreFreq = [];
    var result = [];
    for (var i = 0; i < value.length; i++) {
        moreFreq.push(key[i].repeat(value[i]).split('').join(','));
    }
    for (var i = 0; i < moreFreq.length - 1; i++) {
        //  console.log(moreFreq[i],moreFreq[i+1])
        for (var j = i + 1; j < moreFreq.length; j++) {
            // console.log(moreFreq[i],moreFreq[j])
            if (moreFreq[i].length < moreFreq[j].length) {
                result.push(moreFreq[j]);
            }
            if (moreFreq[i].length === moreFreq[j].length) {
                result.push(moreFreq[i], moreFreq[j]);
            }
        }
    }
    var set = new Set(result);
    return Array.from(set);
}
console.log(frequencySort([4, 5, 6, 5, 4, 3]));
console.log(frequencySort([4, 5, 6, 5, 4, 4, 3]));
