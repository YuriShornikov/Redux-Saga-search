import React, { useState, useEffect } from 'react';
import { searchApi } from '../api/search';

export const Search: React.FC = () => {
    const [query, setQuery] = useState('');
    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (query === '') {

            // Очищаем данные, если строка ввода пуста
            setData([]);
            setError(null);
            return;
        }

        setLoading(true);

        // Сбрасываем ошибку при новом запросе и очищаем данные
        setError(null);
        setData([]);

        // Функция для отправки запроса
        searchApi(query)
        .then((responseData) => {
            setData(responseData);
            setLoading(false);
        })
        .catch(() => {
            setLoading(false);
            setError('Something went wrong');
        });
    }, [query]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleSearchChange}
                placeholder="Type something to search..."
            />
            {query === '' && <p>Type something to search...</p>}
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {data.length === 0 && !loading && query !== '' && <p>No results found</p>}
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    );
};
