function Valida(enemy, what) {
    switch (what) {
        case 'str_num':
            return /^[a-zA-Z1-9][a-zA-Z0-9]{1,20}$/i.test(enemy);
            break;
        case 'email':
            return /^[\w\d\-\.]+@[\w\d\-\.]+$/.test(enemy);
    }
}

///^([a-z0-9]{5,})$/.test('abc1');

//regex: /^[a-zA-Z1-9][a-zA-Z0-9]{1,19}$/i


exports.Valida = Valida;