export default function ParticleBackground() {
  return (
    <div className="particle-bg">
      {[...Array(10)].map((_, i) => (
        <div key={i} className="particle" />
      ))}
    </div>
  );
}
