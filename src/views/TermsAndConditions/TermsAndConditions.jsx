import React, { useEffect } from "react";
import AppNav from "../../components/AppNav/AppNav";
import Cover from "../../components/Cover/Cover";
import AppFooter from "../../components/Footer/AppFooter";
import Support from "../../components/Support/Support";
import "./TermsAndConditions.scss";

export default function TermsAndConditions() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="app_bg_settings">
      <AppNav />
      <Cover
        title="Terms and Conditions"
        content="By using Fragvest Software you agree to our business Terms and Condition of operation."
        width="35rem"
      />
      <div className="section app_norm_padding">
        <div>
          <div className="green_header margin_top_default">
            FRAGVEST - TERMS OF SERVICE
          </div>
          <div>
            By using our Platform, you agree to these Terms of Use. Our Privacy
            Pliicy (where applicable) are incorporated by reference into these
            Terms of Use. <br /> This Terms of Use is an agreement between you
            and Fragvestment Limited (“Fragvest”, “we”, “us” or “our”). It
            details our obligations to you. It also highlights certain risks in
            using the services and you must consider such risks carefully as you
            will be bound by the provisions of this Agreement through your use
            of this website or any of our services.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">About Us</div>
          <div>
            Fragvestment Limited offers an online store where users can safely
            execute any real estate transaction instantly: buy or sell a
            verified property, rent a comfortable housing unit, lease a
            property, manage a property and invest any amount in the real estate
            industry through digital tokens. Our ultimate goal is to give users
            of our platform easy and unrestricted access to the real estate
            industry.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Our Services</div>
          <div>
            <ol>
              <li>
                The channels through which we offer our services include a web
                and mobile application made available through our website and/or
                other platforms (the “App” or “Application”), and other features
                or content which we offer now and/or may be offered in the
                future, in connection with the website, or the Application
                (clilectively referred to as the ("Services").
              </li>
              <li>
                Certain of the Services may be subject to additional terms and
                conditions specified by us from time to time; your use of such
                Services is subject to those additional terms and conditions,
                which are incorporated into these Terms of Service by this
                reference.
              </li>
              <li>
                These Terms of Service apply to all users of the Services,
                including, without limitation, users who are contributors of
                content, information, and other materials or services,
                registered or otherwise.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Who May Use Our Services ?
          </div>
          <div>
            You may use the Services only if you agree to form a binding
            contract with Fragvest and are not a person barred from receiving
            services under the laws of the applicable jurisdiction. If you are
            accepting these Terms and using the Services on behalf of a company,
            business, or organization, you represent and warrant that you are
            authorized to do so.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Eligibility</div>
          <div>
            By using the Services, you represent that:
            <ul>
              <li>You have attained the age of 18 years;</li>
              <li>
                You are of sound mind and have the capacity to enter into a
                legally binding contract;
              </li>
              <li>
                All personal information that you provide about yourself,
                property and related request are accurate and true to the best
                of your knowledge; and you have the responsibility to maintain
                the accuracy of the information at all times.
              </li>
              <li>
                You have carefully considered the risks invlived with using the
                Services; and
              </li>
              <li>
                Your use of the Services does not viliate any applicable law or
                regulation.
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="green_header margin_top_default">
            User Registration and Account Protection
          </div>
          <div className="blue_header margin_top_v2">Account Creation</div>
          <div>
            <p>
              While you can browse the site without creating a user account
              (“Account”), accessing and utilizing our Services requires you to
              have an Account. In creating an Account, you must provide us with
              accurate and complete registration information as prompted during
              the registration process, including your name, a valid email
              address which may functions as your username or you create a
              unique username for yourself and a password of your choice,
              subject to certain requirements. Each Account registration is for
              a single user only. You shall not misrepresent your identity or
              your affiliation with any person or organization and you are not
              allowed to use another user’s Account for any purpose whatsoever.
            </p>
            <p>
              You may access the profile associated with your Account
              (“Profile”) on the App when you are logged-in. When you access
              your Profile, you can edit certain information, including your
              email address and password, or any additional information relating
              to your Profile. You can also contact us directly at
              <a style={{ color: "#07C168" }} href="support@fragvest.com">
                {" "}
                support@fragvest.com{" "}
              </a>{" "}
              to edit your information. It is your responsibility to ensure your
              contact information and any Content provided by you are accurate
              and up to date.
            </p>
          </div>
          <div className="blue_header margin_top_v2">Account Protection</div>
          <div>
            You are responsible for maintaining the security and confidentiality
            of your username and password and may not share your Account
            information with third parties or allow third parties to use your
            Account. If you believe an unauthorized person has obtained your
            password or accessed your Account, you must notify us immediately
            via email at{" "}
            <a style={{ color: "#07C168" }} href="support@fragvest.com">
              {" "}
              support@fragvest.com{" "}
            </a>
            . We will not be liable for any loss that you may incur as a result
            of someone else using your password or Account, either with or
            without your knowledge or permission. However, you may be held
            liable for any losses we or another related party incur due to
            someone else using your Account.
          </div>
          <div className="blue_header margin_top_v2">Account Termination</div>
          <div>
            <p>
              If you wish to terminate your account, you may simply discontinue
              the use of our Services by ceasing to use the Services and
              deleting all copies of the App from your devices. Upon
              termination, your right to use the Services will immediately
              cease.
            </p>
            <p>
              We may terminate or suspend access to the Site and/or the App
              immediately, without prior notice or liability to you, for any
              reason whatsoever, including without limitation if you breach
              these Terms or any of the other agreements we may have.
            </p>
            <p>
              We also reserve the right to terminate your account if we
              reasonably suspect that your account is being used for fraudulent
              transactions. This shall be without prejudice to our rights to
              make a report to law enforcement.
            </p>
            <p>
              Consequently, you will not receive any further communications from
              us unless and until you create a new Account or you otherwise
              request that we provide communications to you.
            </p>
            <p>
              All provisions of the Terms which by their nature should survive
              termination shall survive termination, including, without
              limitation, ownership provisions, warranty disclaimers, indemnity
              and limitations of liability
            </p>
          </div>
        </div>
        <div className="section">
          <div className="green_header margin_top_default">Authorization</div>
          <div>
            In connection with your use of our Services, you authorize us to act
            as your agent for the limited purposes of facilitating transactions
            including property rental services, Sales and purchase of property
            and investments in real properties on your behalf. Your
            authorizations will remain in full force and effect until your
            Fragvest Account is closed or terminated.
          </div>
          <div className="blue_header margin_top_v2">
            Authorization Disputes
          </div>
          <div>
            <p>
              If you believe that an unauthorized or otherwise problematic
              transaction has taken place, you agree to notify us immediately,
              to enable us take action to help prevent financial loss.
            </p>
            <p>
              All claims against us related to payments should be made within 30
              (thirty) days after the date of such payment. It will be taken
              that you waive all claims against us, to the fullest extent of the
              law after the said period of time
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Content</div>
          <div>
            <ul>
              <li>
                For purposes of these Terms of Service, the term “Content”
                includes, without limitation, information, data, text,
                photographs, videos, audio clips, written posts and comments,
                software, scripts, graphics, and interactive features generated,
                provided, or otherwise made accessible on or through the
                Services. For the purposes of this Agreement, “Content” also
                includes all Content accessed, created and/or posted by any
                User.
              </li>
              <li>
                You acknowledge that all Content accessed by you using the
                Services is at your own risk and you will be solely responsible
                for any damage or loss to you or any other party resulting
                therefrom. We do not guarantee that any Content you access on or
                through the Services is or will continue to be accurate.
              </li>
              <li>
                Notices and Restrictions: The Services may contain Content
                specifically provided by us, our partners or our registered
                users and such Content is protected by copyrights, trademarks,
                service marks, patents, trade secrets or other proprietary
                rights and laws. You shall abide by and maintain all copyright
                notices, information, and restrictions contained in any Content
                accessed through the Services.
              </li>
              <li>
                Use License. Subject to these Terms of Service, we grant each
                user of the Services a worldwide, non-exclusive, non-sub
                licensable and non-transferable license to use (i.e., to
                download and display locally) Content solely for purposes of
                using the Services. Use, reproduction, modification,
                distribution or storage of any Content for other than purposes
                of using the Services is expressly prohibited without prior
                written permission from us. You shall not sell, license, rent,
                or otherwise use or exploit any Content for commercial use or in
                any way that violates any third party right. You may use the
                Services solely for the purposes authorized and/or to learn
                about Fragvest’s products and services, and solely in compliance
                with these Terms; provided that you do not remove any
                proprietary notice language in our Content or part thereof, do
                not copy or post such Content or part of Content to any
                networked computer or broadcast it in any media, make no
                modifications to any such Content or part of Content and not
                make any additional representations or warranties relating to
                the Services or/and Fragvest’s products or/and services.
              </li>
              <li>
                Availability of Content: We do not guarantee that any Content
                will be made available on the Site or through the Services. We
                reserve the right to, but do not have any obligation to, (i)
                remove, edit or modify any Content in our sole discretion, at
                any time, without notice to you and for any reason (including,
                but not limited to, upon receipt of claims or allegations from
                third parties or authorities relating to such Content or if we
                are concerned that you may have violated these Terms of
                Service), or for no reason at all and (ii) to remove or block
                any Content from the Services
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Prohibited Use of The Services
          </div>
          <div>
            By using the Services, you agree that you will not:
            <ul>
              <li>use any of the Services in violation of these Terms;</li>
              <li>
                copy, modify, create a derivative work from, reverse engineer or
                reverse assemble the website, the App function, or otherwise
                attempt to discover any source code, or allow any third party to
                do so;
              </li>
              <li>
                use, display, mirror or frame the Content, or any individual
                element within the Fragvest Site or App, Fragvest’s name, any
                trademark, logo or other proprietary information belonging to
                Fragvest, or the layout and design of any page or form contained
                on a page in the Site or App, without Fragvest’s express written
                consent;
              </li>
              <li>
                dilute, tarnish or otherwise harm Fragvest’s brand in any way,
                including through unauthorized use of our Content, registering
                and/or using the “Fragvest” name or derivative terms in domain
                names, trade names, trademarks or other source identifiers, or
                registering and/or using domains names, trade names, trademarks
                or other source identifiers that closely imitate or are
                confusingly similar to Fragvest’s domains, trademarks, taglines,
                promotional campaigns or Content;
              </li>
              <li>
                Sell, assign, sublicense, distribute, commercially exploit,
                grant a security interest in or otherwise transfer any right in,
                or make available to a third party, the Services or any part
                thereof;
              </li>
              <li>
                Use any page-scrapes, "robots," "spiders," or other automatic
                device, program, algorithm or methodology, or any similar or
                equivalent manual process, to access, copy or monitor any
                portion of the Site or the Application.
              </li>
              <li>
                Use the Services in any manner that damages, disables,
                overburdens, or impairs the Services or interferes with any
                other party's use and enjoyment of any of the Services;
              </li>
              <li> Utilize the Services for any illegal purpose;</li>
              <li>
                Attempt to gain unauthorized access to any of the Services;
              </li>
              <li>
                Probe, scan or test the vulnerability of the Site or App or any
                network connected to the Site or App, or breach the security or
                authentication measures on the Site or App or any network
                connected to the Site or App;
              </li>
              <li>
                Take any action that imposes an unreasonable or
                disproportionately large load on the infrastructure of the Site
                or App or any systems or networks connected to the Site or App;
              </li>
              <li>
                Use any device, software or routine to interfere or attempt to
                interfere with the proper working of any of the Services.
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="green_header margin_top_default">
            Third-Party Services
          </div>
          <div>
            <p>
              We may display, include or make available third-party content
              (including data, information, applications and other products
              services) or provide links to third-party websites or services
              ("Third- Party Services"). Third-Party Services and links thereto
              are provided solely as a convenience to you and you access and use
              them entirely at your own risk and subject to such third parties'
              terms and conditions.
            </p>
            <p>
              You acknowledge and agree that Fragvest shall not be responsible
              for any Third-Party Services, including their accuracy,
              completeness, timeliness, validity, copyright compliance,
              legality, decency, quality or any other aspect thereof. Fragvest
              does not assume and shall not have any liability or responsibility
              to you or any other person or entity for any ThirdParty Services.
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">
            Payments & Billing
          </div>
          <div>
            <ul>
              <li>
                We may display, include or make available third-party content
                (including data, information, applications and other products
                services) or provide links to third-party websites or services
                ("Third- Party Services"). Third-Party Services and links
                thereto are provided solely as a convenience to you and you
                access and use them entirely at your own risk and subject to
                such third parties' terms and conditions.
              </li>
              <li>
                Paid Services: Certain of our Services may be subject to
                payments now or in the future (the “Paid Services”). Please note
                that any payment terms presented to you in the process of using
                or signing up for a Paid Service are deemed part of this
                Agreement.
              </li>
              <li>
                Billing. We use the Payment Processor to bill you through a
                payment account, such as a bank account or debit or credit card,
                linked to your Account on the Services (your “Billing Account”)
                for use of the Paid Services. The processing of payments will be
                subject to the terms, conditions and privacy policies of the
                Payment Processor in addition to this Agreement. We are not
                responsible for error by the Payment Processor. By choosing to
                use Paid Services, you agree to pay us, through the Payment
                Processor, all charges at the prices then in effect for any use
                of such Paid Services in accordance with the applicable payment
                terms and you authorize us, through the Payment Processor, to
                charge your chosen payment provider (your “Payment Method”). You
                agree to make payment using that selected Payment Method. We
                reserve the right to correct any errors or mistakes that it
                makes even if it has already requested or received payment.
              </li>
              <li>
                Payment Method: The terms of your payment will be based on your
                Payment Method and may be determined by agreements between you
                and the financial institution, credit card issuer or other
                provider of your chosen Payment Method. If we, through the
                Payment Processor, do not receive payment from you, you agree to
                pay all amounts due on your Billing Account upon demand.
              </li>
              <li>
                Recurring Billing: Some of the Paid Services may consist of an
                initial period, for which there is a one-time charge, followed
                by recurring period charges as agreed to by you. By choosing a
                recurring payment plan, you acknowledge that such Services have
                an initial and recurring payment feature and you accept
                responsibility for all recurring charges prior to cancellation.
                We may submit periodic charges (e.g., monthly) without further
                authorization from you, until you provide prior notice (receipt
                of which is confirmed by us) that you have terminated this
                authorization or wish to change your payment method. Such notice
                will not affect charges submitted before we reasonably could
                act.
              </li>
              <li>
                Current Information Required: You must provide current, complete
                and accurate information for your billing account. You must
                promptly update all information to keep your billing account
                current, complete and accurate (such as a change in billing
                address, credit card number, or credit card expiration date),
                and you must promptly notify us or our payment processor if your
                payment method is canceled (e.g., for loss or theft) or if you
                become aware of a potential breach of security, such as the
                unauthorized disclosure or use of your user name or password.
                Changes to such information can be via{" "}
                <a style={{ color: "#07C168" }} href="support@fragvest.com">
                  {" "}
                  support@fragvest.com{" "}
                </a>{" "}
                If you fail to provide any of the foregoing information, you
                agree that we may continue charging you for any use of paid
                services under your billing account unless you have terminated
                your paid services as set forth above.
              </li>
              <li>
                Change in Amount Authorized: If the amount to be charged to your
                Billing Account varies from the amount you preauthorized (other
                than due to the imposition or change in the amount of state
                sales taxes), you have the right to receive, and we shall
                provide, notice of the amount to be charged and the date of the
                charge before the scheduled date of the transaction. Any
                agreement you have with your payment provider will govern your
                use of your Payment Method. You agree that we may accumulate
                charges incurred and submit them as one or more aggregate
                charges during or at the end of each billing cycle.
              </li>
              <li>
                Auto-Renewal for Subscription Service: Unless you opt out of
                auto-renewal, which can be done via emailing
                <a style={{ color: "#07C168" }} href="support@fragvest.com">
                  {" "}
                  support@fragvest.com{" "}
                </a>{" "}
                any Subscription Services you have signed up for will be
                automatically extended for successive renewal periods of the
                same duration as the subscription term originally selected, at
                the then-current nonpromotional rate. If you terminate a
                Subscription Service, you may use your subscription until the
                end of your then-current term; your subscription will not be
                renewed after your then-current term expires. However, you won't
                be eligible for a prorated refund of any portion of the
                subscription fee paid for the then-current subscription period.
              </li>
              <li>
                Reaffirmation of Authorization: Your non-termination or
                continued use of a Paid Service reaffirms that we are authorized
                to charge your Payment Method for that Paid Service. We may
                submit those charges for payment and you will be responsible for
                such charges. This does not waive our right to seek payment
                directly from you. Your charges may be payable in advance, in
                arrears, per usage, or as otherwise described when you initially
                selected to use the Paid Service.
              </li>
              <li>
                Free Trials and Other Promotions. Any free trial or other
                promotion that provides access to a Paid Service must be used
                within the specified time of the trial. You must stop using a
                Paid Service before the end of the trial period in order to
                avoid being charged for that Paid Service. If you cancel prior
                to the end of the trial period and are inadvertently charged for
                a Paid Service, please contact us at{" "}
                <a style={{ color: "#07C168" }} href="support@fragvest.com">
                  {" "}
                  support@fragvest.com{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="section">
          <div className="green_header margin_top_default">
            DIsclaimer & Limitations Of Liability
          </div>
          <div>
            <p>
              To the maximum extent permitted by applicable law, Fragvest
              disclaims any and all representations, warranties and conditions
              relating to the Services and the use of the Services (including,
              without limitation, any warranties implied by law in respect of
              satisfactory quality, fitness for purpose and/or the use of
              reasonable care and skill).
            </p>
            <p>
              FRAGVEST MAKES NO REPRESENTATIONS ABOUT THE SUITABILITY,
              RELIABILITY, AVAILABILITY, TIMELINESS, SECURITY OR ACCURACY OF THE
              SITE OR APP AND THEIR CONTENT FOR ANY PURPOSE. THE SITE, APP AND
              THEIR CONTENT ARE DELIVERED ON AN "AS-IS" AND "AS-AVAILABLE"
              BASIS. THE CONTENT MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL
              ERRORS OR OTHER ERRORS OR INACCURACIES AND MAY NOT BE COMPLETE OR
              CURRENT.
            </p>
            <p>
              IN NO EVENT SHALL FRAGVEST BE LIABLE OR RESPONSIBLE FOR ANY
              DIRECT, INDIRECT, INCIDENTAL, CONSEQUENTIAL, SPECIAL OR EXEMPLARY
              DAMAGES OF ANY KIND, INCLUDING WITHOUT LIMITATION, LOST PROFITS OR
              LOST OPPORTUNITIES, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH
              DAMAGES IN ADVANCE AND REGARDLESS OF THE CAUSE OF ACTION UPON
              WHICH ANY SUCH CLAIM IS BASED.
            </p>
            <p>
              YOUR SOLE REMEDY AGAINST Fragvest FOR DISSATISFACTION WITH THE
              SERVICES IS TO STOP USING ANY OR ALL OF THE AFFECTED SERVICES
            </p>
            <p>
              Without prejudice to the foregoing provisions, your use of our
              site and services is at your own risk. You agree that Fragvest
              will no way be liable for (a) any direct, indirect, special,
              incidental punitive, consequential, punitive, special or exemplary
              damages or (b) any damages whatsoever in excess of the amount of
              the transaction or (including, without limitation, those damages
              resulting from revenue loss of revenues, lost profits, profit loss
              of, use, data, goodwill, loss of use , business interruption, or
              any other intangible losses), (whether Fragvest has been advised
              of the possibility of such damages or not) arising out of or in
              connection with Fragvest’s website or services (including, without
              limitation, use, to inability to use, or arising from the results
              of use of Fragvest’s website or services) whether such damages are
              based on warranty, tort, contract, tort, statute, or any other
              legal theory.
            </p>
            <p>
              The above disclaimer applies to any damages, liability or injuries
              caused by any failure of performance, error, omission,
              interruption, deletion, defect, delay in operation or
              transmission, computer virus, communication line failure, theft or
              destruction of or unauthorized access to, alteration of, or use,
              whether for breach of contract, tort, negligence or any other
              cause of action.
            </p>
            <p>
              Some jurisdictions do not allow the exclusion of or limitations on
              implied warranties or the limitations on the applicable statutory
              rights of a consumer, so some or all of the above exclusions and
              limitations may not apply to you.
            </p>
          </div>
        </div>
        <div className="section">
          <div className="green_header margin_top_default">
            Updates, Modifications & Amendments
          </div>
          <div>
            <p>
              We may need to update, modify or amend our Terms of Use as our
              technology evolves. We reserve the right to make changes to this
              Terms of Use at any time by giving notice to users on this page.
            </p>
            <p>
              We advise that you check this page often, referring to the date of
              the last modification on the page If a user objects to any of the
              changes to the Terms of Use, the User must cease using our website
              and/or services immediately
            </p>
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Indemnification</div>
          <div>
            You agree to indemnify, defend and hold harmless Fragvest, its
            affiliated companies, employees, agents, and any third-party
            information providers from and against all claims, losses, expenses,
            damages and costs (including, but not limited to, direct,
            incidental, consequential, exemplary and indirect damages), and
            reasonable attorneys' fees, resulting from or arising out of your
            use, misuse, or inability to use the Services, or any violation by
            you of these Terms.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Applicable LAW</div>
          <div>
            These Terms of Use shall be interpreted and governed by the laws
            currently in force in the Federal Republic of Nigeria.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Legal Disputes</div>
          <div>
            We shall make an effort to settle all disputes amicably. Any dispute
            arising out of this Terms of Use, which cannot be settled, by mutual
            agreement/negotiation within 1 (one) month shall be referred to
            arbitration and governed by the Arbitration and Conciliation Act,
            Cap A10, Laws of the Federal Republic of Nigeria. The arbitrator
            shall be appointed by both of us (we and you). The findings of the
            arbitrator and subsequent award shall be binding on both of us. Each
            of us shall bear our respective costs in connection with the
            Arbitration.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Severability</div>
          <div>
            If any portion of these Terms of Use is held by any court or
            tribunal to be invalid or unenforceable, either in whole or in part,
            then that part shall be severed from these Terms of Use and shall
            not affect the validity or enforceability of any other part in this
            Terms of Use.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Assignment</div>
          <div>
            This agreement is a personal agreement between Fragvest and you. As
            a result, you are not allowed to assign your rights under this
            agreement to a third party. On the other hand, we can and will only
            transfer any of your and our rights or obligations under the
            agreement if we reasonably think that this won't have a significant
            negative effect on your rights under these Terms or if we need to do
            so to keep to any legal or regulatory requirement.{" "}
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Waiver</div>
          <div>
            Our failure or delay in enforcing any of our rights under these
            terms, if you have break the agreement does not amount to a waiver
            and will not prevent us from enforcing those or any other rights at
            a later date within the period stipulated by applicable law.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Privacy Policy</div>
          <div>
            You agree to Fragvest’s Privacy Policy, which explains how we
            collect, use and protect the personal information you provide to us.
          </div>
        </div>
        <div>
          <div className="green_header margin_top_default">Contact Us</div>
          <div>
            If you have any questions about these Terms, please contact us at
            <a style={{ color: "#07C168" }} href="support@fragvest.com">
              {" "}
              support@fragvest.com{" "}
            </a>
          </div>
        </div>
      </div>
      <Support />

      <AppFooter />
    </div>
  );
}
