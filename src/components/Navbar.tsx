import React, { useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/Button';
import { cn } from './ui/Button';
import { BrandMark } from './BrandMark';
import { getWhatsAppHref } from '../constants/company';

function linkMatches(path: string, pathname: string, hash: string): boolean {
  if (path.includes('#')) {
    const [base, fragment] = path.split('#');
    const expectedHash = `#${fragment}`;
    const normalizedBase = base === '' ? '/' : base;
    return pathname === normalizedBase && hash === expectedHash;
  }
  if (path === '/') {
    return pathname === '/' && !hash;
  }
  return pathname === path;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = useCallback(
    (path: string) => linkMatches(path, location.pathname, location.hash),
    [location.pathname, location.hash]
  );

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/#servicos' },
    { name: 'Sobre', path: '/#sobre' },
    { name: 'Frota', path: '/#frota' },
    { name: 'Atuação', path: '/#atuacao' },
    { name: 'Contato', path: '/#contato' },
  ];

  const moreLinks = [
    { name: 'Serviços (página)', path: '/services' },
    { name: 'Para Empresas', path: '/companies' },
    { name: 'Para Cooperados', path: '/drivers' },
    { name: 'Benefícios aos Cooperados', path: '/benefits' },
    { name: 'Frota (detalhes)', path: '/fleet' },
    { name: 'Segurança', path: '/security' },
    { name: 'Cooperativismo', path: '/clients' },
    { name: 'Notícias', path: '/news' },
    { name: 'Cursos e Eventos', path: '/events' },
    { name: 'Portal do Colaborador', path: 'https://colabvalelog.cgisoftware.com.br/', external: true },
  ];

  const navLinkClass = (path: string) =>
    cn(
      'text-sm font-medium transition-colors hover:text-white py-2 lg:py-0',
      isActive(path) ? 'text-white font-bold' : 'text-white/80'
    );

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        isScrolled ? 'bg-brand-primary shadow-md py-2 sm:py-3' : 'bg-brand-primary py-3 sm:py-4 md:py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-3">
          <BrandMark variant="onPrimary" />

          <nav className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-3 xl:gap-5 min-w-0">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={navLinkClass(link.path)}>
                {link.name}
              </Link>
            ))}

            <div className="relative shrink-0">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                aria-expanded={isDropdownOpen}
                aria-label={isDropdownOpen ? 'Fechar menu de opções' : 'Abrir menu de opções (páginas e serviços)'}
              >
                <Menu size={22} aria-hidden />
              </button>

              {isDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setIsDropdownOpen(false)} aria-hidden />
                  <div className="absolute right-0 top-full z-50 mt-2 flex w-64 max-w-[calc(100vw-2rem)] flex-col rounded-xl border border-gray-100 bg-white py-2 shadow-lg">
                    {moreLinks.map((link) =>
                      link.external ? (
                        <a
                          key={link.name}
                          href={link.path}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setIsDropdownOpen(false)}
                          className="px-4 py-2.5 text-sm text-gray-600 transition-colors hover:bg-brand-light hover:text-brand-accent"
                        >
                          {link.name}
                        </a>
                      ) : (
                        <Link
                          key={link.name}
                          to={link.path}
                          onClick={() => setIsDropdownOpen(false)}
                          className={cn(
                            'px-4 py-2.5 text-sm transition-colors hover:bg-brand-light hover:text-brand-accent',
                            location.pathname === link.path ? 'bg-brand-light/60 text-brand-accent' : 'text-gray-600'
                          )}
                        >
                          {link.name}
                        </Link>
                      )
                    )}
                  </div>
                </>
              )}
            </div>

            <div className="ml-2 flex shrink-0 items-center border-l border-white/15 pl-4 xl:ml-4">
              <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" size="sm" className="whitespace-nowrap shadow-sm">
                  Solicitar Cotação
                </Button>
              </a>
            </div>
          </nav>

          <button
            type="button"
            className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg text-white/90 hover:bg-white/10 hover:text-white lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute left-0 right-0 top-full max-h-[min(80vh,560px)] overflow-y-auto overscroll-contain border-b border-gray-100 bg-white py-3 shadow-lg">
          <div className="container mx-auto flex flex-col gap-1 px-4 pb-2">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path} className={cn('block rounded-lg px-3 py-3 text-base font-medium', isActive(link.path) ? 'bg-brand-light text-brand-accent' : 'text-gray-700')}>
                {link.name}
              </Link>
            ))}
            <div className="my-2 h-px bg-gray-100" />
            {moreLinks.map((link) =>
              link.external ? (
                <a
                  key={link.name}
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-lg px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50"
                >
                  {link.name}
                </a>
              ) : (
                <Link
                  key={link.name}
                  to={link.path}
                  className={cn(
                    'block rounded-lg px-3 py-3 text-base font-medium',
                    location.pathname === link.path ? 'bg-brand-light text-brand-accent' : 'text-gray-700 hover:bg-gray-50'
                  )}
                >
                  {link.name}
                </Link>
              )
            )}
            <div className="sticky bottom-0 mt-3 border-t border-gray-100 bg-white pt-3 pb-4">
              <a href={getWhatsAppHref()} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button variant="primary" className="w-full min-h-[48px] text-base">
                  Solicitar Cotação (WhatsApp)
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
