'use client';

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

export default function PhotographyPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 md:px-12 max-w-[1400px] mx-auto">
      <div className="mb-16 px-4">
        <a 
          href="/interests" 
          className="text-accent text-sm font-bold flex items-center gap-2 mb-8 hover:-translate-x-1 transition-transform inline-block"
        >
          ← BACK TO INTERESTS
        </a>
        <h1 className="text-4xl font-bold mb-4 text-foreground">Photography</h1>
        <p className="text-muted-foreground max-w-xl">
          A visual diary of my journeys. From cityscapes to natural wonders, capturing the world as I see it through the lens.
        </p>
      </div>

      <div className="columns-2 sm:columns-3 lg:columns-4 xl:columns-5 gap-4 space-y-4">
        {hobbyImages.map((imageName, index) => (
          <div
            key={index}
            className="break-inside-avoid group relative overflow-hidden rounded-xl bg-muted/40 transition-all duration-300 hover:shadow-xl"
          >
            <img
              src={`/pics/${imageName}`}
              alt={`Photography by Pranav Prathap`}
              className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Subtle Pinterest-style overlay on hover */}
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>
    </main>
  );
}
