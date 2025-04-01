import { useEffect, useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [pageNumber,setPageNumber]=useState(0);

    const PAGE_SIZE=10;

    const fetchData = async () => {
        const response = await fetch(
            "https://dummyjson.com/products?limit=200"
        );
        const data = await response.json();
        setProducts([...data.products]);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleTabClick=(index)=>{
        setPageNumber(index)
    }
    const handleNextBtn=()=>{
        setPageNumber(prev=>prev+1);
    }
    const handlePrevBtn=()=>{
        setPageNumber(prev=>prev-1);
    }

    const totalPages=Math.ceil(products.length / PAGE_SIZE);
    let start=pageNumber*PAGE_SIZE;
    let end=pageNumber*PAGE_SIZE+PAGE_SIZE

    return (
        <div className="flex flex-col">
            {
                <div className="flex flex-wrap justify-center mt-10 min-h-[80vh]">
                    {products.slice(start,end).map((product) => {
                        return (
                            <div className="flex mx-1.5 my-2">
                                <Card
                                    key={product.id}
                                    image={product.thumbnail}
                                    title={product.title}
                                    price={product.price}
                                />
                            </div>
                        );
                    })}
                </div>
            }
            <div className="w-full my-10">
                <Pagination totalPages={totalPages} prevBtnClick={handlePrevBtn} nextBtnClick={handleNextBtn} tabBtnClick={handleTabClick} pageNumber={pageNumber}/>
            </div>
        </div>
    );
};

export default Home;
