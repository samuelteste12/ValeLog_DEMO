import React from 'react';
import { Truck, ShieldCheck, Wrench } from 'lucide-react';

export function Fleet() {
  const fleetTypes = [
    {
      icon: <Truck className="w-8 h-8 text-brand-accent" />,
      title: "Graneleiros",
      description: "Ideal para o transporte de grãos, farelos e fertilizantes com máxima eficiência."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-accent" />,
      title: "Sider",
      description: "Agilidade na carga e descarga lateral para produtos paletizados."
    },
    {
      icon: <Wrench className="w-8 h-8 text-brand-accent" />,
      title: "Manutenção Preventiva",
      description: "Frota constantemente revisada para garantir a segurança nas rodovias."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Nossa Frota</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Com uma frota média de 200 caminhões, garantimos a capacidade e a qualidade necessárias para o seu transporte.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {fleetTypes.map((type, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="bg-brand-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {type.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-primary">{type.title}</h3>
              <p className="text-gray-600 leading-relaxed">{type.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
