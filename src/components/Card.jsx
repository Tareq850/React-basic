
function Card({ children }) {


    return (
        <div className="px-4 py-7 bg-blue-50 border rounded-md shadow-md border-blue-100 flex flex-col gap-3 items-center">
            {children}
        </div>
    )
}

function CardLable({ lable }) {
    return (
        <h2 className="font-bold text-2xl text-blue-800">
            {lable}
        </h2>
    )
}

function CardDes({ des }) {
    return (
        <p className="text-blue-500">
            {des}
        </p>
    )
}

function CardImg({ src, alt }) {
    return (
        <img src={src} alt={alt} />
    )
}

function CardIcon({ children }) {
    return (
        <div>
            {children}
        </div>
    )
}

function CardActions({ children }) {
    return (
        <div className="flex gap-2">
            {children}
        </div>
    )
}

Card.Lable = CardLable;
Card.Des = CardDes;
Card.Icon = CardIcon;
Card.Img = CardImg;
Card.Actions = CardActions;

export default Card
