import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { MapPin, Truck } from 'lucide-react';

/** Estados com presença indicativa na demo — sem volumes ou clientes inventados */
const stateData: Record<string, { name: string; description: string }> = {
  MT: {
    name: 'Mato Grosso',
    description:
      'Região estratégica para o agronegócio. A cooperativa pode atuar em fluxos de cereais e insumos conforme planejamento comercial e operacional.',
  },
  MS: {
    name: 'Mato Grosso do Sul',
    description:
      'Demandas ligadas ao complexo agroindustrial e logística regional, com foco em execução segura e comunicação clara com o cliente.',
  },
  GO: {
    name: 'Goiás',
    description:
      'Polo de conexão no Centro-Oeste. Operações podem envolver grandes volumes e rotas competitivas, sempre alinhadas à capacidade da frota.',
  },
  MG: {
    name: 'Minas Gerais',
    description:
      'Corredores relevantes para distribuição e abastecimento. A atuação depende da viabilidade da rota e do produto transportado.',
  },
  PR: {
    name: 'Paraná',
    description:
      'Integração com importantes corredores de exportação e produção. Transporte de cargas agroindustriais com foco em disciplina operacional.',
  },
  SC: {
    name: 'Santa Catarina',
    description:
      'Atendimento a operações que exigem consistência e relacionamento próximo com empresas e cooperados da região.',
  },
  RS: {
    name: 'Rio Grande do Sul',
    description:
      'Base da cooperativa no Vale do Taquari. Aqui concentram-se articulação comercial, apoio aos cooperados e coordenação das operações.',
  },
};

export function CoverageMap() {
  const [geoData, setGeoData] = useState<any>(null);
  const [activeState, setActiveState] = useState<string | null>('RS');
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson')
      .then((res) => res.json())
      .then((data) => setGeoData(data))
      .catch((err) => console.error('Erro ao carregar o mapa:', err));
  }, []);

  const style = (feature: any) => {
    const sigla = feature.properties.sigla;
    const isCovered = !!stateData[sigla];
    const isActive = activeState === sigla;
    const isHovered = hoveredState === sigla;

    return {
      fillColor: isActive ? '#388E3C' : isCovered ? '#25412A' : '#E5E7EB',
      weight: isActive || isHovered ? 2 : 1,
      opacity: 1,
      color: 'white',
      fillOpacity: isActive ? 0.9 : isHovered && isCovered ? 0.8 : isCovered ? 0.6 : 0.3,
    };
  };

  const onEachFeature = (feature: any, layer: any) => {
    const sigla = feature.properties.sigla;

    if (stateData[sigla]) {
      layer.on({
        click: () => setActiveState(sigla),
        mouseover: () => setHoveredState(sigla),
        mouseout: () => setHoveredState(null),
      });

      layer.bindTooltip(feature.properties.name, {
        direction: 'center',
        className: 'font-sans font-bold text-brand-primary bg-white/90 border-none rounded-lg shadow-sm px-2 py-1',
      });
    }
  };

  const activeInfo = activeState ? stateData[activeState] : null;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-3">
      <div className="relative z-0 h-[min(70vh,520px)] min-h-[320px] overflow-hidden rounded-3xl border border-gray-100 bg-[#f8f9fa] shadow-lg sm:h-[500px] lg:col-span-2">
        {geoData ? (
          <MapContainer
            center={[-15.7801, -52.9292]}
            zoom={4}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={false}
            zoomControl={true}
          >
            <TileLayer
              url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png"
              attribution='&copy; OpenStreetMap &copy; <a href="https://carto.com/attributions">CARTO</a>'
            />
            <GeoJSON data={geoData} style={style} onEachFeature={onEachFeature} />
          </MapContainer>
        ) : (
          <div className="flex h-full flex-col items-center justify-center text-gray-400">
            <div className="mb-4 h-8 w-8 animate-spin rounded-full border-4 border-brand-accent border-t-transparent" />
            <p className="font-medium">Carregando mapa...</p>
          </div>
        )}
      </div>

      <div className="flex h-full flex-col rounded-3xl border border-gray-100 bg-white p-6 shadow-lg sm:p-8 lg:col-span-1">
        {activeInfo ? (
          <div className="flex flex-grow flex-col space-y-6">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-light px-3 py-1 text-sm font-bold text-brand-accent">
              <MapPin size={16} aria-hidden />
              Região selecionada
            </div>

            <div>
              <h3 className="font-display text-2xl font-bold text-brand-primary sm:text-3xl">
                {activeInfo.name}{' '}
                <span className="text-xl font-semibold text-gray-400">
                  ({activeState})
                </span>
              </h3>
              <p className="mt-3 leading-relaxed text-gray-600">{activeInfo.description}</p>
            </div>

            <div className="mt-auto rounded-2xl border border-gray-100 bg-gray-50/80 p-4 text-sm leading-relaxed text-gray-600">
              <strong className="text-brand-primary">Perfil de cargas:</strong> cereais, fertilizantes e sementes — conforme a demanda e a
              viabilidade comercial de cada operação.
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center space-y-4 py-12 text-center text-gray-500">
            <div className="mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-gray-50">
              <MapPin size={32} className="text-gray-300" aria-hidden />
            </div>
            <p className="font-medium text-gray-600">Selecione um estado destacado para ver o contexto institucional da região.</p>
          </div>
        )}

        <div className="mt-8 border-t border-gray-100 pt-6">
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <Truck size={16} className="shrink-0 text-brand-accent" aria-hidden />
            <span>
              Referência de capacidade da cooperativa: <strong className="text-brand-primary">mais de 61.000 toneladas/mês</strong> (texto
              institucional da demo).
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
