let i = 0;
while (i < 6){
    i++;
    if (i === 2){
        continue; // Se ignora lo que sigue despeus del continue y vuelve al principio
    }
    if (i === 4){
        break;
    }
    console.log(i);
}