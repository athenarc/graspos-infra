import React, { useState, useEffect } from 'react';
import { FaSearch, FaEye, FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import styles from './Search.module.css';
import { useHistory, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import axios from 'axios';
import Layout from '@theme/Layout';

const SearchPage = () => {
    const [depositions, setDepositions] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const history = useHistory();
    const location = useLocation();

    const sanitizeInput = (input) => input.replace(/!/g, '');

    const fetchDepositions = async (term, pageNum) => {
        setLoading(true);
        setError(null);
        try {
            const sanitizedTerm = sanitizeInput(term || ''); // Default to empty string
            const response = await axios.get(`https://zenodo.org/api/records`, {
                params: {
                    size: 10,
                    page: pageNum,
                    // communities: 'graspos-tools',
                    q: sanitizedTerm,
                },
            });

            const { hits } = response.data;
            setDepositions(hits.hits || []);
            setTotalPages(Math.ceil(hits.total / 10));

            // Check for no results condition
            if (hits.total === 0) {
                setError("No results found for your search.");
            }
        } catch (error) {
            setError('Failed to fetch depositions. Please try again later.');
            console.error('Fetch error:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const parsedQuery = queryString.parse(location.search);
        const query = parsedQuery.q || '';
        setSearchTerm(query);
        fetchDepositions(query, page);
    }, [location.search, page]);

    const handleSearch = (term) => {
        const sanitizedTerm = sanitizeInput(term);
        if (!sanitizedTerm.trim()) {
            setError('Invalid search term. Please try again.');
            return;
        }
        setSearchTerm(sanitizedTerm);
        setPage(1);
        const newQuery = queryString.stringify({ q: sanitizedTerm });
        history.push(`?${newQuery}`);
        fetchDepositions(sanitizedTerm, 1);
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') handleSearch(searchTerm);
    };

    const handleSubmit = () => handleSearch(searchTerm);

    return (
        <Layout>
            <div className={styles.searchContainer}>
                <h1 className={styles.header}>Explore GrapsOS Tools</h1>
                <div className={styles.searchWrapper}>
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Search for depositions..."
                        className={styles.searchInput}
                    />
                    <button className={styles.searchButton} onClick={handleSubmit}>
                        <FaSearch />
                    </button>
                </div>

                <div className={styles.resultsContainer}>
                    {loading && <div className={styles.loading}>Loading...</div>}
                    {error && <div className={styles.error}>{error}</div>}
                    {!loading && !error && depositions.length === 0 && (
                        <div className={styles.noResults}>No results found for your search.</div>
                    )}
                    {!loading && !error && 
                    <div className={styles.resultsContainer}>
                        {depositions.map((result) => (
                            <div key={result.id} className={styles.resultRow}>
                                <div className={styles.resultInfo}>
                                    <a href={result.links.self_html} target="_blank" style={{ textDecoration: 'none' }}>
                                        <h3 className={styles.resultTitle}>
                                            {result.title || 'No Title Available'} <small><FaExternalLinkAlt className={styles.externalLinkIcon} /></small>
                                        </h3>
                                    </a>
                                    <p className={styles.resultAuthors}>
                                        Authors: {result.metadata.creators ? result.metadata.creators.map(creator => creator.name).join('; ') : 'Unknown'}
                                    </p>
                                    <p className={styles.resultUpdated}>
                                        Last update: {result.updated ? new Date(result.updated).toLocaleDateString() : 'Unknown'}
                                    </p>
                                    <div className={styles.stats}>
                                        <span className={styles.statItem}>
                                            <FaDownload /> {result.stats.downloads || 0}
                                        </span>
                                        <span className={styles.statItem}>
                                            <FaEye /> {result.stats.views || 0}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                }

                {!loading && !error && totalPages > 1 && (
                    <div className={styles.pagination}>
                        <button 
                            className={styles.paginationButton}
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                        >
                            Previous
                        </button>
                        <span>Page {page} of {totalPages}</span>
                        <button 
                            className={styles.paginationButton}
                            onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                        >
                            Next
                        </button>
                    </div>
                )}
                </div>
            </div>
        </Layout>
    );
};

export default SearchPage;
