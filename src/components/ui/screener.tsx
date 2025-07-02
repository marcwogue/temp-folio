const FullscreenStickySection = ({ children }: { children: React.ReactNode }) => (
    <div className="sticky top-0 h-screen overflow-hidden">
      <div className="h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
  
  export default FullscreenStickySection;
  