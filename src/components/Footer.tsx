import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { BrandMark } from './BrandMark';
import { COMPANY } from '../constants/company';

export function Footer() {
  return (
    <footer className="bg-brand-primary text-gray-300 py-14 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
          <div className="space-y-5 lg:col-span-4">
            <BrandMark variant="onPrimary" />
            <p className="max-w-md text-sm leading-relaxed text-gray-400 sm:text-base">
              A {COMPANY.brandName} é a marca da {COMPANY.legalName}: transporte cooperativo com frota
              estruturada, foco em segurança e atendimento a empresas e cooperados em todo o Brasil.
            </p>
            <a
              href={COMPANY.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-emerald-200/95 transition-colors hover:text-white"
            >
              {COMPANY.websiteHost}
              <ExternalLink className="h-4 w-4 shrink-0 opacity-80" aria-hidden />
            </a>
          </div>

          <div className="lg:col-span-2">
            <h4 className="mb-4 font-display text-base font-semibold text-white sm:text-lg">Links rápidos</h4>
            <ul className="space-y-3 text-sm sm:text-base">
              <li>
                <Link to="/#servicos" className="transition-colors hover:text-brand-accent">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/#sobre" className="transition-colors hover:text-brand-accent">
                  Sobre a Vale Log
                </Link>
              </li>
              <li>
                <Link to="/#frota" className="transition-colors hover:text-brand-accent">
                  Frota
                </Link>
              </li>
              <li>
                <Link to="/#contato" className="transition-colors hover:text-brand-accent">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/companies" className="transition-colors hover:text-brand-accent">
                  Para empresas
                </Link>
              </li>
              <li>
                <Link to="/drivers" className="transition-colors hover:text-brand-accent">
                  Para cooperados
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 font-display text-base font-semibold text-white sm:text-lg">Serviços</h4>
            <ul className="space-y-3 text-sm text-gray-400 sm:text-base">
              <li>Transporte rodoviário de cargas</li>
              <li>Cereais, fertilizantes e sementes</li>
              <li>Logística e operações cooperativas</li>
              <li>Atendimento nacional</li>
              <li>Cotação e relacionamento comercial</li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-4 font-display text-base font-semibold text-white sm:text-lg">Fale conosco</h4>
            <ul className="space-y-4 text-sm sm:text-base">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                <span className="leading-relaxed">
                  {COMPANY.addressLine1}
                  <br />
                  {COMPANY.addressLine2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                <a className="transition-colors hover:text-white" href={`tel:+${COMPANY.whatsappDigits}`}>
                  {COMPANY.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-brand-accent" aria-hidden />
                <a className="break-all transition-colors hover:text-white" href={`mailto:${COMPANY.email}`}>
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 space-y-4 border-t border-white/10 pt-8 text-center text-xs text-gray-400 sm:text-sm md:text-left">
          <p>
            © {new Date().getFullYear()} {COMPANY.brandName} — {COMPANY.legalName}. Todos os direitos reservados.
          </p>
          <p className="mx-auto max-w-2xl text-[11px] leading-relaxed text-gray-500 md:mx-0 md:text-xs">
            Proposta visual demonstrativa desenvolvida para fins de apresentação.
          </p>
        </div>
      </div>
    </footer>
  );
}
