export const slugify = (phrase) => {

    const space = / /g

    const apostrophy = /\'/g

    let removedWhiteSpace = phrase.replace(space, '-').toLowerCase()

    let removedApostrohy = removedWhiteSpace.replace(apostrophy, '')


    return removedApostrohy
}