import { useEffect, useState } from "react";

function Search({ initialValue = "", onSearch }) {
    const [input, setInput] = useState(initialValue);

    useEffect(() => {
        setInput(initialValue);
    }, [initialValue]);

    const handleSearch = () => {
        onSearch(input.trim());
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    return (
        <div className="input-group mb-2">
            <span className="input-group-text bg-white search-logo">
                <i className="bi bi-search"></i>
            </span>
            <input
                type="text"
                className="form-control search-box border-start-0"
                placeholder="Cari produk..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button className="btn btn-outline-primary btn-sm" onClick={handleSearch}>
                Cari
            </button>
        </div>
    );
}

export default Search;