import LinksDisplay from '../../lib/linksDisplay';
import PageComponent from '../../lib/pageComponent'

const Links = async () => {
  return <PageComponent title='روابط الشيخ: ' endPoint='links' DisplayComponent={ LinksDisplay } />;
};

export default Links;
