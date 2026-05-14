import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Truck, DollarSign } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { HeroTexture } from '../components/HeroTexture';

export function ForDrivers() {
  return (
    <div className="min-h-screen bg-white pb-16 pt-24">
      <section className="relative overflow-hidden bg-brand-primary py-20 text-white lg:py-32">
        <HeroTexture variant="dark" />
        <div className="container relative z-10 mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-brand-accent/20 px-3 py-1 text-sm font-medium text-white backdrop-blur-sm">
              <Truck size={16} aria-hidden />
              Cooperados
            </div>
            <h1 className="font-display text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">Faça parte da cooperativa</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-gray-300">
              A Vale Log é uma cooperativa de transporte. Se você busca integração em um modelo associativo com foco em segurança e organização,
              inicie o contato pelos canais oficiais para entender etapas, requisitos e disponibilidade.
            </p>
            <Link to="/contact?type=driver" className="mt-10 inline-block">
              <Button size="lg" className="group min-h-[48px] bg-brand-accent text-lg hover:bg-brand-accent-hover">
                Quero falar sobre cooperativismo
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" size={20} aria-hidden />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-primary mb-6">
              Por que dirigir com a Vale Log?
            </h2>
            <p className="text-lg text-gray-600">
              Na cooperativa, o cooperado é parte de um projeto coletivo: o crescimento sustentável da organização fortalece também as
              oportunidades de quem integra a operação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: DollarSign,
                title: 'Transparência na remuneração',
                desc: 'Cooperativa trabalha com regras e repasses alinhados ao modelo associativo — detalhes são tratados no processo de integração.',
              },
              {
                icon: TrendingUp,
                title: 'Acesso à demanda do mercado',
                desc: 'Integração a uma estrutura voltada a grandes volumes e clientes corporativos, quando houver aderência à operação.',
              },
              {
                icon: ShieldCheck,
                title: 'Segurança e apoio operacional',
                desc: 'Prioridade em cultura de prevenção e canais internos de apoio conforme políticas da cooperativa.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-brand-light text-brand-accent rounded-xl flex items-center justify-center mb-6">
                  <item.icon size={28} />
                </div>
                <h3 className="text-2xl font-display font-bold text-brand-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements & Process */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Requirements */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-8">
                Requisitos para Participar
              </h2>
              <div className="bg-brand-light p-8 rounded-3xl border border-gray-100">
                <ul className="space-y-6">
                  {[
                    'CNH válida na categoria adequada ao conjunto veicular',
                    'Documentação do veículo e do transportador conforme exigências legais (ex.: ANTT, quando aplicável)',
                    'Compromisso com segurança, profissionalismo e conduta compatível com a cooperativa',
                    'Disponibilidade para seguir o fluxo de integração e análise definido pela Vale Log',
                    'Alinhamento com as políticas internas divulgadas no processo seletivo',
                  ].map((req, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <div className="mt-1 text-brand-accent shrink-0">
                        <CheckCircle2 size={24} />
                      </div>
                      <span className="text-lg text-gray-700 font-medium">{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Step-by-Step */}
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-brand-primary mb-8">
                Como se Tornar um Parceiro
              </h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
                {[
                  { step: '1', title: 'Contato', desc: 'Envie seus dados e intenção pelo formulário oficial ou canais de contato da cooperativa.' },
                  { step: '2', title: 'Análise inicial', desc: 'A equipe orienta documentação, requisitos e próximos passos conforme política interna.' },
                  { step: '3', title: 'Avaliação', desc: 'Etapas de checagem e alinhamento operacional, quando aplicável ao processo vigente.' },
                  { step: '4', title: 'Integração', desc: 'Após conclusão das etapas, seguem as definições contratuais e associativas da cooperativa.' },
                ].map((item, idx) => (
                  <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full border-4 border-white bg-brand-accent text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      {item.step}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 rounded-2xl bg-white border border-gray-100 shadow-sm">
                      <h3 className="font-bold text-brand-primary text-xl mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-brand-primary rounded-3xl p-8 md:p-16 shadow-xl text-center max-w-4xl mx-auto text-white">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Pronto para assumir o controle da sua carreira?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Junte-se à cooperativa que trabalha para você. Inscreva-se hoje e comece a dirigir com a Vale Log.
            </p>
            <Link to="/contact?type=driver">
              <Button variant="primary" size="lg" className="min-h-[48px] bg-brand-accent text-lg text-white hover:bg-brand-accent-hover">
                Iniciar contato
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
