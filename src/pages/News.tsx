import React from 'react';
import { Calendar, ArrowRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY } from '../constants/company';

export function News() {
  const newsItems = [
    {
      title: 'Comunicação institucional e canais de contato',
      date: 'Atualização de demo',
      excerpt:
        'Esta seção pode receber releases oficiais da cooperativa. Enquanto isso, use os canais formais no rodapé e na página de contato para cotações e informações.',
    },
    {
      title: 'Cooperativismo e transporte agro',
      date: 'Conteúdo editorial',
      excerpt:
        'Artigos sobre modelo cooperativo, segurança de transporte e logística de cargas agroindustriais podem ser publicados aqui com curadoria da equipe de comunicação.',
    },
    {
      title: 'Operação com foco em cereais, fertilizantes e sementes',
      date: 'Linha editorial sugerida',
      excerpt:
        'Materiais que reforcem a especialização da frota e os cuidados com segurança e conformidade tendem a gerar confiança junto a empresas e cooperados.',
    },
  ];

  return (
    <div className="pb-16 pt-24">
      <div className="bg-brand-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl font-bold md:text-5xl">Notícias</h1>
          <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-200">
            Espaço reservado para atualizações oficiais da {COMPANY.brandName}. Substitua os textos abaixo por releases reais quando disponíveis.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {newsItems.map((item, idx) => (
            <article
              key={idx}
              className="flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative flex h-44 items-center justify-center bg-gradient-to-br from-brand-primary via-[#2d4a35] to-brand-accent text-white">
                <Newspaper className="h-14 w-14 opacity-90" strokeWidth={1.25} aria-hidden />
              </div>
              <div className="flex flex-grow flex-col p-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-medium text-brand-accent">
                  <Calendar size={16} aria-hidden />
                  {item.date}
                </div>
                <h3 className="mb-3 line-clamp-2 font-display text-xl font-bold text-brand-primary">{item.title}</h3>
                <p className="line-clamp-4 flex-grow leading-relaxed text-gray-600">{item.excerpt}</p>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-2 font-bold text-brand-accent transition-colors hover:text-brand-primary"
                >
                  Falar com a cooperativa <ArrowRight size={18} aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
