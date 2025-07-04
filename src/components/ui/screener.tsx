const FullscreenStickySection = ({ children }:{children:React.ReactNode}) => (
  <div className="sticky pb-30 sm:pb-0 top-0 h-screen overflow-auto">
    <div className="h-full overflow-y-auto">
      {children}
    </div>
  </div>
);

export default FullscreenStickySection;
