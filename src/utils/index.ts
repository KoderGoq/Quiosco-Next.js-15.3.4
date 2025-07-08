export const formatCurrency = (ammount: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(ammount);
}

export const getImagePath = (imagePath: string) => {
  const cloudinaryBaseUrl = 'https://res.cloudinary.com';
  if (imagePath.startsWith(cloudinaryBaseUrl)) {
    return imagePath;
  } else {
    return `/products/${imagePath}.jpg`
  }
}
