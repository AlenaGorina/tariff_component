import React, { useState } from "react";
import Tariff from './components/Tariff';
import './index.css';

const App: React.FC = () => {
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);

  const tariffs = [
    {
      title: "Безлимитный 300",
      price: "300 руб/мес",
      speed: "до 10 Мбит/сек",
      footer: "Объем включенного трафика не ограничен",
      id: "tariff300",
    },
    {
      title: "Безлимитный 450",
      price: "450 руб/мес",
      speed: "до 50 Мбит/сек",
      footer: "Объем включенного трафика не ограничен",
      id: "tariff450",
    },
    {
      title: "Безлимитный 550",
      price: "550 руб/мес",
      speed: "до 100 Мбит/сек",
      footer: "Объем включенного трафика не ограничен",
      id: "tariff550",
    },
    {
      title: "Безлимитный 1000",
      price: "1000 руб/мес",
      speed: "до 200 Мбит/сек",
      footer: "Объем включенного трафика не ограничен",
      id: "tariff1000",
    },
  ];

  const handleTariffSelect = (id: string) => {
    setSelectedTariff(id);
  };

  return (
    <div className="tariff-container">
      {tariffs.map((tariff) => (
        <Tariff 
          key={tariff.id}
          title={tariff.title}
          price={tariff.price}
          speed={tariff.speed}
          footer={tariff.footer}
          selected={selectedTariff === tariff.id}
          onSelect={() => handleTariffSelect(tariff.id)}
          />
      ))}
    </div>
  );
};

export default App;