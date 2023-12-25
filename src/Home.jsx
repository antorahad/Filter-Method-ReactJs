import { useState, useEffect } from "react";
import Filter from "./Filter";
import Product from "./Product";

const Home = () => {
    const [products, setProducts] = useState([]);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        fetch('./products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleSort = (e) => {
        setSort(e.target.value);
    };

    const filteredProducts = products.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.price.toString().toLowerCase().includes(search.toLowerCase()) ||
        item.id.toString().toLowerCase().includes(search.toLowerCase())
    ).filter((item) => {
        if (sort === 'available') {
            return item.stock === 'available';
        } else if (sort === 'unavailable') {
            return item.stock === 'unavailable';
        }
        return true; // Display all products when sort is not 'available' or 'unavailable'
    });

    return (
        <div className="w-full min-h-screen flex flex-col items-start justify-start gap-5 p-5">
            <p className="text-5xl font-bold text-center">Filter Method Using React JS</p>
            <div className="flex flex-col w-full container mx-auto items-start justify-between gap-5 mt-5">
                <Filter handleSearch={handleSearch} handleSort={handleSort}/>
                <div className="grid grid-cols-4 place-items-center gap-5">
                    {
                        filteredProducts.length > 0 ? (
                            filteredProducts.map(item => <Product key={item.id} item={item}></Product>)
                        ) : (
                            <p>No data found</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;
