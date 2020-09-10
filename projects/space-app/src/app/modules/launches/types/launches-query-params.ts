import { Launch } from '@shared/types';

export interface LaunchesQueryParams {
  sort: keyof Launch;
  order: 'ASC' | 'DESC';
  query: string;
}
