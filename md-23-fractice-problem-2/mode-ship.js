
function modeHeshap(total,alu,mores,tel,bason){{
    const bajarSum = alu+mores+tel+bason;
    const denaPawna = total-bajarSum;

    return denaPawna;
}

}
const total = 500;
const alu =50;
const mores=200;
const tel = 185;
const bason =50;
const sum = modeHeshap(total,alu,mores,tel,bason);
console.log(sum);