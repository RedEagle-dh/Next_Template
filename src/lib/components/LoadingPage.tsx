'use client';

import { Spinner } from '@nextui-org/react';
import { useLoading } from '../../lib/context/LoadingContext';
import React, { useState, useEffect } from 'react';

const LoadingScreen: React.FC = () => {
    const { isLoading } = useLoading();
    const [ showMessage, setShowMessage ] = useState(false);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (isLoading) {
            // Setzt einen Timer, der nach 5 Sekunden die Nachricht anzeigt
            timer = setTimeout(() => {
                setShowMessage(true);
            }, 5000);
        }

        // Bereinigungsfunktion, die den Timer zurücksetzt, wenn isLoading sich ändert
        return () => {
            clearTimeout(timer);
            setShowMessage(false); // Setzt die Nachricht zurück, wenn isLoading sich ändert
        };
    }, [ isLoading ]);

    if (!isLoading) return null;

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 1000
        }}>
            <Spinner />
            {showMessage && (
                <p style={{ color: 'white', marginTop: '20px' }}>
                    The loading process is taking longer than usual. Please try reloading the page. If the problem persists, please contact the support.
                </p>
            )}
        </div>
    );
};

export default LoadingScreen;
