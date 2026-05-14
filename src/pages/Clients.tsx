import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Map, Scale, BookOpen, Handshake, Globe, Heart, Users, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { CoverageMap } from '../components/CoverageMap';
import { HeroTexture } from '../components/HeroTexture';
import { COMPANY, INSTITUTIONAL_METRICS } from '../constants/company';

export function Clients() {
  const principles = [
    { icon: Users, title: 'Adesão livre e voluntária', desc: 'Portas abertas para quem quer somar.' },
    { icon: Scale, title: 'Gestão democrática', desc: 'Decisões tomadas de forma participativa.' },
    { icon: Building2, title: 'Participação econômica', desc: 'Resultados compartilhados de forma justa.' },
    { icon: Globe, title: 'Autonomia e independência', desc: 'Uma sociedade civil com identidade própria.' },
    { icon: BookOpen, title: 'Educação e formação', desc: 'Desenvolvimento contínuo dos nossos cooperados.' },
    { icon: Handshake, title: 'Intercooperação', desc: 'Trabalho em rede para fortalecer o setor.' },
    { icon: Heart, title: 'Compromisso com a comunidade', desc: 'Desenvolvimento social e qualidade de vida.' },
  ];

  return (
    <div className="min-h-screen bg-white pb-16 pt-24">
      <section className="relative overflow-hidden bg-brand-primary py-20 text-white lg:py-32">
        <HeroTexture variant="dark" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-4xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <Building2 size={16} aria-hidden />
              Cooperativismo
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Cooperação que move o transporte</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-gray-200">
              A {COMPANY.brandName} atende empresas e produtores em diferentes regiões do Brasil, com frota estruturada e capacidade de referência
              de <strong className="text-white">mais de {INSTITUTIONAL_METRICS.monthlyCapacity} toneladas/mês</strong>, além de{' '}
              <strong className="text-white">mais de {INSTITUTIONAL_METRICS.trucks} caminhões graneleiros</strong> — sempre com foco em cereais,
              fertilizantes e sementes.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Área de atuação</h2>
            <p className="mt-4 text-lg text-gray-600">
              Explore o mapa para entender, de forma ilustrativa, regiões onde a cooperativa costuma articular operações. Os detalhes dependem de
              viabilidade comercial e operacional em cada caso.
            </p>
          </div>
          <CoverageMap />
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">Parcerias comerciais</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              As relações comerciais são construídas com transparência e disciplina. Nesta demonstração visual, logotipos de terceiros não são
              exibidos sem autorização — o foco permanece na estrutura cooperativa e nos canais oficiais de contato.
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm">
            <p className="text-lg font-medium text-brand-primary">Empresas e produtores atendidos em diferentes regiões do Brasil.</p>
            <p className="mt-3 text-gray-600">
              Para cotação ou relacionamento comercial, utilize os canais oficiais no final desta página ou a seção de contato do site.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="lg:sticky lg:top-28">
              <h2 className="font-display text-3xl font-bold text-brand-primary md:text-4xl lg:text-5xl">A força do cooperativismo</h2>
              <div className="mt-6 space-y-6 text-lg leading-relaxed text-gray-600">
                <p>
                  Cooperar é agir coletivamente, compartilhando responsabilidades para alcançar resultados melhores do que seria possível de forma
                  isolada. Na {COMPANY.brandName}, isso se traduz em organização, segurança e respeito à cadeia.
                </p>
                <p>
                  A cultura cooperativista valoriza o desenvolvimento humano e o crescimento conjunto, com princípios que fortalecem a governança e a
                  confiança entre cooperados, clientes e comunidade.
                </p>
                <div className="mt-8 rounded-2xl border border-gray-100 bg-brand-light p-6">
                  <h4 className="mb-2 flex items-center gap-2 font-bold text-brand-primary">
                    <BookOpen size={20} className="text-brand-accent" aria-hidden />
                    Marco legal
                  </h4>
                  <p className="text-sm leading-relaxed text-gray-600">
                    Cooperativas são reguladas no Brasil pela Lei nº 5.764/1971, como sociedades civis com identidade e finalidade próprias,
                    voltadas a prestar serviços aos associados.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-8 font-display text-2xl font-bold text-brand-primary">Princípios fundamentais</h3>
              <div className="space-y-4">
                {principles.map((principle, idx) => (
                  <div
                    key={idx}
                    className="group flex gap-5 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-colors hover:border-brand-accent/30 sm:p-6"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-light text-brand-accent transition-colors group-hover:bg-brand-accent group-hover:text-white">
                      <principle.icon size={22} aria-hidden />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-brand-primary">{principle.title}</h4>
                      <p className="mt-1 text-gray-600">{principle.desc}</p>
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
              Fale com a equipe comercial para cotação ou envie uma mensagem pelo WhatsApp com os dados da sua demanda.
            </p>
            <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="primary" size="lg" className="min-h-[48px] w-full bg-white text-lg text-brand-primary hover:bg-gray-100 sm:w-auto">
                  Ir para contato
                </Button>
              </Link>
              <Link to="/#contato" className="w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="min-h-[48px] w-full border-white/30 text-lg text-white hover:bg-white/10 sm:w-auto"
                >
                  Contato na página inicial
                  <ArrowRight className="ml-2" size={20} aria-hidden />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
