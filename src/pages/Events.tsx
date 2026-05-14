import React from 'react';
import { BookOpen, Users, GraduationCap } from 'lucide-react';

export function Events() {
  const events = [
    {
      icon: <BookOpen className="w-8 h-8 text-brand-accent" />,
      title: "Treinamento de Direção Defensiva",
      description: "Curso obrigatório para todos os novos cooperados, focando na segurança e prevenção de acidentes."
    },
    {
      icon: <Users className="w-8 h-8 text-brand-accent" />,
      title: "Workshop de Gestão Financeira",
      description: "Aprenda a administrar melhor os ganhos e custos do seu caminhão com especialistas da área."
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-brand-accent" />,
      title: "Atualização sobre Legislação",
      description: "Mantenha-se informado sobre as novas leis de trânsito e regulamentações do transporte de cargas."
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Cursos e Eventos</h1>
          <p className="text-xl max-w-2xl mx-auto text-gray-200">
            Investimos na capacitação contínua dos nossos motoristas e colaboradores para garantir excelência no serviço.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow text-center">
              <div className="bg-brand-light w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                {event.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-brand-primary">{event.title}</h3>
              <p className="text-gray-600 leading-relaxed">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
