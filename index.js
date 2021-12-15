const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(drivers, name) {
    const results = drivers.filter(name => name === drivers);
    
    if (name === drivers) {
        return drivers.filter(name => name === drivers);
    } else if (name === drivers.toUpperCase || drivers.toLowerCase) {
        return drivers.filter(name => name === drivers);
    }
};
findMatching();