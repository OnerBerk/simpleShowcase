import dynamic from 'next/dynamic';

const MapDisplayer= dynamic(() => import('./map.js'),{
  ssr: false }
);

export default () => <MapDisplayer />;