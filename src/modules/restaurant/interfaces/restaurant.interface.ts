import type { BaseEntity } from '@/common/entities/base.entity';
import type { RestaurantOwner } from '@/modules/restaurant-owner/interfaces/restaurant-owner.intereface';

import type { VerificationStatus } from '../enum/verification-status.enum';

export interface Restaurant extends BaseEntity {
  name: string;
  slug: string;
  phone: string | null;
  cityId: number;
  hasTakeAway: boolean;
  hasDelivery: boolean;
  isActive: boolean;
  verificationStatus: VerificationStatus;
  rating: number;
  address: string | null;
}

export interface RestaurantWithOwner extends Restaurant {
  restaurantOwner:RestaurantOwner;
}
