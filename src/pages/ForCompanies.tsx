import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShieldCheck, Clock, CheckCircle2, Building2, Package } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroTexture } from '../components/HeroTexture';
import { SectionVisual } from '../components/SectionVisual';
import { INSTITUTIONAL_METRICS } from '../constants/company';

export function ForCompanies() {
  return (
    <div className="min-h-screen bg-white pb-16 pt-24">
      <section className="relative overflow-hidden bg-brand-primary py-20 text-white lg:py-32">
        <HeroTexture variant="dark" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <Building2 size={16} aria-hidden />
              Para empresas
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Transporte com escala, segurança e transparência</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-300">
              A Vale Log é uma cooperativa de transporte com frota estruturada e foco em cereais, fertilizantes e sementes. Fale com a equipe
              comercial para avaliar viabilidade, rota e volume.
            </p>
            <Link to="/contact" className="mt-10 inline-block">
              <Button size="lg" className="group min-h-[48px] text-lg">
                Solicitar cotação
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} aria-hidden />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">O que a cooperativa oferece ao mercado</h2>
            <p className="mt-4 text-lg text-gray-600">
              Comunicação objetiva: entendimento comercial antes da operação e execução com foco em segurança e previsibilidade.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Clock,
                context: 'Planejamento de capacidade',
                title: 'Planejamento comercial',
                desc: 'Avaliação de viabilidade com base em rota, produto e janela — para alinhar expectativas desde o início.',
              },
              {
                icon: TrendingUp,
                context: 'Sazonalidade e volume',
                title: 'Escala cooperativa',
                desc: 'Mais de 200 caminhões graneleiros e referência de mais de 61.000 toneladas/mês de capacidade (texto institucional da demo).',
              },
              {
                icon: ShieldCheck,
                context: 'Gestão de riscos',
                title: 'Cultura de segurança',
                desc: 'Prioridade em disciplina, procedimentos e responsabilidade — pilares para proteger pessoas, carga e reputação.',
              },
            ].map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-brand-accent">
                  <item.icon size={28} aria-hidden />
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">{item.context}</p>
                  <h3 className="font-display text-2xl font-bold tracking-tight text-brand-primary">{item.title}</h3>
                  <p className="leading-relaxed text-gray-700">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 lg:order-1">
              <SectionVisual icon={Package} aspect="square" label="Espaço para imagem corporativa — operação, frota ou equipe." />
              <div className="mt-6 rounded-2xl border border-gray-100 bg-brand-light p-6 text-center lg:text-left">
                <p className="text-sm font-medium uppercase tracking-wide text-gray-500">Referência institucional</p>
                <p className="font-display text-2xl font-bold text-brand-primary">Mais de {INSTITUTIONAL_METRICS.monthlyCapacity} toneladas/mês</p>
                <p className="mt-1 text-sm text-gray-600">Capacidade citada nos materiais da demo — confirmar sempre com a cooperativa.</p>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Feito para demandas B2B</h2>

              <div className="mt-8 space-y-4">
                {[
                  {
                    title: 'Contato comercial centralizado',
                    desc: 'Telefone, e-mail e WhatsApp oficiais para iniciar a conversa com clareza e registro.',
                  },
                  {
                    title: 'Acompanhamento da negociação',
                    desc: 'Fluxo orientado a entender rota, produto e requisitos — antes de comprometer a operação.',
                  },
                  {
                    title: 'Cooperativa e governança',
                    desc: 'Modelo associativo que alinha incentivos e reforça responsabilidade na execução.',
                  },
                  {
                    title: 'Alcance nacional',
                    desc: 'Atuação em âmbito nacional, conforme viabilidade comercial e operacional.',
                  },
                ].map((benefit, idx) => (
                  <div key={idx} className="flex gap-4 rounded-xl p-4 transition-colors hover:bg-brand-light">
                    <div className="mt-0.5 shrink-0 text-brand-accent">
                      <CheckCircle2 size={24} aria-hidden />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-brand-primary">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-light py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl bg-brand-primary p-8 text-center text-white shadow-xl sm:p-12 md:p-16">
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">Próximo passo</h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-300">
              Envie sua demanda pelos canais oficiais. Quanto mais detalhes (rota, produto e volume), mais objetiva será a resposta inicial.
            </p>
            <Link to="/contact" className="mt-10 inline-block">
              <Button variant="primary" size="lg" className="min-h-[48px] bg-white text-lg text-brand-primary hover:bg-gray-100">
                Abrir contato
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
