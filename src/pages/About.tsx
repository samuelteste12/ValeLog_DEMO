import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Target, Shield, HeartHandshake, Truck } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroTexture } from '../components/HeroTexture';
import { SectionVisual } from '../components/SectionVisual';
import { COMPANY } from '../constants/company';

export function About() {
  return (
    <div className="min-h-screen bg-white pb-16 pt-24">
      <section className="relative overflow-hidden bg-brand-primary py-20 text-white lg:py-32">
        <HeroTexture variant="dark" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <Users size={16} aria-hidden />
              Sobre a {COMPANY.brandName}
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Cooperativa com foco em transporte agro</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-200">
              A {COMPANY.brandName} representa a {COMPANY.legalName}: uma organização cooperativista voltada a transporte rodoviário, com ênfase em
              cereais, fertilizantes e sementes e atendimento a empresas e cooperados em âmbito nacional.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Nossa história em linha institucional</h2>
              <div className="mt-6 space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  A cooperativa se organiza para reunir cooperados, estrutura operacional e relacionamento comercial em um mesmo projeto: entregar
                  transporte com segurança, previsibilidade e respeito às pessoas envolvidas.
                </p>
                <p>
                  O modelo cooperativo aproxima quem opera da governança da organização, favorecendo alinhamento de incentivos, transparência e
                  melhoria contínua — especialmente importante em operações de grande porte e em rotas sensíveis.
                </p>
                <p>
                  Hoje, a {COMPANY.brandName} se apresenta ao mercado com frota estruturada e canais oficiais de contato para cotação, mantendo a
                  identidade institucional da {COMPANY.legalName}.
                </p>
              </div>
            </div>
            <div className="relative">
              <SectionVisual icon={Truck} label="Área reservada para fotografia institucional da base e da operação." />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">O que nos move</h2>
            <p className="mt-4 text-lg text-gray-600">
              Princípios que orientam a comunicação com o mercado e a relação com cooperados e clientes.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Target,
                title: 'Missão (institucional)',
                desc: 'Oferecer transporte cooperativo com padrões de segurança e atendimento alinhados às necessidades de empresas e cooperados.',
              },
              {
                icon: Shield,
                title: 'Compromisso',
                desc: 'Fortalecer processos, transparência e responsabilidade operacional em cada etapa — da cotação à execução.',
              },
              {
                icon: HeartHandshake,
                title: 'Valores',
                desc: 'Cooperação, respeito, segurança e melhoria contínua — pilares de uma cooperativa de transporte moderna.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-transform duration-300 hover:-translate-y-0.5"
              >
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light text-brand-accent">
                  <item.icon size={32} aria-hidden />
                </div>
                <h3 className="font-display text-2xl font-bold text-brand-primary">{item.title}</h3>
                <p className="mt-4 leading-relaxed text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-primary py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
                  <h4 className="text-lg font-bold sm:text-xl">Cooperados na operação</h4>
                  <p className="mt-2 text-sm text-gray-300 sm:text-base">Quem transporta está alinhado ao modelo associativo da cooperativa.</p>
                </div>
                <div className="rounded-2xl border border-brand-accent-hover bg-brand-accent p-5 sm:p-6">
                  <h4 className="text-lg font-bold sm:text-xl">Comunicação objetiva</h4>
                  <p className="mt-2 text-sm text-white/90 sm:text-base">Canais oficiais para cotação e suporte, com linguagem clara e responsável.</p>
                </div>
              </div>
              <div className="mt-8 space-y-4">
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
                  <h4 className="text-lg font-bold sm:text-xl">Escala com disciplina</h4>
                  <p className="mt-2 text-sm text-gray-300 sm:text-base">Frota estruturada para demandas relevantes, com foco em segurança.</p>
                </div>
                <div className="rounded-2xl border border-white/20 bg-white/10 p-5 sm:p-6">
                  <h4 className="text-lg font-bold sm:text-xl">Agro como eixo</h4>
                  <p className="mt-2 text-sm text-gray-300 sm:text-base">Cereais, fertilizantes e sementes como foco operacional da proposta.</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">Por que o modelo cooperativo importa</h2>
              <p className="mt-6 text-xl leading-relaxed text-gray-300">
                Ao contratar a {COMPANY.brandName}, você fala com uma cooperativa de transporte — uma estrutura que une mercado, governança e
                operação em um mesmo propósito.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-400">
                Isso favorece consistência, responsabilidade e um relacionamento comercial mais próximo, especialmente em operações que exigem
                coordenação constante e confiança mútua.
              </p>
              <Link to="/contact" className="mt-10 inline-block">
                <Button variant="primary" size="lg" className="min-h-[48px] bg-white text-lg text-brand-primary hover:bg-gray-100">
                  Falar com a equipe
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
