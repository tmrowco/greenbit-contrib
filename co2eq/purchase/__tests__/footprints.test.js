/**
 * Check
 * 1. activityType named used exist in constant, same for transportationModes
 * 2. parent child relationship for activityTypes
 * 3. categories have correct names in definitions or vice versa
 */

// purchaseCategories
import {
  ACTIVITY_TYPE_ELECTRIC_HEATING,
  ACTIVITY_TYPE_ELECTRIC_VEHICLE_CHARGING,
  ACTIVITY_TYPE_ELECTRICITY,
  ACTIVITY_TYPE_MEAL,
  ACTIVITY_TYPE_PURCHASE,
  ACTIVITY_TYPE_TRANSPORTATION,
  PURCHASE_CATEGORY_ALCOHOL,
  PURCHASE_CATEGORY_COMBINED_PASSENGER_TRANSPORT,
  PURCHASE_CATEGORY_ELECTRICITY,
  PURCHASE_CATEGORY_ENTERTAINMENT_HOTEL,
  PURCHASE_CATEGORY_FINANCIAL_SERVICES,
  PURCHASE_CATEGORY_FOOD,
  PURCHASE_CATEGORY_FOOD_BAKERY,
  PURCHASE_CATEGORY_FOOD_SERVING_SERVICES,
  PURCHASE_CATEGORY_GAS,
  PURCHASE_CATEGORY_HEALTHCARE_DOCTOR,
  PURCHASE_CATEGORY_HOUSEHOLD_MAINTENANCE,
  PURCHASE_CATEGORY_HOUSING,
  PURCHASE_CATEGORY_INFORMATION_COMMUNICATION,
  PURCHASE_CATEGORY_INSURANCE,
  PURCHASE_CATEGORY_MAINTENANCE_DWELLING,
  PURCHASE_CATEGORY_MEDICINES_AND_HEALTH_PRODUCTS,
  PURCHASE_CATEGORY_MISC_DWELLING,
  PURCHASE_CATEGORY_MISC_SERVICES_PERSONAL_TRANSPORT,
  PURCHASE_CATEGORY_MOBILE_PHONE,
  PURCHASE_CATEGORY_NON_DURABLE_HOUSEHOLD_GOODS,
  PURCHASE_CATEGORY_OTHER_ENERGY_HEATING_COOLING,
  PURCHASE_CATEGORY_OTHER_PERSONAL_EFFECTS,
  PURCHASE_CATEGORY_OTHER_SERVICES,
  PURCHASE_CATEGORY_OTHER_TRANSPORT_SERVICES,
  PURCHASE_CATEGORY_PACKAGE_HOLIDAYS,
  PURCHASE_CATEGORY_READY_FOOD,
  PURCHASE_CATEGORY_RECREATIONAL_DURABLES,
  PURCHASE_CATEGORY_RECREATIONAL_SERVICES,
  PURCHASE_CATEGORY_RENTAL,
  PURCHASE_CATEGORY_SOCIAL_PROTECTION,
  PURCHASE_CATEGORY_STORE_BOOKS,
  PURCHASE_CATEGORY_STORE_CLOTHING,
  PURCHASE_CATEGORY_STORE_ELECTRONIC,
  PURCHASE_CATEGORY_STORE_FOOD,
  PURCHASE_CATEGORY_STORE_FURNISHING,
  PURCHASE_CATEGORY_STORE_GARDEN_AND_PET,
  PURCHASE_CATEGORY_STORE_HARDWARE,
  PURCHASE_CATEGORY_STORE_HOUSEHOLD_APPLIANCE,
  PURCHASE_CATEGORY_STORE_PERSONAL_CARE,
  PURCHASE_CATEGORY_TRANSPORT_AIR,
  PURCHASE_CATEGORY_TRANSPORT_RAIL,
  PURCHASE_CATEGORY_TRANSPORT_ROAD,
  PURCHASE_CATEGORY_TRANSPORTATION_AUTOMOTIVE_MAINTENANCE_AND_REPAIR,
  PURCHASE_CATEGORY_TRANSPORTATION_AUTOMOTIVE_PARTS,
  PURCHASE_CATEGORY_TRANSPORTATION_FUEL,
  TRANSPORTATION_MODE_BIKE,
  TRANSPORTATION_MODE_BUS,
  TRANSPORTATION_MODE_CAR,
  TRANSPORTATION_MODE_EBIKE,
  TRANSPORTATION_MODE_ESCOOTER,
  TRANSPORTATION_MODE_FERRY,
  TRANSPORTATION_MODE_FOOT,
  TRANSPORTATION_MODE_MOTORBIKE,
  TRANSPORTATION_MODE_PLANE,
  TRANSPORTATION_MODE_PUBLIC_TRANSPORT,
  TRANSPORTATION_MODE_TRAIN,
} from '../../../definitions';
import { ENTRY_BY_KEY } from '../index';

const VALID_ACTIVITY_TYPES = [
  ACTIVITY_TYPE_ELECTRICITY,
  ACTIVITY_TYPE_ELECTRIC_VEHICLE_CHARGING,
  ACTIVITY_TYPE_ELECTRIC_HEATING,
  ACTIVITY_TYPE_TRANSPORTATION,
  ACTIVITY_TYPE_MEAL,
  ACTIVITY_TYPE_PURCHASE,
];

const VALID_TRANSPORTATION_MODES = [
  TRANSPORTATION_MODE_PLANE,
  TRANSPORTATION_MODE_BIKE,
  TRANSPORTATION_MODE_EBIKE,
  TRANSPORTATION_MODE_CAR,
  TRANSPORTATION_MODE_BUS,
  TRANSPORTATION_MODE_PUBLIC_TRANSPORT,
  TRANSPORTATION_MODE_TRAIN,
  TRANSPORTATION_MODE_FERRY,
  TRANSPORTATION_MODE_ESCOOTER,
  TRANSPORTATION_MODE_MOTORBIKE,
  TRANSPORTATION_MODE_FOOT,
];

const PURCHASE_CATEGORIES = [
  PURCHASE_CATEGORY_FOOD,
  PURCHASE_CATEGORY_FOOD_BAKERY,
  PURCHASE_CATEGORY_ALCOHOL,
  PURCHASE_CATEGORY_READY_FOOD,
  PURCHASE_CATEGORY_FOOD_SERVING_SERVICES,
  PURCHASE_CATEGORY_STORE_CLOTHING,
  PURCHASE_CATEGORY_STORE_FOOD,
  PURCHASE_CATEGORY_STORE_HARDWARE,
  PURCHASE_CATEGORY_STORE_GARDEN_AND_PET,
  PURCHASE_CATEGORY_STORE_ELECTRONIC,
  PURCHASE_CATEGORY_STORE_BOOKS,
  PURCHASE_CATEGORY_STORE_PERSONAL_CARE,
  PURCHASE_CATEGORY_STORE_FURNISHING,
  PURCHASE_CATEGORY_STORE_HOUSEHOLD_APPLIANCE,
  PURCHASE_CATEGORY_MEDICINES_AND_HEALTH_PRODUCTS,
  PURCHASE_CATEGORY_HEALTHCARE_DOCTOR,
  PURCHASE_CATEGORY_TRANSPORTATION_FUEL,
  PURCHASE_CATEGORY_TRANSPORTATION_AUTOMOTIVE_MAINTENANCE_AND_REPAIR,
  PURCHASE_CATEGORY_TRANSPORTATION_AUTOMOTIVE_PARTS,
  PURCHASE_CATEGORY_OTHER_TRANSPORT_SERVICES,
  PURCHASE_CATEGORY_TRANSPORT_ROAD,
  PURCHASE_CATEGORY_TRANSPORT_AIR,
  PURCHASE_CATEGORY_TRANSPORT_RAIL,
  PURCHASE_CATEGORY_COMBINED_PASSENGER_TRANSPORT,
  PURCHASE_CATEGORY_MISC_SERVICES_PERSONAL_TRANSPORT,
  PURCHASE_CATEGORY_ENTERTAINMENT_HOTEL,
  PURCHASE_CATEGORY_RECREATIONAL_SERVICES,
  PURCHASE_CATEGORY_RECREATIONAL_DURABLES,
  PURCHASE_CATEGORY_PACKAGE_HOLIDAYS,
  PURCHASE_CATEGORY_FINANCIAL_SERVICES,
  PURCHASE_CATEGORY_INSURANCE,
  PURCHASE_CATEGORY_HOUSING,
  PURCHASE_CATEGORY_NON_DURABLE_HOUSEHOLD_GOODS,
  PURCHASE_CATEGORY_OTHER_ENERGY_HEATING_COOLING,
  PURCHASE_CATEGORY_MAINTENANCE_DWELLING,
  PURCHASE_CATEGORY_HOUSEHOLD_MAINTENANCE,
  PURCHASE_CATEGORY_MISC_DWELLING,
  PURCHASE_CATEGORY_RENTAL,
  PURCHASE_CATEGORY_GAS,
  PURCHASE_CATEGORY_ELECTRICITY,
  PURCHASE_CATEGORY_OTHER_SERVICES,
  PURCHASE_CATEGORY_SOCIAL_PROTECTION,
  PURCHASE_CATEGORY_OTHER_PERSONAL_EFFECTS,
  PURCHASE_CATEGORY_INFORMATION_COMMUNICATION,
  PURCHASE_CATEGORY_MOBILE_PHONE,
];

describe('activityType and transportationMode are correctly defined in footprints.yml', () => {
  Object.values(ENTRY_BY_KEY).forEach((entry) => {
    if (entry.activityType) {
      test(`category ${entry.displayName} has a valid activityType`, () => {
        expect(VALID_ACTIVITY_TYPES).toContain(entry.activityType);
      });
    }
  });

  Object.values(ENTRY_BY_KEY).forEach((entry) => {
    if (entry.transportationMode) {
      test(`category ${entry.displayName} has a valid transportationMode`, () => {
        expect(VALID_TRANSPORTATION_MODES).toContain(entry.transportationMode);
      });
    }
  });

  Object.values(ENTRY_BY_KEY).forEach((entry) => {
    if (entry.activityType) {
      test(`all parents of ${entry.displayName} have same activityType`, () => {
        const refActivityType = entry.activityType;
        let parent = entry.parentKey ? ENTRY_BY_KEY[entry.parentKey] : null;
        while (parent) {
          if (parent.activityType && parent.intensityKilograms) {
            expect(parent.activityType).toEqual(refActivityType);
          }
          parent = parent.parentKey ? ENTRY_BY_KEY[parent.parentKey] : null;
        }
      });
    }
  });
});

describe('the purchase categories are correctly defined', () => {
  PURCHASE_CATEGORIES.forEach((purchaseCategory) => {
    test(`${purchaseCategory} does correspond to a category found in footprints.yml`, () => {
      expect(Object.keys(ENTRY_BY_KEY)).toContain(purchaseCategory);
    });
  });
});