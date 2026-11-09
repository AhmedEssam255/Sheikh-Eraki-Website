export const dynamic = 'force-dynamic';

import MessagesDisplay from '../../lib/messagesDisplay';
import PageComponent from '../../lib/pageComponent';

const Messages = async () => {
  return (
    <PageComponent
      title='رسائل الشيخ: '
      endPoint='messages'
      DisplayComponent={MessagesDisplay}
      search={{ route: '/messages/search', title: 'انقر للبحث في رسائل الشيخ' }}
    />
  );
};

export default Messages;
