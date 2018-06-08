import { Stadiums } from './stadiums';
import { Tvchannels } from './tvchannels';
import { Teams } from './teams';
import { Groups } from './groups';
import { Knockout } from './knockout';

export interface Schedule {
  stadiums?: Stadiums[];
  tvchannels?: Tvchannels[];
  teams?: Teams[];
  groups?: Groups[];
  knockout?: Knockout[];
}
