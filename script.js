function numberOfBooksRead(library) {
    let count = 0;
    for (let book of library) {
        if (book.readingStatus === true) {
            count++;
        }
    }
    return count;
}