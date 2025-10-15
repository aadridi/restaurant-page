export function contentAbout() {
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
	articleParagraph1.textContent = 'About Us';
	articleParagraph2.textContent = 'Contact';
	articleTag.append(articleLine, articleParagraph1, articleParagraph1);

	//Creating an aside
	const asideArr = ['aside', 'h1', 'p'];
	const [asideTag, asideLine, asideParagraph] = asideArr.map((element) => document.createElement(element));
	asideLine.textContent = 'Le Château Noir – Bordeaux';
	asideParagraph.textContent = 'Feedback';
	asideTag.append(asideLine, asideParagraph);

	const totalContent = document.createElement('section');
	totalContent.append(headerTag, articleTag, asideTag);
	return totalContent;
}
