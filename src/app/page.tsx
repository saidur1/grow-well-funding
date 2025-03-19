export default function Home() {
  return (
    <>
      <div className="pb-[100px] pt-[80px]" id="home">
        <div style={{ margin: 0, padding: 0, textAlign: "center" }}>
          <div style={{ position: "absolute", top: 30, width: "100%", fontSize: 24, fontWeight: "bold" }}>
            Attention <span style={{ color: "red" }}>Growwellfunding.com</span>: Your website hosting has been suspended due to non-payment. 
            Please renew your hosting plan immediately to restore access. If not renewed,{" "}
            <span style={{ color: "red", textDecoration: "underline" }}>all website data will be permanently deleted</span> from our server.
          </div>
        </div>
      </div>
    </>
  );
}
