import GreekSalad from "../../assets/greek-salad.jpg";
import Bruschetta from "../../assets/bruschetta.svg";
import LemonDessert from "../../assets/lemon-dessert.jpg";

export const dishes = [
    {
        name: "Greek salad",
        price: 12.99,
        description:
            "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        imageSrc: GreekSalad,
        altText: "Greek salad",
    },
    {
        name: "Bruschetta",
        price: 5.99,
        description:
            "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        imageSrc: Bruschetta,
        altText: "Bruschetta",
    },
    {
        name: "Lemon Dessert",
        price: 5,
        description:
            "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        imageSrc: LemonDessert,
        altText: "Lemon dessert",
    },
];
