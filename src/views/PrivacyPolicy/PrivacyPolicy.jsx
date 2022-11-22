import React, { useEffect } from "react";
import AppNav from "../../components/AppNav/AppNav";
import Cover from "../../components/Cover/Cover";
import AppFooter from "../../components/Footer/AppFooter";
import Support from "../../components/Support/Support";
import "./PrivacyPolicy.scss";

export default function PrivacyPolicy() {
      useEffect(() => {
        window.scroll(0, 0);
      }, []);
  return (
    <div className="app_bg_settings">
      <AppNav />
      <Cover
        title="Privacy Policy"
        content="By Using Fragvest Software you agree to our privacy and data management policy."
        width="35rem"
      />
      <div className="section app_norm_padding">
        <div>
          <div className="green_header">Introduction</div>
          <div className="normal_font">
            <p>
              <b>Fragvestment Limited</b> (“Fragvest”, “we” “our” “us”) values
              your privacy and the security of the information you share with
              us. This Privacy Policy sets out how we deal with Your personal
              data and how we also seek to protect Your personal data. In this
              Policy, the data that shall be referred to shall be personal data
              that relates to an identified or identifiable natural person being
              the User our website, mobile application, products, or services
              (our “Platform”), As a matter of fact, this Policy shall provide a
              detailed description on how and why Your personal data has been
              processed, on Your rights as data subject and also on which legal
              basis We base Ourselves to process certain personal data, the
              purpose of the said processing, the choices available to You
              regarding Our use of Your personal information and how You can
              access and update this information. Kindly be informed that we
              will treat your personal data in strict confidence and in
              accordance with the requirements of the provisions of the relevant
              Data Protection Regulations on the protection of natural persons
              with regard to the processing of personal data.
            </p>
            <p>
              By using our Platform, you consent to the terms and practices
              contained in this Privacy Policy and you grant us the right to
              collect and process your data in accordance with the terms of this
              Policy. Our Platform are not directed to children under 18. We do
              not knowingly collect information from children under 18. If as a
              parent or guardian, you become aware that your child or ward child
              has provided us with any information without your consent, please
              contact us through the details provided in this Privacy Policy.
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            The Information We Collect
          </div>
          <div className="normal_font">
            When you use our website or service, we may collect certain types of
            information about you including the following:
          </div>
        </div>
        <div>
          <div className="blue_header margin_top_v2">
            Information you provide to us
          </div>
          <div className="normal_font">
            This includes but is not limited to your personal data (such as your
            full name, phone number(s), email address, home or office addresses,
            product and service preferences,including uploads of properties, and
            title documents) (for purposes of multi-factor authentication and to
            provide you with our services and share important messages) and any
            relevant information you choose to provide us
          </div>
        </div>
        <div>
          <div className="blue_header margin_top_v2">
            Information we collect automatically
          </div>
          <div className="normal_font">
            This includes but is not limited to your IP address, browser type,
            mobile device ID, device type, operating system version, connection
            information, mobile network information, location derived from
            GPS-enabled services, information based on your usage of the service
            such as time, date and duration of your use, referral URLs, search
            terms and search history, camera, contact list, browsing history,
            purchase history and advertisement interactions.
          </div>
        </div>
        <div>
          <div className="blue_header margin_top_v2">
            Information we obtain from 3rd Parties
          </div>
          <div className="normal_font">
            <p>
              We may retrieve additional personal information about you from
              third parties and other identification/verification services such
              as your financial institution and payment processor. With your
              consent, we may also collect additional Personal Information in
              other ways including emails, surveys, and other forms of
              communication. Once you begin using our Platform, we will keep
              records of service offering and collect information of your other
              activities related to our services. We will not share or disclose
              your Personal Information with a third party without your consent
              except as may be required for the purpose of providing you with
              our services or under applicable legislation.
            </p>
            <p>
              In providing you with the services, we may rely on third-party
              servers located in foreign jurisdictions from time to time, which
              as a result, may require the transfer or maintenance of your
              personally identifiable information on computers or servers in
              foreign jurisdictions. We will endeavor to ensure that such
              foreign jurisdictions have data protection legislation that is no
              less than the existing data protection regulations in force in
              Nigeria and your personally identifiable information is treated in
              a safe and secure manner
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Why We Collect Your Information
          </div>
          <div className="normal_font">
            We collect your information to ensure your easy and seamless access
            to our services. We use the information we collect for the following
            purposes:
            <ul>
              <li>
                To enable us to provide you with a personalized experience of
                our product and services.
              </li>
              <li>
                To communicate with you and provide you with information on our
                Services, such marketing content, newsletters and service
                update. However, we will provide you with an option to
                unsubscribe if you do not want to hear from us.
              </li>
              <li>To provide support services to you.</li>
              <li>To process your requests.</li>
              <li>
                To analyze and understand your use of our products and services.
              </li>
              <li>
                To protect against illegal, malicious, and fraudulent activity.
              </li>
              <li>
                To analyze and improve the quality of our services and
                offerings.
              </li>
              <li>
                To facilitate your interactions with our social media platforms.
              </li>
              <li>
                To analyze and learn about our users’ demographics, interests,
                and behavior.
              </li>
              <li>To identify and repair errors and bugs on our platforms.</li>
              <li>
                To facilitate dissemination of information about our services
                and our partners.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Sharing Your Information With Third Parties
          </div>
          <div className="normal_font">
            We may sometimes share the information we have collected from you
            with third parties. These third parties include our affiliates,
            subsidiaries, partners, third-party vendors and suppliers who render
            services for us or on our behalf and our professional advisers (such
            as our auditors, accountants, lawyers, etc.). We may share the
            information to facilitate the seamless delivery of our services or
            in compliance with applicable legal requirements and assisting law
            enforcement agencies by responding to requests for the disclosure of
            information in accordance with local laws
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Cookies</div>
          <div className="normal_font">
            <p>
              We use cookies to identify you as a User and make your user
              experience easier, customize our services, content and
              advertising; help you ensure that your account security is not
              compromised, mitigate risk and prevent fraud; and to promote trust
              and safety on our website. Cookies allow our servers to remember
              IP addresses, date and time of visits, monitor web traffic and
              prevent fraudulent activities.
            </p>
            <p>
              Our cookies never store personal or sensitive information; they
              simply hold a unique random reference to you so that once you
              visit the site we can recognize who you are and provide certain
              content to you.
            </p>
            <p>
              If your browser or browser add-on permits, you have the choice to
              disable cookies on our website, however this may impact your
              experience using our website.
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Governing Principles Of Data Processing
          </div>
          <div className="normal_font">
            We process your information in accordance with the provisions of the
            Nigeria Data Protection Regulation and these principles:
            <ul>
              <li>
                Your personal data is collected and processed in accordance with
                specific, legitimate and lawful purpose consented to by you,
                provided that further processing may be done by archiving the
                data for public interest, scientific or research purposes, or
                statistical purposes.
              </li>
              <li>
                The data collected is adequate, accurate and without prejudice
                to the dignity of the human person.
              </li>
              <li>
                The data collected is stored only for the period within which it
                is reasonably needed.
              </li>
              <li>
                The data collected is secured against all foreseeable hazards
                and breaches such as theft, cyberattack, viral attack,
                dissemination, manipulations of any kind, damage by rain, fire
                or exposure to other natural elements.
              </li>
              <li>
                We owe a duty of care to you in respect of the data we have
                obtained from you.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            How We Safeguard Your Information
          </div>
          <div className="normal_font">
            <p>
              We use reasonable efforts to safeguard the confidentiality of all
              personal data that we process relating to You and regularly review
              and enhance our technical, physical and managerial procedures so
              as to ensure that Your personal data is protected from
              unauthorized access, improper use or disclosure, unauthorized
              modification, and unlawful destruction or accidental loss.
            </p>
            <p>
              In this respect, kindly be informed that We have implemented
              security policies, rules as well as technical measures to protect
              the personal data that We have under Our control. All Our
              employees and data processors, who have access to and are
              associated with the processing of personal data, are further
              obliged to respect the confidentiality of Our visitors’ personal
              data.
            </p>
            <p>
              When You enter sensitive information (such as credit card, bank
              account or proprietary business information) on Our order forms,
              We encrypt the transmission of that information using secure
              socket layer technology (SSL) as a security measure.
            </p>
            <p>
              In addition to the security measures we employ, you must also
              ensure that you take responsibility for the protection of your
              personal information. We will not be liable for any loss or damage
              caused by the activities of hackers and fraudsters when we have
              taken all necessary and reasonable steps to protect your
              information in our possession. You are fully responsible for
              safeguarding your username, password, and financial information.
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Links To Third Party Websites
          </div>
          <div className="normal_font">
            Our website, products and services may contain links to other
            websites not subject to this Privacy Policy. When you access those
            websites, they may collect your personal information in accordance
            with their privacy and data collection policies. We are not
            responsible for the data collected by these third parties and you
            are advised to study their privacy policies before you make use of
            their services.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Your Privacy Rights
          </div>
          <div className="normal_font">
            By providing us with your personal information, you have certain
            rights in accordance with the provisions of the Nigeria Data
            Protection Regulation which includes;
            <ul>
              <li>
                the right to request for your personal data in our possession,
              </li>
              <li>
                the right to object to the processing of your personal data,
              </li>
              <li>
                the right to request rectification and modification of Personal
                Information which Fragvest keeps; and
              </li>
              <li>
                the right to request for the deletion of your personal data in
                our possession. To exercise any of the rights listed here,
                please contact us through the details provided below.
              </li>
            </ul>
            <p>
              All such requests will be reviewed and considered in accordance
              with the provisions of the applicable data protection regulations.
            </p>
            <p>
              You also have the right to opt-out of receiving the informative
              materials we send to our users by clicking the “Unsubscribe”
              button found at the bottom of such emails. You also have the right
              to decline to provide your personal Information when it is
              requested, however, certain services or all the services may be
              unavailable to you.
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            International Transfer Of Your Information
          </div>
          <div className="normal_font">
            We may need to transfer your information in our possession to third
            parties outside Nigeria. Such transfers will only be done in
            accordance with the applicable data protection regulations. While
            undertaking the international transfer of your information, we will
            put security measures in place to reasonably protect your data
            during transmission. We shall, among other things, confirm whether
            the country is on the National Information Technology Development
            Agency (“NITDA”) White List of Countries with adequate data
            protection laws.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Data Retention Period
          </div>
          <div className="normal_font">
            <p>
              We will retain your information for as long as your account is
              active or as needed to provide our services to you, comply with
              our legal and statutory obligations or verify your information
              with a financial institution.
            </p>
            <p>
              Fragvest is statutorily obligated to retain the data you provide
              us with in order to process transactions, ensure settlements, make
              refunds, identify fraud and in compliance with laws and regulatory
              guidelines applicable to us, our banking providers and card
              processors.
            </p>
            <p>
              Therefore, even after closing your Fragvest account, we will
              retain certain Personal Information and transaction data to comply
              with these obligations. All Personal Information shall be
              destroyed by Fragvest where possible. For all Personal Data and
              records obtained, used and stored by Fragvest, we shall perform
              periodical reviews of the data retained to confirm the accuracy,
              purpose, validity and requirement to retain
            </p>
            <p>
              The length of storage of Personal Information shall, amongst other
              things, be determined by:
            </p>
            <ul>
              <li>
                the contract terms agreed between Fragvest and the Data Subject
                or as long as it is needed for the purpose for which it was
                obtained; or
              </li>
              <li>
                whether the transaction or relationship has statutory
                implication or a required retention period; or
              </li>
              <li>
                whether there is an express request for deletion of Personal
                Data by the Data Subject, provided that such request will only
                be treated where the Data Subject is not under any investigation
                which may require Fragvest to retain such Personal Data or there
                is no subsisting contractual arrangement with the Data Subject
                that would require the processing of the Personal Data; or
              </li>
              <li>
                whether Fragvest has another lawful basis for retaining that
                information beyond the period for which it is necessary to serve
                the original purpose.
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Contact Details</div>
          <div className="normal_font">
            <p>
              If you have any question, request or complaints, or you require
              further information not already provided in this Privacy Policy,
              please contact us by sending an email to support@fragvest.com
            </p>
            <p>
              We maintain a data breach procedure in order to deal with
              incidents concerning Personal Information or practices leading to
              the accidental or unlawful destruction, loss, alteration,
              unauthorized disclosure of, or access to, Personal Information
              transmitted, stored or otherwise processed. You may contact our
              Data Protection Officer (“DPO”) upon becoming aware of any breach
              of Personal Information or if your access credentials have been
              compromised, to enable us to take the necessary steps towards
              ensuring the security of your Personal Information or account.
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Updates To This Policy
          </div>
          <div className="normal_font">
            We reserve the right to periodically update and modify the terms of
            our Privacy Policy without notice. Changes to this Privacy Policy
            will take effect on the last updated date.
          </div>
        </div>
        <div className="green_text margin_top_default">
          Last updated March 2022.
        </div>
      </div>{" "}
      <Support />
      <AppFooter />
    </div>
  );
}
