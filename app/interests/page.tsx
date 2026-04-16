'use client';

// app/interests/page.tsx
import Image from 'next/image';

// List of image file names from public/pics/
const hobbyImages = [
  'pranav-prathap-1TS9VmU6b9w-unsplash.jpg',
  'pranav-prathap-1y-MNEEADaQ-unsplash.jpg',
  'pranav-prathap-3NlaDoiSfFs-unsplash.jpg',
  'pranav-prathap-42OPoseAttQ-unsplash.jpg',
  'pranav-prathap-5kk-elu5zmY-unsplash.jpg',
  'pranav-prathap-8IK8VgadFyA-unsplash.jpg',
  'pranav-prathap-AFzTh3TFBrg-unsplash.jpg',
  'pranav-prathap-D_SUET2C0nE-unsplash.jpg',
  'pranav-prathap-dOKdSH8eDKA-unsplash.jpg',
  'pranav-prathap-fI4f2jSOPSQ-unsplash.jpg',
  'pranav-prathap-fj7KrRPbGEQ-unsplash.jpg',
  'pranav-prathap-fnUaouNLJpY-unsplash.jpg',
  'pranav-prathap-FsVk-n7uWmA-unsplash.jpg',
  'pranav-prathap-GEglwwTMPuc-unsplash.jpg',
  'pranav-prathap-h2PfPoT9FaM-unsplash.jpg',
  'pranav-prathap-HcKXPX0vMwo-unsplash.jpg',
  'pranav-prathap-I_SiubTp2s8-unsplash.jpg',
  'pranav-prathap-iLiRGSEwzuc-unsplash.jpg',
  'pranav-prathap-iwFAfMShBZA-unsplash.jpg',
  'pranav-prathap-jfwXzlxi08E-unsplash.jpg',
  'pranav-prathap-KhecF6GFqVc-unsplash.jpg',
  'pranav-prathap-Ky2IdwnfAXk-unsplash.jpg',
  'pranav-prathap-L_xnd06GUAs-unsplash.jpg',
  'pranav-prathap-l0sQgK7Q82o-unsplash.jpg',
  'pranav-prathap-m_9E6srgbAo-unsplash.jpg',
  'pranav-prathap-O9UfyDZIfHU-unsplash.jpg',
  'pranav-prathap-oTp7r__6HGQ-unsplash.jpg',
  'pranav-prathap-PBhJWYxu_xw-unsplash.jpg',
  'pranav-prathap-pjCvZ5vgTcw-unsplash.jpg',
  'pranav-prathap-q02dOuDTgQU-unsplash.jpg',
  'pranav-prathap-RyuQV-YnVKU-unsplash.jpg',
  'pranav-prathap-uiTYMd-N08c-unsplash.jpg',
  'pranav-prathap-usxRMyfmDUM-unsplash.jpg',
  'pranav-prathap-VF0SBoaygEU-unsplash.jpg',
  'pranav-prathap-WjRxz9dYakM-unsplash.jpg',
];

export default function InterestsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">My Interests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hobbyImages.map((imageName, index) => (
          <div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
          >
            <Image
              src={`/pics/${imageName}`}
              alt={`Hobby image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          max-width: 1200px; /* Adjust max-width for a wider Apple-like feel */
          margin: 0 auto;
          padding: 2rem 1rem; /* Adjust padding */
        }
        h1 {
          font-size: 3rem; /* Larger heading */
          font-weight: 700; /* Bold */
          text-align: center;
          margin-bottom: 2rem; /* Adjust margin */
          color: #1d1d1f; /* Apple-like dark text color */
        }
        .grid {
          display: grid;
          /* Responsive grid mimicking Apple's layout */
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjusted min width */
          gap: 1.5rem; /* Adjusted gap */
        }
        .aspect-square {
            aspect-ratio: 1 / 1; /* For a uniform grid of square-like images */
        }
        .overflow-hidden {
          overflow: hidden;
        }
        .rounded-lg {
          border-radius: 0.75rem; /* Slightly larger radius */
        }
        .shadow-lg {
          box-shadow: 0 4px 12px rgba(0,0,0,0.05); /* Subtle shadow */
        }
        .hover\:shadow-xl:hover {
          box-shadow: 0 8px 24px rgba(0,0,0,0.1); /* Slightly stronger shadow on hover */
        }
        .transition-shadow {
          transition-property: box-shadow;
          transition-duration: .3s;
          transition-timing-function: cubic-bezier(.4,0,.2,1);
        }
        .object-cover {
          object-fit: cover;
        }

        /* Minimalist styling for the image */
        .grid > div > img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover; /* Ensures images cover the container without distortion */
        }

        /* Adjustments for a more Apple-like aesthetic */
        body {
            background-color: #f5f5f7; /* Light background color */
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }
        h1 {
            color: #1d1d1f; /* Very dark grey, almost black */
        }
        .grid {
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Responsive columns */
            gap: 1.5rem; /* Spacing between images */
        }
        .shadow-lg {
            box-shadow: 0 4px 12px rgba(0,0,0,0.05); /* Subtle shadow */
        }
        .hover\:shadow-xl:hover {
            box-shadow: 0 8px 24px rgba(0,0,0,0.1); /* Slightly stronger shadow on hover */
        }
        .rounded-lg {
            border-radius: 0.75rem; /* Slightly larger radius */
        }
      `}</style>
    </div>
  );
}

