"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const PrivacyPolicy = () => {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden min-h-screen">
      <div className="max-w-7xl w-full min-h-screen flex flex-col">

        <section className="flex-1 flex items-start justify-center py-20">
          <div className="w-full md:w-4/5 text-left text-gray-300 space-y-6 overflow-y-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
              Privacy Policy
            </h1>

            <p><strong>Effective Date:</strong> August 5, 2025</p>

            <p>
              At <strong>AnyScreen</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;), operating under Nexuswave Technologies 
              and accessible from <a href="https://www.anyscreen.in" className="underline text-blue-400">www.anyscreen.in</a>, 
              we are committed to protecting your personal information and your right to privacy.
            </p>
            <p>
              This Privacy Policy outlines how we collect, use, store, and protect the data you provide to us.
            </p>

            <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Personal Information:</strong> Name, email address, phone number, company name, etc.</li>
              <li><strong>Technical Data:</strong> IP address, browser type, operating system, referring URLs, and device details.</li>
              <li><strong>Usage Data:</strong> Time spent on pages, clicks, scrolls, and session behavior.</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white">2. How We Use Your Information</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Respond to your queries and provide customer support</li>
              <li>Improve our website and service offerings</li>
              <li>Analyze user behavior to enhance user experience</li>
              <li>Send promotional emails, updates, and newsletters (only if you have opted in)</li>
              <li>Comply with legal and regulatory obligations</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white">3. Cookies &amp; Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              You can manage cookie preferences in your browser settings. Disabling cookies may limit some functionality 
              of our website.
            </p>

            <h2 className="text-2xl font-semibold text-white">4. Third-Party Services</h2>
            <p>
              We may use trusted third-party service providers (such as hosting, analytics, and payment gateways) 
              who process your data securely under strict confidentiality agreements.
            </p>

            <h2 className="text-2xl font-semibold text-white">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to secure your personal data. 
              While we strive to protect your information, no method of transmission over the internet is completely secure.
            </p>

            <h2 className="text-2xl font-semibold text-white">6. Data Retention</h2>
            <p>
              We retain your data only as long as necessary for the purposes outlined in this policy 
              or as required by applicable laws.
            </p>

            <h2 className="text-2xl font-semibold text-white">7. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Request access to your personal data</li>
              <li>Request corrections to inaccurate or incomplete data</li>
              <li>Request deletion of your data under certain conditions</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at: 
              <a href="mailto:sales@anyscreen.in" className="underline text-blue-400"> sales@anyscreen.in</a>
            </p>

            <h2 className="text-2xl font-semibold text-white">8. Children’s Privacy</h2>
            <p>
              Our services are not intended for individuals under the age of 13, 
              and we do not knowingly collect personal data from minors.
            </p>

            <h2 className="text-2xl font-semibold text-white">9. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. 
              We encourage you to review this page periodically for updates.
            </p>

            <h2 className="text-2xl font-semibold text-white">10. Contact Us</h2>
            <p>
              If you have any questions or legal concerns, you can reach us at:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>📧 Sales: <a href="mailto:sales@anyscreen.in" className="underline text-blue-400">sales@anyscreen.in</a></li>
            </ul>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
};

export default PrivacyPolicy;
