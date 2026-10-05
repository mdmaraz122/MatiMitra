import PageContainer from '../components/common/PageContainer.jsx';
import HeroBanner from '../components/landing/HeroBanner.jsx';
import MetricsGrid from '../components/landing/MetricsGrid.jsx';

export default function LandingPage() {
  return (
    <PageContainer>
      <HeroBanner />
      <MetricsGrid />
    </PageContainer>
  );
}
