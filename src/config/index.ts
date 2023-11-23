export const PRODUCT_CATEGORIES=[
    {
        label: 'Circuit touristique',
        value: 'circuit_touristique' as const,
        featered:[
            {
                name:'Editer un circuit',
                href:'#',
                imageSrc:'/nav/circuit.jpeg'
            },
            {
                name:'Editer un circuit Resto',
                href:'#',
                imageSrc:'/nav/resto.jpeg'
            },
            {
                name:'Editer un travel',
                href:'#',
                imageSrc:'/nav/travel.jpeg'
            }

        ]

    },
    {
        label: 'Restaurant',
        value: 'restaurant' as const,
        featered:[
            {
                name:'Editer un Restaurant',
                href:'#',
                imageSrc:'/nav/resto.jpeg'
            },
            {
                name:'New Resto',
                href:'#',
                imageSrc:'/nav/resto.jpeg'
            },
            {
                name:'Suprimer un travel',
                href:'#',
                imageSrc:'/nav/travel.jpeg'
            }

        ]

    }
]