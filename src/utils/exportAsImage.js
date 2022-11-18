import html2canvas from 'html2canvas';

const exportAsImage = async (el, imageFileName) => {
  // we need to pass html2canvas an options object in order to allowit to render the image tag
  const canvas = await html2canvas(el, { allowTaint: true, useCORS: true });
  const image = canvas.toDataURL('image/png', 1.0);
  downloadImage(image, imageFileName);
}

const downloadImage = (blob, filename) => {
  const fakeLink = window.document.createElement('a');
  fakeLink.style = 'display:none;';
  fakeLink.download = filename;

  fakeLink.href = blob;

  document.body.appendChild(fakeLink);
  fakeLink.click();
  document.body.removeChild(fakeLink);

  fakeLink.remove();
}

export default exportAsImage;
