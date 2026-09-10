import React from 'react';

function KategoriButton({ selectedKategori = "Semua", onSelectKategori }) {
    const mainCategories = ["Semua", "Makanan", "Minuman", "Bahan Makanan"];
    const dropdownCategories = ["Snack", "Kebutuhan Harian"];

    const isDropdownActive = dropdownCategories.includes(selectedKategori);

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

            <div className="dropdown">
                <button
                    className={`btn category-btn dropdown-toggle ${isDropdownActive ? "btn-primary" : "btn-outline-secondary"}`}
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    {isDropdownActive ? selectedKategori : "Lainnya.."}
                </button>
                <ul className="dropdown-menu shadow-sm border-0 mt-1">
                    {dropdownCategories.map((cat) => (
                        <li key={cat}>
                            <button
                                className={`dropdown-item d-flex align-items-center gap-2 py-2 ${selectedKategori === cat ? "active fw-bold" : ""}`}
                                onClick={() => onSelectKategori && onSelectKategori(cat)}
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