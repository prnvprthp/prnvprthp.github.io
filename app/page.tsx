export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-20">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground mb-6">
          Pranav Prathap
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-lg mx-auto leading-relaxed">
          MSBA @ William & Mary. Bridging <span className="text-accent">Data Architecture</span> and 
          <span className="text-accent"> Strategic GTM</span>.
        </p>
      </div>
    </main>
  );
}