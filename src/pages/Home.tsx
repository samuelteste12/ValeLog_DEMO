import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  Truck,
  ShieldCheck,
  MapPin,
  Package,
  Leaf,
  Building2,
  Phone,
  Mail,
  MessageCircle,
  Globe2,
  Users,
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { cn } from '../components/ui/Button';
import { HeroTexture } from '../components/HeroTexture';
import { SectionVisual } from '../components/SectionVisual';
import { COMPANY, getWhatsAppHref, INSTITUTIONAL_METRICS } from '../constants/company';

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent focus-visible:ring-offset-2 ring-offset-white';

export function Home() {
  return (
    <div className="min-h-screen bg-white pt-[72px] sm:pt-20 md:pt-[88px]">
      {/* Hero */}
      <section id="hero" className="relative overflow-hidden bg-brand-light py-16 sm:py-20 lg:py-28">
        <HeroTexture variant="light" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-brand-accent/20 bg-white/80 px-3 py-1.5 text-xs font-medium text-brand-primary shadow-sm backdrop-blur-sm sm:text-sm">
              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-brand-accent" aria-hidden />
              {COMPANY.brandName} — {COMPANY.legalName}
            </div>
            <h1 className="font-display text-4xl font-bold leading-[1.1] text-brand-primary sm:text-5xl lg:text-6xl xl:text-7xl">
              Transporte cooperativo com estrutura, segurança e alcance nacional
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600 sm:text-xl">
              A {COMPANY.brandName} conecta empresas, produtores e cooperados com soluções de transporte para cereais,
              fertilizantes e sementes em todo o Brasil.
            </p>
            <div className="mt-10 flex w-full max-w-xl flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  btnBase,
                  'group min-h-[48px] w-full bg-brand-accent px-8 text-lg text-white shadow-md hover:bg-brand-accent-hover sm:w-auto'
                )}
              >
                Solicitar Cotação
                <ArrowRight className="transition-transform group-hover:translate-x-1" size={20} aria-hidden />
              </a>
              <Link
                to="/#frota"
                className={cn(
                  btnBase,
                  'min-h-[48px] w-full border border-gray-300 bg-white/90 px-8 text-lg text-brand-dark hover:bg-gray-50 sm:w-auto'
                )}
              >
                Conhecer a Frota
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Prefere enviar detalhes por escrito?{' '}
              <Link to="/contact" className="font-semibold text-brand-accent underline-offset-2 hover:underline">
                Acesse o formulário de contato
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Números */}
      <section id="numeros" className="border-y border-gray-100 bg-white py-10 sm:py-12 md:py-14">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 divide-y divide-gray-100 sm:grid-cols-3 sm:gap-6 sm:divide-x sm:divide-y-0 md:gap-10">
            <div className="space-y-2 pt-2 text-center sm:pt-0 sm:pr-4">
              <h3 className="font-display text-3xl font-bold text-brand-accent sm:text-4xl">Mais de {INSTITUTIONAL_METRICS.trucks}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm">{INSTITUTIONAL_METRICS.trucksLabel}</p>
            </div>
            <div className="space-y-2 pt-8 text-center sm:pt-0 sm:px-4">
              <h3 className="font-display text-3xl font-bold text-brand-accent sm:text-4xl">
                Mais de {INSTITUTIONAL_METRICS.monthlyCapacity}
              </h3>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm">
                {INSTITUTIONAL_METRICS.monthlyCapacityLabel}
              </p>
            </div>
            <div className="space-y-2 pt-8 text-center sm:pt-0 sm:pl-4">
              <h3 className="font-display text-xl font-bold leading-snug text-brand-accent sm:text-2xl">{INSTITUTIONAL_METRICS.cargoTypes}</h3>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500 sm:text-sm">Foco operacional da cooperativa</p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">
              Serviços pensados para a cadeia agroindustrial
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Operação cooperativa, padrões de segurança e capacidade para atender demandas recorrentes e sazonais, com
              comunicação clara do início ao fim.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Truck,
                title: 'Transporte rodoviário',
                desc: 'Movimentação de cargas com foco em cereais, fertilizantes e sementes, com processos alinhados à realidade do campo e da indústria.',
              },
              {
                icon: ShieldCheck,
                title: 'Segurança e disciplina operacional',
                desc: 'Prioridade em procedimentos seguros, manutenção e consciência de risco — pilares para proteger pessoas, carga e reputação dos parceiros.',
              },
              {
                icon: MapPin,
                title: 'Alcance nacional',
                desc: 'Estrutura para apoiar operações em diferentes regiões do Brasil, com atendimento comercial organizado e canais de contato objetivos.',
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="group rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md sm:p-8"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-brand-light text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                  <service.icon size={28} aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-primary">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-600">{service.desc}</p>
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center font-medium text-brand-accent hover:text-brand-accent-hover"
                >
                  Ver detalhes <ArrowRight size={16} className="ml-1" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Sobre a Vale Log</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                A {COMPANY.brandName} é a marca comercial da {COMPANY.legalName}. Atuamos como cooperativa de transporte,
                integrando cooperados e demandas de empresas que precisam de solidez, transparência e capacidade para
                escalar operações com segurança.
              </p>
              <ul className="mt-8 space-y-6">
                {[
                  {
                    title: 'Modelo cooperativo',
                    desc: 'Alinhamento de interesses entre cooperados e clientes, com foco em resultado sustentável e relacionamento de longo prazo.',
                  },
                  {
                    title: 'Frota estruturada',
                    desc: 'Capacidade expressiva em caminhões graneleiros para suportar operações de grande porte com consistência.',
                  },
                  {
                    title: 'Atendimento comercial objetivo',
                    desc: 'Canais claros para cotação e dúvidas, facilitando o próximo passo com quem precisa mover carga com responsabilidade.',
                  },
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4">
                    <div className="mt-0.5 shrink-0 text-brand-accent">
                      <CheckCircle2 size={24} aria-hidden />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-primary">{item.title}</h4>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about">
                  <Button size="lg" className="w-full min-h-[48px] text-lg sm:w-auto">
                    Conheça nossa história e valores
                    <ArrowRight className="ml-2" size={20} aria-hidden />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative pb-20 sm:pb-6">
              <SectionVisual icon={Truck} label="Imagem institucional — substitua por fotografia oficial quando disponível." />
              <div className="absolute -bottom-2 left-4 right-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-xl sm:-bottom-6 sm:left-auto sm:right-4 sm:max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-accent">
                    <Package size={22} aria-hidden />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500">Capacidade mensal (referência)</p>
                    <p className="font-display text-2xl font-bold text-brand-primary">{INSTITUTIONAL_METRICS.monthlyCapacity} t</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frota */}
      <section id="frota" className="bg-brand-primary py-16 text-white sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">Frota e estrutura</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-200/95">
              Frota voltada a graneleiros, com foco em cereais, fertilizantes e sementes — preparada para demandas que
              exigem disciplina, planejamento e segurança em cada etapa.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { icon: Truck, t: 'Graneleiros', d: 'Solução adequada a cargas a granel com processos alinhados ao segmento.' },
              { icon: ShieldCheck, t: 'Segurança', d: 'Cultura de prevenção e cuidado com pessoas, equipamentos e carga transportada.' },
              { icon: Leaf, t: 'Agro', d: 'Transporte cooperativo com vocação para a realidade do agronegócio brasileiro.' },
            ].map((c, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm sm:p-8">
                <c.icon className="mb-4 h-9 w-9 text-brand-accent brightness-110" aria-hidden />
                <h3 className="font-display text-xl font-bold">{c.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-200/90 sm:text-base">{c.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/fleet">
              <Button variant="primary" size="lg" className="min-h-[48px] w-full bg-brand-accent px-8 text-lg hover:bg-brand-accent-hover sm:w-auto">
                Ver página da frota
              </Button>
            </Link>
            <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="min-h-[48px] w-full border-white/30 bg-transparent text-white hover:bg-white/10 sm:w-auto"
              >
                Falar com a equipe
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Atuação */}
      <section id="atuacao" className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Área de atuação</h2>
              <p className="mt-6 text-lg leading-relaxed text-gray-600">
                Atuamos com transporte em âmbito nacional, apoiando empresas e cooperados em diferentes regiões do Brasil.
                Onde há demanda compatível com nossa estrutura, buscamos organizar a operação com clareza e previsibilidade.
              </p>
              <ul className="mt-8 space-y-4 text-gray-700">
                <li className="flex gap-3">
                  <Globe2 className="mt-1 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  <span>Presença nacional, com foco em rotas e volumes que fazem sentido para a cooperativa e para o cliente.</span>
                </li>
                <li className="flex gap-3">
                  <Building2 className="mt-1 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  <span>Atendimento a empresas e produtores — sempre com alinhamento comercial antes da operação.</span>
                </li>
              </ul>
              <Link to="/clients" className="mt-10 inline-block w-full sm:w-auto">
                <Button size="lg" className="min-h-[48px] w-full text-lg sm:w-auto">
                  Ver cooperativismo e mapa interativo
                  <ArrowRight className="ml-2" size={20} aria-hidden />
                </Button>
              </Link>
            </div>
            <SectionVisual icon={MapPin} aspect="video" label="Mapa resumido disponível na página Cooperativismo — visualize estados com atuação." />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section id="beneficios" className="bg-gray-50 py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Benefícios para empresas e cooperados</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Uma cooperativa bem estruturada favorece operações consistentes e reforça a confiança junto a empresas, cooperados e parceiros.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: 'Para empresas',
                desc: 'Capacidade, transparência e comunicação comercial objetiva para apoiar decisões de frete com mais segurança.',
                to: '/companies',
                label: 'Saiba mais',
              },
              {
                icon: Users,
                title: 'Para cooperados',
                desc: 'Integração em um modelo cooperativo com foco em desenvolvimento sustentável e respeito à cadeia.',
                to: '/drivers',
                label: 'Quero cooperar',
              },
              {
                icon: ShieldCheck,
                title: 'Benefícios institucionais',
                desc: 'Conheça iniciativas voltadas a cooperados e a melhoria contínua da experiência na cooperativa.',
                to: '/benefits',
                label: 'Ver benefícios',
              },
            ].map((b, idx) => (
              <div key={idx} className="flex flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-light text-brand-accent">
                  <b.icon size={24} aria-hidden />
                </div>
                <h3 className="font-display text-xl font-bold text-brand-primary">{b.title}</h3>
                <p className="mt-3 flex-1 leading-relaxed text-gray-600">{b.desc}</p>
                <Link to={b.to} className="mt-6 inline-flex items-center font-semibold text-brand-accent hover:text-brand-accent-hover">
                  {b.label} <ArrowRight size={16} className="ml-1" aria-hidden />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="bg-brand-primary py-16 text-white sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">Como seguimos com a sua demanda</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-300">
              Fluxo objetivo para organizar o próximo passo com clareza, previsibilidade e alinhamento entre as partes.
            </p>
          </div>
          <div className="relative grid gap-10 md:grid-cols-3 md:gap-8">
            <div className="pointer-events-none absolute left-[12%] right-[12%] top-10 hidden h-0.5 bg-white/15 md:block" aria-hidden />
            {[
              { step: '01', title: 'Contato e cotação', desc: 'Envie rota, produto e volume pelos canais oficiais — WhatsApp ou formulário.' },
              { step: '02', title: 'Alinhamento', desc: 'A equipe comercial organiza entendimento, viabilidade e próximos passos com clareza.' },
              { step: '03', title: 'Operação', desc: 'Com tudo acordado, a cooperativa direciona a operação com foco em segurança e cumprimento.' },
            ].map((item, idx) => (
              <div key={idx} className="relative z-10 text-center">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-brand-accent font-display text-2xl font-bold shadow-[0_0_0_8px_rgba(255,255,255,0.08)]">
                  {item.step}
                </div>
                <h3 className="font-display text-xl font-bold sm:text-2xl">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Confiança (sem depoimentos inventados) */}
      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Credibilidade construída na operação</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              Em uma cooperativa, a confiança vem de processos, transparência e consistência em cada operação.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Cooperativa de transporte',
                desc: 'Governança e propósito alinhados ao modelo associativo, com foco em resultado compartilhado.',
              },
              {
                title: 'Segurança e responsabilidade',
                desc: 'Prioridade em conduta segura e em atendimento às exigências da cadeia e das estradas.',
              },
              {
                title: 'Relacionamento comercial',
                desc: 'Facilidade para solicitar informações e evoluir para cotação com quem entende a operação.',
              },
            ].map((x, i) => (
              <div key={i} className="rounded-2xl border border-gray-100 bg-gray-50/90 p-6 shadow-sm sm:p-8">
                <h3 className="font-display text-xl font-bold tracking-tight text-brand-primary">{x.title}</h3>
                <p className="mt-3 leading-relaxed text-gray-700">{x.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="bg-brand-light py-16 sm:py-20 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 md:p-14">
            <h2 className="text-center font-display text-3xl font-bold tracking-tight text-brand-primary md:text-4xl">Contato e cotação</h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-lg leading-relaxed text-gray-700">
              Fale com a {COMPANY.brandName} pelos canais oficiais. Para uma mensagem rápida, use o WhatsApp. Para mais
              detalhes, prefira o formulário completo.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
              <a
                href={getWhatsAppHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex min-h-[180px] flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-6 text-center text-white shadow-md ring-1 ring-black/5 transition-transform hover:scale-[1.01] active:scale-[0.99] sm:p-8"
              >
                <MessageCircle size={32} aria-hidden />
                <span className="font-display text-lg font-bold">WhatsApp</span>
                <span className="max-w-[14rem] text-sm leading-snug text-white/95">
                  Mensagem inicial sugerida para agilizar o primeiro contato com a equipe.
                </span>
              </a>
              <div className="flex min-h-[180px] flex-col justify-center gap-5 rounded-2xl border border-gray-100 bg-gray-50 p-6 sm:p-8">
                <a href={`tel:+${COMPANY.whatsappDigits}`} className="flex items-center gap-3 text-brand-primary hover:text-brand-accent">
                  <Phone className="h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  <span className="font-semibold">{COMPANY.phoneDisplay}</span>
                </a>
                <a href={`mailto:${COMPANY.email}`} className="flex items-center gap-3 break-all text-brand-primary hover:text-brand-accent">
                  <Mail className="h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  <span className="font-semibold">{COMPANY.email}</span>
                </a>
                <div className="flex gap-3 text-sm leading-relaxed text-gray-600">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                  <span>
                    {COMPANY.addressLine1}
                    <br />
                    {COMPANY.addressLine2}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="min-h-[48px] w-full text-lg">
                  Abrir formulário completo
                </Button>
              </Link>
              <a href={COMPANY.website} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="min-h-[48px] w-full text-lg">
                  Site oficial ({COMPANY.websiteHost})
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
