export function MaskPhone(value) {
    value = value.replace(/\D/g, '');
    if (value.length <= 10) { // Telefone fixo
        value = value.replace(/(\d{0})(\d)/, '$1($2');
        value = value.replace(/(\d{2})(\d)/, '$1)$2');
        value = value.replace(/(\d{4})(\d{1,2})/, '$1-$2');
        value = value.replace(/(-\d{4})\d+?$/, '$1');
    } else { // Celular
        value = value.replace(/(\d{0})(\d)/, '$1($2');
        value = value.replace(/(\d{2})(\d)/, '$1)$2');
        value = value.replace(/(\d{5})(\d{1,2})/, '$1-$2');
        value = value.replace(/(-\d{4})\d+?$/, '$1');
    }
    return value;
}

export function MaskBirthday(value) {
    let v = value.replace(/\D/g, '').slice(0, 10);
    if (v.length >= 5) {
        return `${v.slice(0, 2)}/${v.slice(2, 4)}/${v.slice(4)}`;
    }
    else if (v.length >= 3) {
        return `${v.slice(0, 2)}/${v.slice(2)}`;
    }
    return v
}