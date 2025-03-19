import Hero from "@/components/sections/hero";
import TextWithAction from "@/components/sections/text-with-action";
import InfoCard from "@/components/ui/info-card";
import SectionTitle from "@/components/ui/section-title";
import dynamic from "next/dynamic";

const ContactForm = dynamic(() => import("@/components/common/contact-form"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <div className="pb-[100px] pt-[80px]" id="home">
      <div style="margin: 0; padding: 0; text-align: center;">
    <div style="position: absolute; top: 30px; width: 100%; font-size: 24px; font-weight: bold;">
        Attention Growwellfunding.com: <span style="color: red;">Your website hosting has been suspended</span> due to non-payment. Please renew your hosting plan immediately to restore access. If not renewed, <span style="color: red; text-decoration: underline;">all website data will be permanently deleted</span> from our server.
    </div>
</div>
      </div>
    </>
  );
}
