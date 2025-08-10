"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const TermsAndConditions = () => {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden min-h-screen">
      <div className="max-w-7xl w-full min-h-screen flex flex-col">
        

        <section className="flex-1 flex items-start justify-center py-20">
          <div className="w-full md:w-4/5 text-left text-gray-300 space-y-6 overflow-y-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
              Terms and Conditions
            </h1>

            <p><strong>Effective Date:</strong> August 5, 2025</p>

            <h2 className="text-2xl font-semibold text-white">1. Acceptance of Terms</h2>
            <p>
              By accessing or using www.anyscreen.in, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use of our services.
            </p>

            <h2 className="text-2xl font-semibold text-white">2. Use of Website</h2>
            <p>You agree not to:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>Use the website for unlawful purposes</li>
              <li>Transmit harmful or malicious content</li>
              <li>Attempt to gain unauthorized access to any part of the site</li>
              <li>Copy, reverse engineer, or exploit the website’s content</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white">3. Intellectual Property</h2>
            <p>
              All content on this website, including logos, designs, text, and graphics, is the property of Anyscreen unless otherwise stated. Unauthorized use is strictly prohibited.
            </p>

            <h2 className="text-2xl font-semibold text-white">4. Services Disclaimer</h2>
            <p>
              While we strive to provide accurate and timely content and services, Anyscreen does not guarantee that our services will be error-free or uninterrupted.
            </p>

            <h2 className="text-2xl font-semibold text-white">5. Limitation of Liability</h2>
            <p>
              Anyscreen will not be held liable for any direct, indirect, or consequential damages resulting from the use of or inability to use our website or services.
            </p>

            <h2 className="text-2xl font-semibold text-white">6. Third-Party Links</h2>
            <p>
              We may include links to third-party websites. We are not responsible for the content, policies, or practices of these external sites.
            </p>

            <h2 className="text-2xl font-semibold text-white">7. Termination</h2>
            <p>
              We reserve the right to suspend or terminate access to our website for users who violate these terms, without prior notice.
            </p>

            <h2 className="text-2xl font-semibold text-white">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of India. All disputes shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
            </p>

            <h2 className="text-2xl font-semibold text-white">9. Modifications</h2>
            <p>
              We may update these Terms and Conditions periodically. Updates will be posted on this page with a revised effective date.
            </p>

            <h2 className="text-2xl font-semibold text-white">10. Contact Us</h2>
            <p>
              For business inquiries:
              <br />📧 <a href="mailto:sales@anyscreen.in" className="underline text-blue-400">sales@anyscreen.in</a>
            </p>
          </div>
        </section>

        
      </div>
      <Footer />
    </main>
  );
};

export default TermsAndConditions;
