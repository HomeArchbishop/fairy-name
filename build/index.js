/*
 * @Author: 拆家大主教
 * @Date: 2021-09-28 15:04:31
 * @Last Modified by: 拆家大主教
 * @Last Modified time: 2021-09-28 16:01:32
 */
const nameArr = require('./arr');
let fairyName = '';
const getOneFragment = function getOneFragment(num = 4) {
    let res = '';
    for (; num; num--) {
        res += nameArr[~~(Math.random() * nameArr.length)];
    }
    return `${res}·`;
};
while (fairyName.length < 500) {
    fairyName += getOneFragment(~~(Math.random() * 9 + 1));
}
const tmp = fairyName.split('');
tmp.pop();
fairyName = tmp.join('');
console.log(fairyName);
//# sourceMappingURL=index.js.map