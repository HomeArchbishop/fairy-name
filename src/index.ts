/*
 * @Author: 拆家大主教 
 * @Date: 2021-09-28 15:04:31 
 * @Last Modified by: 拆家大主教
 * @Last Modified time: 2021-09-28 16:02:42
 */
const nameArr = require('./arr');

let fairyName: string = '';

const getOneFragment = function getOneFragment(num: number = 4): string {

    let res: string = '';
    for (; num; num--) {
        res += nameArr[~~(Math.random() * nameArr.length)];
    }
    return `${res}·`;
}

while (fairyName.length < 500) {

    fairyName += getOneFragment(~~(Math.random() * 9 + 1));
}

const tmp: string[] = fairyName.split('');
tmp.pop();
fairyName = tmp.join('');

console.log(fairyName);

module.exports = fairyName;
