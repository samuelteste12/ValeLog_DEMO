import React from 'react';
import { Shield, Award, TrendingUp, Heart } from 'lucide-react';

export function Benefits() {
  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-brand-accent" />,
      title: "Segurança Garantida",
      description: "Monitoramento 24h e suporte completo para sua tranquilidade nas estradas."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-accent" />,
      title: "Maior Rentabilidade",
      description: "Acesso a fretes com melhores condições e menor custo operacional."
    },
    {
      icon: <Award className="w-8 h-8 text-brand-accent" />,
      title: "Reconhecimento",
      description: "Programas de premiação e valorização do motorista cooperado."
    },
    {
      icon: <Heart className="w-8 h-8 text-brand-accent" />,
      title: "Plano de Saúde",
      description: "Condições especiais em planos de saúde e odontológicos para a família."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Benefícios aos Cooperados</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Fazer parte da Vale Log significa ter acesso a vantagens exclusivas que impulsionam o seu negócio.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="bg-brand-light w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-primary">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
