import { useState, useEffect } from 'react';

const usePlaylists = () => {
    const [playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const response = await fetch('http://localhost:8000/spotify/playlists', {
                    credentials: "include",
                });
                if (response.ok) {
                    const data = await response.json();
                    setPlaylists(data.items);
                } else {
                    console.error('Failed to fetch playlists:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching playlists:', error);
            }
        };

        fetchPlaylists();
    }, []);
    return playlists;
};

export default usePlaylists;
