export function scrollToAddReviewForm() {
	const addReviewForm = document.querySelector('.add-review-form');
	addReviewForm?.scrollIntoView({ behavior: 'smooth' });
}
