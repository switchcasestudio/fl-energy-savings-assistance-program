import { LanguageProvider } from './i18n/LanguageContext.js';
import { RouterProvider, useRouter } from './router/Router.js';
import { PAGE } from './router/routes.js';
import Head from './components/Head/Head.js';
import TopBar from './components/TopBar/TopBar.js';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';
import Analytics from './components/Analytics/Analytics.js';
import Attribution from './components/Attribution/Attribution.js';
import Home from './pages/Home.js';
import ProgramPage from './pages/ProgramPage.js';
import CountyPage from './pages/CountyPage.js';
import ThankYou from './pages/ThankYou.js';
import NotFound from './pages/NotFound.js';

function renderPage(route) {
  switch (route.page) {
    case PAGE.HOME:
      return <Home />;
    case PAGE.PROGRAM:
      return <ProgramPage id={route.params.id} />;
    case PAGE.COUNTY:
      return <CountyPage countyId={route.params.countyId} />;
    case PAGE.THANKS:
      return <ThankYou />;
    default:
      return <NotFound />;
  }
}

function Shell() {
  const { route } = useRouter();

  return (
    <LanguageProvider lang={route.lang}>
      <Head route={route} />
      <Analytics />
      <Attribution />
      <a href="#main" className="skip-link">
        {route.lang === 'es' ? 'Saltar al contenido' : 'Skip to content'}
      </a>
      <TopBar />
      <Header />
      <main id="main">{renderPage(route)}</main>
      <Footer />
    </LanguageProvider>
  );
}

function App({ initialPath }) {
  return (
    <RouterProvider initialPath={initialPath}>
      <Shell />
    </RouterProvider>
  );
}

export default App;
