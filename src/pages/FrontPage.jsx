import { Layout } from '../containers/Layout';
import { SideBar } from '../components/SideBar';
import { Catalog } from '../components/Catalog';
import * as requestAPI from '../logic/fetch';

export function FrontPage() {

  return (
    <Layout>
      <SideBar request={requestAPI.getCategories}/>
      <Catalog request={requestAPI.getOverview} />
    </Layout>
  )
}