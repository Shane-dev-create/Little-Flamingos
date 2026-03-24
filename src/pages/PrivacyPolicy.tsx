import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-sand-50 min-h-screen pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-sm border border-sand-100 p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 border-b border-sand-100 pb-8">
            <div className="bg-flamingo-100 p-3 rounded-2xl">
              <ShieldCheck className="h-8 w-8 text-flamingo-500" />
            </div>
            <h1 className="font-heading font-bold text-3xl md:text-4xl text-sand-900">
              Privacy Policy
            </h1>
          </div>

          <div className="prose prose-sand max-w-none">
            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">1. Purpose of This Policy</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              This Privacy Policy is issued in accordance with the Constitution of the Republic of South Africa, 1996, and the Protection of Personal Information Act, No. 4 of 2013 (“POPIA”). The purpose of this Policy is to set out the manner in which the Day Care (“the Organisation”) collects, processes, stores, and protects personal information obtained through its website.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">2. Definitions</h2>
            <p className="text-sand-800 mb-4 leading-relaxed">For the purposes of this Policy:</p>
            <ul className="list-disc pl-6 text-sand-800 mb-6 space-y-2">
              <li><strong>“Personal Information”</strong> refers to information as defined in POPIA, including but not limited to a natural person’s name, surname, email address, and telephone number.</li>
              <li><strong>“Processing”</strong> refers to any operation or activity concerning Personal Information, including collection, storage, use, dissemination, or destruction.</li>
              <li><strong>“Data Subject”</strong> refers to any individual whose Personal Information is collected by the Organisation.</li>
            </ul>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">3. Collection of Personal Information</h2>
            <p className="text-sand-800 mb-4 leading-relaxed">
              3.1 The Organisation collects Personal Information solely through the online enquiry form available on its website.<br />
              3.2 The Personal Information collected is limited to the following fields:
            </p>
            <ul className="list-disc pl-6 text-sand-800 mb-4 space-y-2">
              <li>Name and surname</li>
              <li>Email address</li>
              <li>Telephone number</li>
            </ul>
            <p className="text-sand-800 mb-6 leading-relaxed">
              3.3 No additional Personal Information is collected unless voluntarily provided by the Data Subject.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">4. Lawful Basis for Processing</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              4.1 The Organisation processes Personal Information strictly in accordance with POPIA and only for lawful, legitimate, and explicitly defined purposes.<br />
              4.2 Personal Information will not be processed in a manner incompatible with the purpose for which it was collected.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">5. Purpose of Processing</h2>
            <p className="text-sand-800 mb-4 leading-relaxed">
              5.1 Personal Information is processed exclusively for purposes directly related to the operation of the Day Care, including:
            </p>
            <ul className="list-disc pl-6 text-sand-800 mb-4 space-y-2">
              <li>Responding to enquiries submitted through the website</li>
              <li>Providing information regarding day‑care services, availability, and admissions</li>
              <li>Communicating with prospective parents or guardians regarding matters relevant to the Day Care</li>
            </ul>
            <p className="text-sand-800 mb-6 leading-relaxed">
              5.2 Personal Information will <strong>not</strong> be used for any purpose unrelated to the Day Care.<br />
              5.3 Personal Information will <strong>not</strong> be sold, distributed, or disclosed to third parties except where required by law or where necessary for the fulfilment of the stated purposes.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">6. Storage and Security of Personal Information</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              6.1 The Organisation implements reasonable technical and organisational measures to ensure the integrity and confidentiality of Personal Information in its possession.<br />
              6.2 Access to Personal Information is restricted to authorised personnel who require such access for legitimate operational purposes.<br />
              6.3 The Organisation undertakes to prevent unauthorised access, loss, damage, or unlawful processing of Personal Information.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">7. Retention of Personal Information</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              7.1 Personal Information will be retained only for as long as is necessary to achieve the purpose for which it was collected or as required by applicable law.<br />
              7.2 Once retention is no longer justified, Personal Information will be securely destroyed or de‑identified.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">8. Data Subject Rights</h2>
            <p className="text-sand-800 mb-4 leading-relaxed">
              In accordance with POPIA, Data Subjects have the right to:
            </p>
            <ul className="list-disc pl-6 text-sand-800 mb-4 space-y-2">
              <li>Request access to their Personal Information held by the Organisation</li>
              <li>Request correction, updating, or deletion of Personal Information where legally permissible</li>
              <li>Withdraw consent to the processing of Personal Information</li>
              <li>Lodge a complaint with the Information Regulator if they believe their rights have been infringed</li>
            </ul>
            <p className="text-sand-800 mb-6 leading-relaxed">
              Requests may be submitted directly to the Organisation using the contact details provided on the website.
            </p>

            <h2 className="text-xl font-bold text-sand-900 mt-8 mb-4">9. Amendments to This Policy</h2>
            <p className="text-sand-800 mb-6 leading-relaxed">
              The Organisation reserves the right to amend or update this Privacy Policy at any time. Any amendments will be published on the website and will take effect upon publication.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
