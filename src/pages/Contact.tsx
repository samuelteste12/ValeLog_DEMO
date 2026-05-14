import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { COMPANY, getWhatsAppHref } from '../constants/company';

export function Contact() {
  const [searchParams] = useSearchParams();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    type: 'quote',
    details: '',
    route: '',
    volume: '',
  });

  useEffect(() => {
    const t = searchParams.get('type');
    if (t === 'driver') {
      setFormData((prev) => ({ ...prev, type: 'driver' }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    alert('Obrigado pela sua mensagem. Entraremos em contato em breve.');
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <h1 className="font-display text-4xl font-bold text-brand-primary md:text-5xl lg:text-6xl">Contato</h1>
          <p className="mt-4 text-xl leading-relaxed text-gray-600">
            Solicite cotação, tire dúvidas ou fale sobre cooperativismo. Escolha o canal que for mais prático para você.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-1">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-8">
              <h3 className="mb-6 font-display text-2xl font-bold text-brand-primary">Dados oficiais</h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-accent">
                    <Phone size={22} aria-hidden />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-gray-500">Telefone</p>
                    <a href={`tel:+${COMPANY.whatsappDigits}`} className="text-lg font-bold text-brand-primary hover:text-brand-accent">
                      {COMPANY.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-accent">
                    <Mail size={22} aria-hidden />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-gray-500">E-mail</p>
                    <a href={`mailto:${COMPANY.email}`} className="break-all text-lg font-bold text-brand-primary hover:text-brand-accent">
                      {COMPANY.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-light text-brand-accent">
                    <MapPin size={22} aria-hidden />
                  </div>
                  <div>
                    <p className="mb-1 text-sm font-medium text-gray-500">Endereço</p>
                    <p className="text-lg font-bold leading-snug text-brand-primary">
                      {COMPANY.addressLine1}
                      <br />
                      {COMPANY.addressLine2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-[#25D366] to-[#128C7E] p-6 text-white shadow-md sm:p-8">
              <h3 className="mb-4 flex items-center gap-2 font-display text-2xl font-bold">
                <MessageCircle size={26} aria-hidden />
                WhatsApp
              </h3>
              <p className="mb-6 text-white/90">
                Para agilizar o primeiro contato, envie uma mensagem com rota, produto e volume estimado.
              </p>
              <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                <Button className="w-full min-h-[48px] border-none bg-white text-[#128C7E] hover:bg-gray-100">Abrir WhatsApp</Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 md:p-12">
              <h2 className="mb-8 font-display text-3xl font-bold text-brand-primary">Formulário</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Nome completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium text-gray-700">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent"
                      placeholder="Razão social ou nome fantasia"
                    />
                  </div>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent"
                      placeholder="seu@email.com.br"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                      Telefone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent"
                      placeholder="DDD + número"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="type" className="text-sm font-medium text-gray-700">
                    Assunto
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent"
                  >
                    <option value="quote">Cotação de frete</option>
                    <option value="driver">Ser cooperado / motorista</option>
                    <option value="other">Outras informações</option>
                  </select>
                </div>

                {formData.type === 'quote' && (
                  <div className="grid gap-6 rounded-2xl border border-gray-200 bg-brand-light p-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="route" className="text-sm font-medium text-gray-700">
                        Rota (origem — destino)
                      </label>
                      <input
                        type="text"
                        id="route"
                        name="route"
                        value={formData.route}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent"
                        placeholder="Ex.: região de origem — porto / indústria"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="volume" className="text-sm font-medium text-gray-700">
                        Volume / peso estimado
                      </label>
                      <input
                        type="text"
                        id="volume"
                        name="volume"
                        value={formData.volume}
                        onChange={handleChange}
                        className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent"
                        placeholder="Ex.: toneladas, frequência"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <label htmlFor="details" className="text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <textarea
                    id="details"
                    name="details"
                    value={formData.details}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 outline-none transition-all focus:border-brand-accent focus:ring-2 focus:ring-brand-accent"
                    placeholder="Produto (cereal, fertilizante, semente), janela de coleta, requisitos especiais..."
                  />
                </div>

                <Button type="submit" size="lg" className="group min-h-[48px] w-full text-lg">
                  Enviar mensagem
                  <Send className="ml-2 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" size={20} aria-hidden />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
