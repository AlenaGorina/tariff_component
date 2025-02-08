import React from 'react';

interface TariffProps {
    title: string;
    price: string;
    speed: string;
    footer: string;
    selected: boolean;
    onSelect: () => void;
}

const Tariff: React.FC<TariffProps> = ({
    title,
    price,
    speed,
    footer,
    selected,
    onSelect,
}) => {
    return (
        <div 
        className={`tariff ${selected ? "selected" : ""}`}
        onClick={onSelect}
        >
            <h2>{title}</h2>
            <p>{price}</p>
            <p>{speed}</p>
            <footer>{footer}</footer>
        </div>
    );
};

export default Tariff;