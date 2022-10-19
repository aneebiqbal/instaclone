import { USERS } from "./users";

export const POSTS =[
    {
        imageUrl:'https://media.istockphoto.com/photos/pakistan-monument-islamabad-picture-id535695503?k=20&m=535695503&s=612x612&w=0&h=S16wHXc-b3AkL7YMrcFkR2pDGFJA1bRsPmAfQlfrwkc=',
        user: USERS[0].user,
        likes:700,
        caption:'Beautifull city Islamabad',
        profile_picture: USERS[0].image,
        comments:[
            {
                user:'cleverQazi',
                Comment:'wow what a beautifull place I want to visit it'
            },
            {
                user:'aneeb',
                Comment:'I like this place. I want to visit it'
            },
        ]
    },
    {
        imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFz1vvG_lLJfdooGq75oH0XniaRP0Xu-miPeSarHsfGVQUhVrlH72xl9jYCGhYlc6AfIE&usqp=CAU',
        user: USERS[1].user,
        likes:550,
        caption:'Fire at border EMERGENCY',
        profile_picture: USERS[1].image,
        comments:[
            {
                user:'Elon Musk',
                Comment:'HELL! thats really an emergancy'
            },
            {
                user:'aneeb',
                Comment:'I like this place. I want to visit it'
            },
        ]
    },
    {
        imageUrl:'https://media.gettyimages.com/photos/quaideazam-picture-id184944186?s=612x612',
        user: USERS[3].user,
        likes:690,
        caption:'Sindh Beauty',
        profile_picture: USERS[3].image,
        comments:[
            {
                user:'Elon Musk',
                Comment:'Such a nice place <3'
            },
            {
                user:'aneeb',
                Comment:'what to do with it'
            },
        ]
    },
]