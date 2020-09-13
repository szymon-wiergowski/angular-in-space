import { Equipment, EquipmentTypes } from 'space-api/types';
import { EquipmentConfig, EquipmentConfigEntry } from './types/equipment-config';

export const equipmentsConfigRegistry: EquipmentConfig = new Map<EquipmentTypes, EquipmentConfigEntry>();

export function registerEquipmentConfig<T extends Equipment>(config: EquipmentConfigEntry<T>) {
  equipmentsConfigRegistry.set(config.type, config);
}
