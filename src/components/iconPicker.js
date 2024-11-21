import React, { useEffect, useState } from 'react'
import "../css/iconPicker.css"
import * as Icon from 'react-feather';
import Pagination from '@mui/material/Pagination';

function IconPicker({ rowsInOnePage, columnsInOnePage, iconHeight, iconWidth, pickerHeight = 500, pickerWidth = 500, selectedIcon }) {
    const [icons, setIcons] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        let iconNames = Object.keys(Icon); 
        const iconsInOnePage = rowsInOnePage * columnsInOnePage;
        setTotalPages(Math.floor(iconNames.length / iconsInOnePage));
        iconNames = iconNames.slice((page - 1) * iconsInOnePage, page * iconsInOnePage)
        setIcons(iconNames.map(e => Icon[e]));
        console.log(icons)
    }, [page])

    function e(Component, index) {
        return (
            <div style={{ cursor: "pointer" }} onClick={() => selectedIcon(Component)}>
                <Component height={iconHeight} width={iconWidth} />
            </div>
        );
    }

    return (
        <>
            <div className='picker-main-container'
                style={{
                    height: `${pickerHeight}px`,
                    width: `${pickerWidth}px`,
                    gridTemplateRows: `repeat(${rowsInOnePage}, 1fr)`,
                    gridTemplateColumns: `repeat(${columnsInOnePage}, 1fr)`,
                }}
            >
                {
                    icons.map(e)
                }
            </div>
            <Pagination count={totalPages} page={page} onChange={(e, page) => setPage(page)}/>
        </>
    )
}

export default IconPicker
