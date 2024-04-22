export const adjustIslandForScreenSize = () => {
  let screenScale = null
  let screenPosition = [0, -6.5, -43]
  let rotation = [0.1, 4.7, 0]

  if (window.innerWidth < 768) {
    screenScale = [0.9, 0.9, 0.9]
    screenPosition = [0, -6.5, -43]
  } else {
    screenScale = [1, 1, 1]
  }
  return [screenScale, screenPosition, rotation]
}

export const adjustPlaneForScreenSize = () => {
  let screenPosition

  if (window.innerWidth < 768) {
    screenPosition = [0, -1, -1]
  } else {
    screenPosition = [0, -1, 0]
  }

  return [screenPosition]
}