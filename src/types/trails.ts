interface UserContent {
  subject: string;
  title: string;
  fileType: string;
  link: string;
  time: number;
  completed: boolean;
}

interface UserSubject {
  title: string;
  progress: {
    max: number;
    completed: number;
  };
  contents: UserContent[];
}

interface UserModule {
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
