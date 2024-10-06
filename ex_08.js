function houseEnergyScore(housingList) {
    const gradeMap = new Map([
        [450, 'G'],
        [330, 'F'],
        [230, 'E'],
        [150, 'D'],
        [90, 'C'],
        [51, 'B'],
        [0, 'A'] // Igloo and Hutch will have 0 consumption
    ]);

    const scoredHouses = housingList.map(house => {
        const name = house[0].trim();
        const consumption = Number(house[1]); 
        let grade = 'G'; 

        for (let [threshold, g] of gradeMap) {
            if (consumption >= threshold) {
                grade = g;
                break;
            }
        }

        return [name, consumption, grade];
    });

    scoredHouses.sort((a, b) => a[1] - b[1]);

    return scoredHouses;
}