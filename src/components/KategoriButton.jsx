import { useState, useRef, useEffect } from 'react';

function KategoriButton({ selectedKategori = "Semua", onSelectKategori }) {
    const mainCategories = ["Semua", "Makanan", "Minuman", "Bahan Makanan"];
    const dropdownCategories = ["Snack", "Kebutuhan Harian"];

    const isDropdownActive = dropdownCategories.includes(selectedKategori);
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    useEffect(() => {
        const h = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
        document.addEventListener("mousedown", h);
        return () => document.removeEventListener("mousedown", h);
    }, []);

    return (
        <div className="d-flex gap-2 mb-2 flex-wrap">
            {mainCategories.map((cat) => (
                <button
                    key={cat}
                    className={`btn category-btn ${selectedKategori === cat ? "btn-primary" : "btn-outline-secondary"}`}
                    onClick={() => onSelectKategori && onSelectKategori(cat)}
                >
                    {cat}
                </button>
            ))}

            <div className="dropdown" ref={ref}>
                <button
                    className={`btn category-btn dropdown-toggle ${isDropdownActive ? "btn-primary" : "btn-outline-secondary"}`}
                    type="button"
                    aria-expanded={open}
                    onClick={() => setOpen(v => !v)}
                >
                    {isDropdownActive ? selectedKategori : "Lainnya.."}
                </button>
                <ul className={`dropdown-menu shadow-sm border-0 mt-1 ${open ? "show" : ""}`} style={{ position: "absolute" }}>
                    {dropdownCategories.map((cat) => (
                        <li key={cat}>
                            <button
                                className={`dropdown-item d-flex align-items-center gap-2 py-2 ${selectedKategori === cat ? "active fw-bold" : ""}`}
                                onClick={() => { onSelectKategori && onSelectKategori(cat); setOpen(false); }}
                            >
                                <i className="bi bi-tag text-muted"></i>
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default KategoriButton;