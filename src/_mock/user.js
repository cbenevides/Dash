import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const users = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  avatarUrl: `/assets/images/avatars/avatar_${index + 1}.jpg`,
  station: faker.music.songName(),
  mdcode: faker.music.genre(),
  masterdealname: faker.datatype.boolean(),
  currencycode: sample(['Ativo', 'Inativo']),
  distributor: sample([
    'Som Livre',
  ]),
  totalbudget: sample(['Teste1', 'Teste2']),
  approvalstatus: sample(['Teste1', 'Teste2']),
  mdstartdate: sample(['Teste1', 'Teste2']),
  mdenddate: sample(['Teste1', 'Teste2']),
}));

export default users;
