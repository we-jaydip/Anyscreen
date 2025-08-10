'use client';

import Marquee from 'react-fast-marquee';

export default function FomoMarquee() {
  return (
    <section className="bg-[#000319] py-4 w-full">
      <Marquee
        speed={20} // Adjust speed for slower scrolling
        gradient={false} // Disable gradient effect
        className="text-[#00FF8B] font-semibold text-xl w-full"
      >
        ✅ 180+ Indian startups went online last month &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ Your competitors are running Google Ads &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ Gen Z trusts websites over WhatsApp catalogs &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ Digital market is growing ₹44,000 Cr/year &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ 76% of consumers say they trust businesses with websites &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ Websites make your business 24/7 accessible &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ 45% of small businesses don&apos;t have an online presence &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ Websites increase credibility and trust with reviews &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ 3 out of 5 business owners regret not starting earlier &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ You can&apos;t afford to stay offline any longer! &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ Websites help you expand your reach beyond local areas &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ 80% of consumers use a search engine before making a purchase decision &nbsp;&nbsp;|&nbsp;&nbsp;
        ✅ No website = no visibility on Google search &nbsp;&nbsp;|&nbsp;&nbsp;
      </Marquee>
    </section>
  );
}
