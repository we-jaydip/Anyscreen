"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const RefundReturnPolicy = () => {
  return (
    <main className="relative bg-black-100 flex flex-col overflow-hidden min-h-screen">
      <div className="max-w-7xl w-full min-h-screen flex flex-col">

        <section className="flex-1 flex items-start justify-center py-20">
          <div className="w-full md:w-4/5 text-left text-gray-300 space-y-6 overflow-y-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-10">
              Refund &amp; Return Policy
            </h1>

            <p>
              <strong>Effective Date:</strong> August 5, 2025
            </p>

            <p>
              The legal entity <strong>Nexuswave Technologies</strong> operates under the brand name <strong>AnyScreen Agency</strong>.
              At Nexuswave Technologies, we take pride in delivering high-quality website development, application development, 
              and digital marketing services. As a service-based business, all charges for our services are final and non-refundable 
              once a project has commenced or a service has been delivered.
            </p>

            <h2 className="text-2xl font-semibold text-white">1. Pricing</h2>
            <p>
              Our services are priced based on the scope and complexity of the project, starting at ₹4,999 and going up to ₹1,00,000. 
              The exact pricing will be communicated before the commencement of the project.
            </p>

            <h2 className="text-2xl font-semibold text-white">2. Refund Terms</h2>
            <p>
              All payments made for our services are <strong>non-refundable</strong> once work has started or services have been delivered.  
              We encourage clients to review project scopes, timelines, and deliverables before confirming orders.
            </p>

            <h2 className="text-2xl font-semibold text-white">3. Client Support &amp; Assistance</h2>
            <p>
              We are committed to supporting our clients and ensuring their satisfaction. While payments are non-refundable, 
              our team remains available to assist you with any issues or queries related to the services provided.
            </p>
            <p>
              For any questions or concerns regarding your project or our services, you can reach us at:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>📧 Email: <a href="mailto:sales@anycreen.in" className="underline text-blue-400">sales@anycreen.in</a></li>
              <li>📞 Phone: 7559236621</li>
              <li>🕒 Working Hours: Monday to Friday, 10:00 AM – 6:00 PM (IST)</li>
            </ul>

            <h2 className="text-2xl font-semibold text-white">4. Policy Updates</h2>
            <p>
              Nexuswave Technologies reserves the right to update or modify this refund policy at any time without prior notice. 
              We encourage you to regularly review this page to stay informed about our current terms.
            </p>
          </div>
        </section>

      </div>
      <Footer />
    </main>
  );
};

export default RefundReturnPolicy;
