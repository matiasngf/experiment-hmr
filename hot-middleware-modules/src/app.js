import { createNode } from "./utils"

const startApp = (container) => {
  const heroContainer = createNode('div', { className: 'hero' })
  const heroTitle = createNode('div', { innerHTML: 'Hello' }).appendTo(heroContainer)

  const navContainer = createNode('div', { className: 'nav' }).appendTo(heroContainer)
  
  const navList = createNode('ul').appendTo(navContainer)

  const navItems = ['Home', 'About', 'Contact'].map((item) => {
    const navItem = createNode('li', { innerHTML: item })
    return navItem
  })
  navItems.forEach((item) => item.appendTo(navList))

  container.appendChild(heroContainer)
}

export default startApp