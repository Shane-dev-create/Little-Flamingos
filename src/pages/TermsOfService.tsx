import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="bg-sand-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-sand-100 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 border-b border-sand-100 pb-8">
            <div className="bg-flamingo-100 p-3 rounded-2xl">
              <FileText className="h-8 w-8 text-flamingo-500" />
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-sand-900">
              Terms of Service
            </h1>
          </div>

          <div className="prose prose-sand max-w-none">
            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">1. Introduction</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              These Terms of Service (“Terms”) govern the use of the Day Care’s website (“the Website”). By accessing or using the Website, you (“the User”) agree to be bound by these Terms. If you do not agree to these Terms, you must refrain from using the Website.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">2. Definitions</h2>
            <p className="text-sand-800 mb-4 leading-relaxed">For purposes of these Terms:</p>
            <ul className="list-disc pl-6 text-sand-800 mb-6 space-y-2">
              <li><strong>“Organisation”</strong> refers to the Day Care operating this Website.</li>
              <li><strong>“User”</strong> refers to any individual accessing or using the Website.</li>
              <li><strong>“Website”</strong> refers to all pages, content, forms, and services accessible under the Organisation’s domain.</li>
              <li><strong>“Personal Information”</strong> has the meaning assigned under the Protection of Personal Information Act, No. 4 of 2013 (“POPIA”).</li>
            </ul>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">3. Use of the Website</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              3.1 The Website is provided for the purpose of offering information about the Organisation and enabling Users to submit enquiries.<br />
              3.2 Users may not use the Website for any unlawful, harmful, or unauthorised purpose.<br />
              3.3 The Organisation reserves the right to restrict or terminate access to the Website at its discretion.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">4. Accuracy of Information</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              4.1 While the Organisation endeavours to ensure that information on the Website is accurate and up to date, no warranties are made regarding completeness, accuracy, reliability, or suitability.<br />
              4.2 The Organisation shall not be liable for any loss or damages arising from reliance on information provided on the Website.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">5. Submission of Personal Information</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              5.1 Users may submit Personal Information through the Website’s enquiry form.<br />
              5.2 By submitting Personal Information, the User consents to its processing strictly for purposes related to the operation of the Day Care, including responding to enquiries and providing service‑related information.<br />
              5.3 All Personal Information is processed in accordance with POPIA and the Organisation’s Privacy Policy.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">6. Intellectual Property</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              6.1 All content on the Website, including text, graphics, logos, images, and layout, is the property of the Organisation or its licensors and is protected by applicable intellectual property laws.<br />
              6.2 Users may not reproduce, distribute, modify, or use any content without prior written consent from the Organisation.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">7. Third‑Party Links</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              7.1 The Website may contain links to third‑party websites for convenience.<br />
              7.2 The Organisation does not endorse, control, or assume responsibility for the content, policies, or practices of third‑party websites.<br />
              7.3 Users access third‑party websites at their own risk.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">8. Limitation of Liability</h2>
            <p className="text-sand-800 mb-4 leading-relaxed">
              8.1 The Organisation shall not be liable for any direct, indirect, incidental, consequential, or special damages arising from:
            </p>
            <ul className="list-disc pl-6 text-sand-800 mb-4 space-y-2">
              <li>Use of the Website</li>
              <li>Inability to access the Website</li>
              <li>Reliance on any information provided on the Website</li>
            </ul>
            <p className="text-sand-800 mb-6 leading-relaxed">
              8.2 This limitation applies to the fullest extent permitted by South African law.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">9. Security</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              9.1 The Organisation implements reasonable measures to safeguard the Website and any Personal Information submitted through it.<br />
              9.2 However, the Organisation does not guarantee that the Website will be free from errors, interruptions, viruses, or unauthorised access.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">10. Indemnification</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              The User agrees to indemnify and hold harmless the Organisation, its employees, and affiliates from any claims, damages, losses, or liabilities arising from the User’s breach of these Terms or misuse of the Website.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">11. Amendments to These Terms</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              The Organisation reserves the right to amend or update these Terms at any time without prior notice. Continued use of the Website constitutes acceptance of the amended Terms.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">12. Governing Law</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              These Terms are governed by the laws of the Republic of South Africa. Any disputes arising from these Terms shall be resolved in accordance with South African law.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">13. Contact Information</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              For any queries regarding these Terms, Users may contact the Organisation using the details provided on the Website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
