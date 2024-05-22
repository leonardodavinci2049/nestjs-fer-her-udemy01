import { Brand } from '../../brands/entities/brand.entity';

export const BRANDS_SEED: Brand[] = [
  {
    id: '531c1602-9064-4531-9f6e-aab6b94ff48f',
    name: 'Apple',
    image:
      'https://cdn.pixabay.com/photo/2016/11/29/05/45/apple-1867461_960_720.jpg',
    description:
      'Apple Inc. is an American multinational technology company that specializes in consumer electronics, computer software, and online services.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'e63b8ea9-e21f-4827-a996-43227283f72e',
    name: 'Samsung',
    image:
      'https://cdn.pixabay.com/photo/2016/11/29/09/08/samsung-1866571_960_720.jpg',
    description:
      'Samsung Electronics Co., Ltd. is a South Korean multinational electronics company headquartered in the Yeongtong District of Suwon.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: '314ae15b-8301-4445-9071-9d6f9a424770',
    name: 'Huawei',
    image:
      'https://cdn.pixabay.com/photo/2016/11/29/09/08/huawei-1866573_960_720.jpg',
    description:
      'Huawei Technologies Co., Ltd. is a Chinese multinational technology company.',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
