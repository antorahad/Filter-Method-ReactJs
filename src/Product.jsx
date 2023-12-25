const Product = ({ item }) => {
    const { id, name, price, stock } = item
    return (
        <div className="bg-slate-100 p-5 rounded-xl w-full shadow-md">
            <h1>{name}</h1>
            <p>{price}</p>
            <p>{stock}</p>
        </div>
    );
};

export default Product;