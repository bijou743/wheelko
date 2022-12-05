import type { IReview } from './IReview';

export interface IProduct {
	id: number;
	title: string;
	reviews: IReview[];
	price: number;
	discountPrice?: number;
	image: string;
	hit: boolean;
	base: boolean;
	addition: boolean;
	gameOfWeek: boolean;
	popular: boolean;
	category: number;
}
