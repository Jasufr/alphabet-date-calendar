export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
};

export type Date = {
  id: string;
  useId: string;
  name: string;
  description: string;
  image_url: string;
  status: 'checked' | 'unchecked';
  letter: string;
};
