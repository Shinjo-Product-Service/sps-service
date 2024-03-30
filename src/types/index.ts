export type NewsItemType = {
  _id: string;
  title: string;
  label: string;
  content: string;
  _sys: {
    createdAt: Date;
    updatedAt: Date;
  };
};

type articleInfoType = {
  title: string;
  image: {
    _id: string;
    altText: string;
    description: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    height: number;
    metadata: {};
    src: string;
    title: string;
    width: number;
  };
  description: string;
};

export type WorksItemType = {
  _id: string;
  _sys: {
    raw: [Object];
    customOrder: number;
    createdAt: Date;
    updatedAt: Date;
  };
  title: string;
  thumbnail: {
    _id: string;
    altText: string;
    description: string;
    fileName: string;
    fileSize: number;
    fileType: string;
    height: number;
    metadata: {};
    src: string;
    title: string;
    width: number;
  };
  client: {
    name: string;
    logo: {
      _id: string;
      altText: string;
      description: string;
      fileName: string;
      fileSize: number;
      fileType: string;
      height: number;
      metadata: {};
      src: string;
      title: string;
      width: number;
    };
  };
  description: string;
  industry: string;
  numberOfEmployees: string;
  issue: string;
  beforeIntroduction: articleInfoType;
  selectedReason: articleInfoType;
  afterIntroduction: articleInfoType;
};
