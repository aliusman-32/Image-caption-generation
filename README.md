# Image Caption Generator



An application that generates descriptive captions for uploaded images using a pre-trained deep learning model (Salesforce/blip-image-captioning-large). The interface is built with HTML, Tailwind CSS, and JavaScript, while the processing uses FastAPI with a Hugging Face transformer model.

## Features

- 🖼️ Upload any image file
- 🔍 Preview the uploaded image
- 🤖 Automatic caption generation using AI
- ✨ Typewriter effect for displaying the caption
- 🌐 Remote access support
- 🔄 Cross-origin communication support

## Technologies Used

### Interface
- HTML5
- Tailwind CSS
- Vanilla JavaScript

### Processing
- Python
- FastAPI
- Hugging Face Transformers (Salesforce/blip-image-captioning-large)
- Uvicorn (ASGI server)
- Pyngrok (for tunneling during development)

## Setup Instructions

### Prerequisites
- Python 3.7+
- Node.js (for interface development)
- ngrok account (for local testing)

### Processing Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/aliusman-32/Image-caption-generation.git
   cd image-caption-generator
