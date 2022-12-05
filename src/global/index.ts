export function getImgSrc(src: string) {
	return new URL(src, import.meta.url).href;
}

export function scrollToAddReviewForm() {
	const addReviewForm = document.querySelector('.add-review-form');
	addReviewForm?.scrollIntoView({ behavior: 'smooth' });
}
