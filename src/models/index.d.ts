import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type SampleMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type HomeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Sample {
  readonly id: string;
  readonly address?: string;
  readonly image_url?: string;
  readonly price?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Sample, SampleMetaData>);
  static copyOf(source: Sample, mutator: (draft: MutableModel<Sample, SampleMetaData>) => MutableModel<Sample, SampleMetaData> | void): Sample;
}

export declare class Home {
  readonly id: string;
  readonly address?: string;
  readonly image_url?: string;
  readonly price?: number;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Home, HomeMetaData>);
  static copyOf(source: Home, mutator: (draft: MutableModel<Home, HomeMetaData>) => MutableModel<Home, HomeMetaData> | void): Home;
}