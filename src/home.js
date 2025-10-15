export function contentHome() {
	// Creating a header
	const headerArr = ['header', 'h1', 'p'];
	const [headerTag, headerLine, headerParagraph] = headerArr.map((element) => document.createElement(element));
	headerLine.textContent = 'Le Château Noir – Bordeaux';
	headerParagraph.textContent = 'Where French cuisine meets Halloween magic 🎃';
	headerTag.append(headerLine, headerParagraph);

	// Creating an article
	const articleArr = ['article', 'h2', 'p', 'p'];
	const [articleTag, articleLine, articleParagraph1, articleParagraph2] = articleArr.map((element) => document.createElement(element));
	articleLine.textContent = 'Welcome to the Darkest Feast in Bordeaux';
	articleParagraph1.textContent = 'Step into Le Château Noir, a restaurant unlike any other — this October, our historic dining room transforms into a candlelit haven filled with ghostly delights, eerie decor, and the irresistible scent of autumn spices.';
	articleParagraph2.textContent = 'Join us from October 15th to November 2nd for a one-of-a-kind Halloween dining experience that combines classic French gastronomy with a spine-tingling atmosphere.';
	articleTag.append(articleLine, articleParagraph1, articleParagraph2);

	//Creating an aside
	const asideArr = ['aside', 'h1', 'p'];
	const [asideTag, asideLine, asideParagraph] = asideArr.map((element) => document.createElement(element));
	asideLine.textContent = 'Le Château Noir – Bordeaux';
	asideParagraph.textContent = 'Where French cuisine meets Halloween magic 🎃';
	asideTag.append(asideLine, asideParagraph);

	const totalContent = document.createElement('section');
	totalContent.append(headerTag, articleTag, asideTag);
	return totalContent;
}

// Suggestions refactorisation chatGPT
/* function createElement(tag, text) {
	const el = document.createElement(tag);
	if (text) el.textContent = text;
	return el;
}

export function contentHome() {
	const header = createElement('header');
	header.append(createElement('h1', 'Le Château Noir – Bordeaux'), createElement('p', 'Where French cuisine meets Halloween magic 🎃'));

	const article = createElement('article');
	article.append(createElement('h2', 'Welcome to the Darkest Feast in Bordeaux'), createElement('p', 'Step into Le Château Noir, a restaurant unlike any other...'), createElement('p', 'Join us from October 15th to November 2nd for...'));

	const aside = createElement('aside');
	aside.append(createElement('h1', 'Le Château Noir – Bordeaux'), createElement('p', 'Where French cuisine meets Halloween magic 🎃'));

	const section = createElement('section');
	section.append(header, article, aside);

	return section;
}
 */
