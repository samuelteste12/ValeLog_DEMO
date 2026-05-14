import React from 'react';
import { ShieldAlert, MapPin, Eye, Lock } from 'lucide-react';

export function Security() {
  const securityFeatures = [
    {
      icon: <MapPin className="w-8 h-8 text-brand-accent" />,
      title: "Rastreamento 24h",
      description: "Acompanhamento em tempo real de toda a frota durante o trajeto."
    },
    {
      icon: <Eye className="w-8 h-8 text-brand-accent" />,
      title: "Monitoramento Ativo",
      description: "Equipe dedicada para agir rapidamente em caso de desvios de rota."
    },
    {
      icon: <ShieldAlert className="w-8 h-8 text-brand-accent" />,
      title: "Gerenciamento de Risco",
      description: "Análise prévia de rotas e motoristas para minimizar imprevistos."
    },
    {
      icon: <Lock className="w-8 h-8 text-brand-accent" />,
      title: "Seguro de Carga",
      description: "Cobertura completa para garantir a integridade do seu produto."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Segurança e Monitoramento</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            A proteção da sua carga e a segurança dos nossos motoristas são prioridades absolutas na Vale Log.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {securityFeatures.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-brand-light w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
