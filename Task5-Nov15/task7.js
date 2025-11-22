function validEmail(email) {
    for (var _i = 0, email_1 = email; _i < email_1.length; _i++) {
        var item = email_1[_i];
        if (item !== '@' && item !== '.')
            return false;
    }
    return true;
}
console.log(validEmail('test@123.com'));
