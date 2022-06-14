const findTheOldest = function(people) {
    const getAge = function(birth, death) {
        if (!death) {
            death = new Date().getFullYear()
        }
        return death - birth
    }
    
    return people.reduce((oldest, currentPerson) => {   
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath)
        const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath)
        return oldestAge < currentAge ? currentPerson : oldest;
    })

    // const oldestPeople = people.sort(function(a,b) {
    //     const lastPerson = a.yearOfDeath - a.yearOfBirth;
    //     const nextPerson = b.yearOfDeath - b.yearOfBirth;
    //     if (lastPerson > nextPerson) {
    //       return -1;
    //     } else {
    //       return 1;
    //     }
    //   });

    //   return oldestPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;
