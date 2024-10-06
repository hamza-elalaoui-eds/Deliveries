function replaceParagraphsWithNumbers() {
    const paragraphs = document.querySelectorAll('#description p');

    paragraphs.forEach((paragraph, index) => {
        paragraph.textContent = index + 1;
    });
}

window.onload = replaceParagraphsWithNumbers;