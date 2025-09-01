"use client";

import TokenBillboardHero from '@/components/sections/layouts/hero/TokenBillboardHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <TokenBillboardHero
      title="Join the MemeWave!"
      subtitle="The ultimate meme cryptocurrency experience."
      contractAddress="0x1234567890abcdef"
      copyButtonText="Copy Address"
      copiedText="Address Copied!"
    />
    <SocialsAbout
      title="Connect with Us"
      descriptions={['Follow us on social media!', 'Join our community!']}
    />
    <HowToBuy2D
      variant="simple"
    />
    <BigNumberTokenomics
      title="Tokenomics"
      description="Explore our token distribution and economics."
      kpiItems={[
        { value: "10M", description: "Total Supply", longDescription: "Total supply of MemeWave tokens.", icon: { align: 'LucideIcon' }},
        { value: "4M", description: "Market Cap", longDescription: "Market capitalization of MemeWave.", icon: { align: 'LucideIcon' }},
        { value: "2M", description: "Liquidity", longDescription: "Liquidity pool for MemeWave tokens.", icon: { align: 'LucideIcon' }}
      ]}
    />
    <FooterLogoEmphasis
      logoSrc="/images/logo.svg"
      logoAlt="MemeWave Logo"
      columns={[
        { items: [{ label: 'Privacy Policy', onClick: () => console.log('Privacy Clicked') }] },
         { items: [{ label: 'Terms of Service', onClick: () => console.log('Terms Clicked') }] },
         { items: [{ label: 'Contact Us', onClick: () => console.log('Contact Clicked') }] }
      ]}
      logoText="Over 9000 Memes"
      className="footer"
    />
  );
}