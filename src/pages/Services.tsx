import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Truck, Package, Map, Clock, Shield, BarChart, Users, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { SectionVisual } from '../components/SectionVisual';

export function Services() {
  const services = [
    {
      id: 'freight',
      icon: Truck,
      title: 'Transporte rodoviário',
      problem: 'Operações agroindustriais exigem fornecedor com escala, segurança e comunicação clara — especialmente em produtos sensíveis.',
      solution:
        'A Vale Log organiza o transporte cooperativo com foco em cereais, fertilizantes e sementes, priorizando alinhamento comercial antes da operação.',
      benefits: ['Contato direto para cotação', 'Foco em cargas a granel', 'Modelo cooperativo', 'Atendimento nacional (conforme viabilidade)'],
      visualIcon: Truck,
      visualLabel: 'Substitua por imagem oficial da operação quando disponível.',
    },
    {
      id: 'logistics',
      icon: Package,
      title: 'Organização logística',
      problem: 'Rotas e janelas mal definidas geram custo, incerteza e retrabalho — principalmente em campanhas de maior demanda.',
      solution:
        'Trabalhamos com planejamento responsável: entendimento de rota, produto e volume, para viabilizar a operação com segurança e previsibilidade.',
      benefits: ['Levantamento de requisitos', 'Comunicação comercial objetiva', 'Coordenação com cooperados', 'Foco em execução segura'],
      visualIcon: Package,
      visualLabel: 'Área para foto de frota, pátio ou operação — conteúdo ilustrativo da demo.',
    },
    {
      id: 'contracted',
      icon: Map,
      title: 'Demandas recorrentes',
      problem: 'Empresas precisam de parceiro estável para volumes recorrentes, sem perder flexibilidade quando o mercado muda.',
      solution:
        'A cooperativa pode estruturar relacionamento comercial contínuo, respeitando sazonalidade, capacidade e governança cooperativista.',
      benefits: ['Relacionamento de médio prazo', 'Transparência no contato', 'Capacidade referência da frota', 'Canais oficiais de atendimento'],
      visualIcon: Map,
      visualLabel: 'Ilustração institucional — personalize com material real da empresa.',
    },
  ];

  return (
    <div className="min-h-screen bg-white pb-16 pt-24">
      <section className="bg-brand-primary py-20 text-white">
        <div className="container mx-auto max-w-4xl px-4 text-center md:px-6">
          <h1 className="font-display text-4xl font-bold md:text-5xl lg:text-6xl">Serviços</h1>
          <p className="mt-4 text-xl leading-relaxed text-gray-300">
            Transporte cooperativo com foco em cereais, fertilizantes e sementes — e atendimento comercial organizado para empresas e cooperados.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto space-y-20 px-4 md:space-y-28 md:px-6 lg:space-y-32">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col items-center gap-12 lg:gap-16 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}
            >
              <div className="w-full space-y-8 lg:w-1/2">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-light text-brand-accent">
                  <service.icon size={32} aria-hidden />
                </div>
                <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl">{service.title}</h2>

                <div className="space-y-6">
                  <div className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-slate-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" aria-hidden /> Contexto
                    </h4>
                    <p className="text-slate-700">{service.problem}</p>
                  </div>

                  <div className="rounded-xl border border-emerald-100 bg-emerald-50/90 p-6">
                    <h4 className="mb-2 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-emerald-800">
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" aria-hidden /> Atuação da cooperativa
                    </h4>
                    <p className="text-emerald-950/85">{service.solution}</p>
                  </div>
                </div>

                <div>
                  <h4 className="mb-4 text-lg font-bold text-brand-primary">Benefícios alinhados à proposta</h4>
                  <ul className="grid gap-4 sm:grid-cols-2">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-600">
                        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                          <CheckCircle2 size={14} aria-hidden />
                        </div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link to="/contact" className="inline-block">
                  <Button size="lg" className="group min-h-[48px] text-lg">
                    Solicitar cotação
                    <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} aria-hidden />
                  </Button>
                </Link>
              </div>

              <div className="w-full lg:w-1/2">
                <SectionVisual icon={service.visualIcon} label={service.visualLabel} aspect="video" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Por que falar com a Vale Log</h2>
            <p className="mt-4 text-lg text-gray-600">Critérios que guiam uma proposta institucional séria e moderna.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: 'Agilidade no primeiro contato', desc: 'WhatsApp e formulário para você começar com informações objetivas.' },
              { icon: Shield, title: 'Segurança como prioridade', desc: 'Disciplina operacional e cultura de prevenção no centro da mensagem.' },
              { icon: BarChart, title: 'Escala cooperativa', desc: 'Frota estruturada para demandas relevantes, com números de referência claros.' },
              { icon: Users, title: 'Atendimento comercial', desc: 'Canais oficiais e equipe para orientar viabilidade e próximos passos.' },
            ].map((prop, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent/10 text-brand-accent">
                  <prop.icon size={24} aria-hidden />
                </div>
                <h4 className="font-bold text-brand-primary">{prop.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{prop.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
