const reader = new FileReader();
export const getSrcFromFile = (file: File) => new Promise<string>((resolve, reject) => {
  reader.onload = () => {
    const dataURL = reader.result;
    if (typeof dataURL !== 'string')
      reject({ message: `wrong dataURL ${typeof dataURL}`, dataURL });
    resolve(dataURL as string);
  }
  reader.readAsDataURL(file);
})