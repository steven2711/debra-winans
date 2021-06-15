export const slugify = (phrase) => {

    const space = / /g

    return phrase.replace(space, '-').toLowerCase()
}