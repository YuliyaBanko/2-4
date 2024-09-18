const calculateBonus = (a, b) => {
    let bonus;
    const sum = a + b;
    debugger;//остановились с ключевым словом дебаггер вместо точек останова
    sum > 50 ? (bonus = 50) : (bonus = sum);
    debugger;// остановка после подсчета бонуса, но перед выведением результата отработки функции
    return bonus;
    };
    console.log(calculateBonus(2,5))