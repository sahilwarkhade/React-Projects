const Card = ({image,title,price}) => {
    return <>
        <div className="border w-64 h-64">
            <div className="h-[82%] w-full p-10">
                <img className="h-full"  src={image} alt={title} />
            </div>
            <div className="w-full flex justify-between px-4">
                <span>{title}</span>
                <span>{price}</span>
            </div>
        </div>
    </>;
};

export default Card;
