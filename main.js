const portfolio = {
    "metadata": {
      "title": "Tharusha Dilshan | Graphic Designer",
      "description": "Portfolio website of Tharusha Dilshan, Graphic Designer",
      "viewport": "width=device-width, initial-scale=1.0",
      "stylesheets": [
        "style.css",
        "index.html",
        "https://cdn.tailwindcss.com",
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      ],
      "fonts": [
        {
          "family": "Poppins",
          "weights": [300, 400, 500, 600, 700]
        },
        {
          "family": "Playfair Display",
          "weights": [400, 500, 600, 700]
        }
      ]
    },
    "navigation": {
      "logo": {
        "image": "image/MY PHOTO.jpg",
        "text": "TharushaDilshan",
        "gradientText": true
      },
      "links": [
        { "text": "Home", "href": "#", "active": true },
        { "text": "Work", "href": "#work" },
        { "text": "About", "href": "#" },
        { "text": "Services", "href": "#" },
        { "text": "Contact", "href": "#contact" }
      ],
      "mobileMenu": true
    }
  };
  document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const form = e.target;
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { 'Accept': 'application/json' }
    });
    
    if (response.ok) {
      alert('ඔබේ පණිවිඩය යැවීම සාර්ථකයි! මම ඉක්මනින් ඔබව සම්බන්ධ කරගන්නම්.');
      form.reset();
    } else {
      alert('දෝෂයක් ඇතිවිය. කරුණාකර නැවත උත්සාහ කරන්න.');
    }
  });
  // Example of using the object
  console.log(portfolio);
  