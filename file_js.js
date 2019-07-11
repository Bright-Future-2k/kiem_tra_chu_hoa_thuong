regexp = /^[A-Z]/;
function isFirstUpperCase(str) {
    let regexp = /^[A-Z]/;
    if (regexp.test(str)){
        console.log("String's first character is upper case")
    } else {
        console.log("string's first character is not upper case")
    }
}
isFirstUpperCase('LuongTuanAnh');
isFirstUpperCase('LUONG TUAN ANH');
isFirstUpperCase('luong tuan anh');