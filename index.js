
function typeText(element, text, delay = 50) {
element.textContent = '';
let i = 0;
function type() {
  if (i < text.length) {
    element.textContent += text.charAt(i);
    i++;
    setTimeout(type, delay);
  }
}
type();

}
const imageInput = document.getElementById('imageInput');
const imagePreview = document.getElementById('imagePreview');
const captionOutput = document.getElementById('captionOutput');

    // Show preview on file select, hide if no file
imageInput.addEventListener('change', () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = (e) => {
      imagePreview.src = e.target.result;
      imagePreview.classList.remove('hidden');
    };
    reader.readAsDataURL(file);
  } else {
    imagePreview.src = '';
    imagePreview.classList.add('hidden');
  }
  captionOutput.textContent = ''; // clear previous caption on new selection
});

    // Handle button click to send image to backend
  document.getElementById('generateBtn').addEventListener('click', async () => {
  captionOutput.textContent = '';

    if (!imageInput.files || imageInput.files.length === 0) {
      captionOutput.textContent = 'Please select an image first.';
      return;
    }

    const file = imageInput.files[0];
    const formData = new FormData();
    formData.append('image', file);

    captionOutput.textContent = 'Generating caption...';

      try {
        const response = await fetch('https://10d2670f30e5.ngrok-free.app/generate-caption', {
          method: 'POST',
          body: formData
        });

        if (!response.ok) {
          throw new Error(`Server error: ${response.statusText}`);
        }

        const data = await response.json();
        console.log(data);
        
        typeText(captionOutput, data.caption || 'No caption returned.', 50);
      } catch (error) {
        captionOutput.textContent = `Error: ${error.message}`;
      }
    });
  