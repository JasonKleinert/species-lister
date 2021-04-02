import { Layout } from 'antd';
import { ListerContent } from './ListerContent';

const { Header, Footer } = Layout;

export function ListerLayout() {
  return (
    <Layout className='lister-layout'>
      <Header className='lister-header'><h1>Species Lister</h1></Header>
      <ListerContent />
      {/* <Footer className='lister-footer'>
      List created from the last 2000 observations on <a href='https://inaturalist.org'>inaturalist.org</a>
      </Footer> */}
    </Layout>
  );
}