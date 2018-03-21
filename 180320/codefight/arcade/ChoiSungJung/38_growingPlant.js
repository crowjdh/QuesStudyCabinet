growingPlant = (upSpeed, downSpeed, desiredHeight) => {
    let height = 0;
    let day = 1;
    for (day; height < desiredHeight; day++) {
        height += upSpeed;
        if (height >= desiredHeight) break;
        height -= downSpeed;
    }
    return day;
}
