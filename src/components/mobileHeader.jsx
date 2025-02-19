import "@/style/layout/mobileHeader.css";

export default function MobileHeader({ children, fixed }) {
  return (
    <div id="mobileHeader" className={fixed ? "fixed" : ""}>
      {children}
    </div>
  );
}
