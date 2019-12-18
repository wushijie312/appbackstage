// 用于浏览器存储用户登录信息
var storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key)||'{}')
    },
    remove(key) {
        localStorage.remove(key);
    }
}

export default storage