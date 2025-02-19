import "@/style/layout/logo.css";

export default function Logo({ size }) {
  return (
    <div className="logoComponent" style={{ width: size, height: size }}>
      <img src="/assets/logo/symbol.svg" alt="logo" />
    </div>
  );
}
