export function findCardByPath(path, parent = document) {
  return parent.querySelector(`[href="${path}"]`)
}

