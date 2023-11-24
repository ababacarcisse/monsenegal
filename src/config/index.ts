export const PRODUCT_CATEGORIES=[
    {
        label: 'Circuit touristique',
        value: 'circuit_touristique' as const,
        featered:[
            {
                name:'Team Building',
                href:'#',
                imageSrc:'/nav/circuit.jpeg'
            },
            {
                name:'Rendonner',
                href:'#',
                imageSrc:'/nav/resto.jpeg'
            },
            {
                name:'Excursion',
                href:'#',
                imageSrc:'/nav/travel.jpeg'
            }

        ]

    },
    {
        label: 'Transport',
        value: 'restaurant' as const,
        featered:[
            {
                name:'Voiture',
                href:'#',
                imageSrc:'/nav/resto.jpeg'
            },
            {
                name:'Bus',
                href:'#',
                imageSrc:'/nav/resto.jpeg'
            },
            {
                name:'4x4',
                href:'#',
                imageSrc:'/nav/travel.jpeg'
            }

        ]

    }
]