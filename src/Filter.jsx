const Filter = ({handleSort, handleSearch}) => {
    return (
        <div className="flex items-center justify-between gap-5 w-1/2">
            <select name="isAvailable" className="p-3 border w-52 border-slate-100" onChange={handleSort}>
                <option value="all">All</option>
                <option value="available">Available</option>
                <option value="unavailable">Unavailable</option>
            </select>

            <input type="text" placeholder="Search here..." className="p-3 w-52 border-2 rounded-xl" onChange={handleSearch}/>
        </div>
    );
};

export default Filter;