import React, { useState, useEffect, useMemo } from 'react';

import { BookMark } from '../../../context/BookMarkContext';
import { Documents } from '../../../context/DocumentsContext';

import ArchiveListItem from "../../Browse/ArchiveListItem"
import Pagination from '../../../components/Pagination';
import EmptyContainer from '../../../components/Empty/EmptyContainer';

let PageSize = 10;

const Bookmarks = () => {
    // state
    const [currentPage, setCurrentPage] = useState(1);
    const [documents, setDocuments] = useState([]);
    // context
    const { getAllUserBookMark } = BookMark();
    const { getDocument } = Documents();

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return documents.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, documents]);

    const _getAllUserBookMark = async () => {
        try {
            const data = await getAllUserBookMark();
            const results = [];
            for(let i = 0; i < data[0].bookMarks.length; i++) {
                const newData = await getDocument(data[0].bookMarks[i]);
                if(newData !== undefined) {
                    results.push(newData);
                }
            }
            setDocuments(results)
        } catch (error) {
            setDocuments([]);
        }
    }

    useEffect(() => {
        _getAllUserBookMark()
    }, []);

    return (
        <div>
            {documents.length > 0 && currentTableData.map((item, index) => {
                return (
                    <ArchiveListItem
                        key={index}
                        index={index}
                        item={item}
                    />
                );
            })}
            {
                documents.length === 0 && <EmptyContainer/> 
            }
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={documents.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)}
            />
        </div>
    );
}

export default Bookmarks;
