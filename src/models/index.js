// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Sample, Home } = initSchema(schema);

export {
  Sample,
  Home
};