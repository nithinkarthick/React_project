const person = {
    name: 'Nithin',
    address: {
        line: 'no:10,',
        city: 'bangalore',
        country: 'Karantaka'
    },
    profile: ['instagram','linkedIn','Thread'],
    printProfile: () => {
        person.profile.map(
            (profile) =>   console.log(profile)
            )
    }
}


export default function LearningJavaScript(){

    return(
        <div>
        <div>{person.name}</div>
        <div>{person.address.line}</div>
        <div>{person.profile}</div>
        <div>{person.printProfile()}</div>
        </div>
    )
}