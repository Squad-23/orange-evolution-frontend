export interface UserContent {
  id: string;
  subject: string;
  title: string;
  fileType: string;
  link: string;
  time: number;
  source: string;
  abstract: string;
  glossary: string;
  completed: boolean;
}

export interface UserSubject {
  title: string;
  progress: {
    max: number;
    completed: number;
  };
  contents: UserContent[];
}

export interface UserModule {
  id: string;
  title: string;
  description: string;
  imageURL: string;
  progress: {
    max: number;
    completed: number;
  };
  subjects: UserSubject[];
}

export interface UserTrail extends Trail {
  progress: {
    max: number;
    completed: number;
  };
  modules: UserModule[];
}

export interface Trail {
  id: string;
  title: string;
  area: string;
  description: string;
  duration: number;
}
