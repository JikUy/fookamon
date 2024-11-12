// Mapping characters to their respective image filenames
const charToImageMap = {
  'a': 'a.jpg',
  'b': 'b.jpg',
  'c': 'c.jpg',
  'd': 'd.jpg',
  'e': 'e.jpg',
  'f': 'f.jpg',
  'g': 'g.jpg',
  'h': 'h.jpg',
  'i': 'i.jpg',
  'j': 'j.jpg',
  'k': 'k.jpg',
  'l': 'l.jpg',
  'm': 'm.jpg',
  'n': 'n.jpg',
  'o': 'o.jpg',
  'p': 'p.jpg',
  'q': 'q.jpg',
  'r': 'r.jpg',
  's': 's.jpg',
  't': 't.jpg',
  'u': 'u.jpg',
  'v': 'v.jpg',
  'w': 'w.jpg',
  'x': 'x.jpg',
  'y': 'y.jpg',
  'z': 'z.jpg',
  '0': '0.jpg',
  '1': '1.jpg',
  '2': '2.jpg',
  '3': '3.jpg',
  '4': '4.jpg',
  '5': '5.jpg',
  '6': '6.jpg',
  '7': '7.jpg',
  '8': '8.jpg',
  '9': '9.jpg',
  '$': 'dollar.jpg',
  ' ': 'space.jpg',  // Optional: add an image for space if you want
};

// Function to translate text into images
function translateText() {
  const inputText = document.getElementById('inputText').value;
  const imageContainer = document.getElementById('imageContainer');
  
  // Clear previous images
  imageContainer.innerHTML = '';

  // Loop through each character in the input text
  for (let char of inputText.toLowerCase()) {
    // Check if there's a corresponding image for the character
    if (charToImageMap[char]) {
      const img = document.createElement('img');
      img.src = `images/${charToImageMap[char]}`; // Ensure images are in the "images" folder
      img.alt = char;
      imageContainer.appendChild(img);
    } else {
      console.warn(`No image found for character: ${char}`);
    }
  }
}
