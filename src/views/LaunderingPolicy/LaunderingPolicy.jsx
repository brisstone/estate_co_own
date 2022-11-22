import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppNav from "../../components/AppNav/AppNav";
import AppButton from "../../components/Button/AppButton";
import Cover from "../../components/Cover/Cover";
import AppFooter from "../../components/Footer/AppFooter";
import Support from "../../components/Support/Support";
import "./LaunderingPolicy.scss";

export default function LaunderingPolicy() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div className="app_bg_settings">
      <AppNav />
      <Cover
        title="Anti-Money Laundering Policy"
        content=" Frgavet a Proptech platform operating as Fragvestment LTD in Nigeria is SCUML Certified (Special Control Unit Against Money Laundering)"
        width="47rem"
      />
      <div className="laundering_wrapper app_norm_padding section">
        <div className="green_header">
          Special Control Unit Against Money Laundering (SCUML)
        </div>
        <div>
          <p className="normal_font">
            The establishment of SCUML in 2005 was as a commitment by Nigeria,
            through the Federal Government constituted Presidential Inter-Agency
            Committee, to the Financial Action Task Force (FATF). The objectives
            were to remedy identified inadequacies of AML/CFT legislation and
            institutional framework for implementation in Nigeria.
          </p>
          <p className="normal_font">
            Nigeria’s response, led to the passage of the Money Laundering
            (Prohibition) Act 2004, currently 2011 ML (P) Act, as amended, and
            legally included Designated Non-Financial Institutions (DNFIs) in
            the anti-money laundering/combatting the financing of terrorism
            (AML/CFT) regime.
          </p>
          <p className="normal_font">
            Nigeria being a cash-based economy, vested the supervisory
            responsibility on the Federal Ministry of Commerce and Industry (now
            Federal Ministry of Industry, Trade & Investment), which established
            the Special Control Unit against Money Laundering (SCUML).
          </p>
          <p className="normal_font">
            The statutory responsibility of SCUML ,as expressed in its vision,
            is ‘to be a world-class regulatory unit - one that becomes a
            benchmark in the supervision, monitoring and regulation of the
            Designated Non Financial Institutions (DNFI) as regards compliance
            to Nigeria’s Anti Money Laundering and Combating the Financing of
            Terrorism AML/CFT regime’.
          </p>
          <p className="normal_font">
            SCUML currently enforces the ML(P) A 2011,as amended, Terrorism
            Prevention Act 2013 and other pieces of legislation relevant to
            AML/CFT on: Law firms, notaries, and other independent legal
            practitioners; Accountants and Accounting firms; Trust and company
            services Providers; Estate surveyors and valuers; Business outfits
            dealing in Jewelleries; car dealers; dealers in luxury goods;
            chartered accountants; audit firms; tax consultants; clearing and
            settlement companies; Hotels; Casinos; Supermarkets; Dealers in
            precious stones and metals; Dealers in Real Estate Developers,
            Estate Agents and Brokers; Hospitality industry; Consultants and
            consulting companies; Importers and dealers in cars or any other
            automobiles; Dealers in mechanized farming equipment and
            machineries; Practitioners of mechanized farming; and
            Non-governmental organizations and any other business(es) as may be
            designated from time to time by the Federal Ministry of Trade and
            Investment.
          </p>
          <p className="normal_font">
            In SCUML’s efforts to serve as a structure for curtailing Money
            Laundering and Terrorist Financing in the DNFI sector and sanitizing
            the sector to create an enabling environment for promotion of
            commerce and investment, it ensures effective supervision of DNFI’s
            which includes amongst others, registration, inspection on a risk
            based-approach, ensuring rendition of statutory reports (cash-based
            transaction reports, currency transaction reports, suspicious
            transaction reports), training and manpower development.
          </p>
          <p className="normal_font">
            All efforts are aimed at adding value to investigations by providing
            data relating to DNFIs, which will facilitate an enabling
            environment for the promotion of investment in Nigeria. In this
            effort to sanitize the business environment, it collaborates with
            key stakeholders such as Self Regulatory Organisations (SROs), Non
            Profitable Organisations (NPOs), National Planning Commission (NPC),
            Corporate Affairs Commission (CAC) etc.
          </p>
          <p className="normal_font">
            SCUML works in collaboration with Economic and Financial Crimes
            Commission “EFCC” (the coordinating agency for Nigeria’s AML/CFT
            regime) and the Nigerian Financial Intelligence Unit “NFIU” (the
            national repository of financial disclosures of cash-based
            transaction reports, currency transaction reports and suspicious
            transaction reports).
          </p>

          <p className="green_header">LAST UPDATED: 10 APRIL, 2022</p>
        </div>
        <div>
          <AppButton
            className="laundry_btn app_btn_standard_link"
          >
            <a
              href="/SCUML_CERTIFICATE.pdf"
              style={{ color: "#ffffff" }}
              download
            >
              DOWNLOAD OUR SCUML CERTIFICATE
            </a>
          </AppButton>
        </div>
      </div>
      <Support />
      <AppFooter />
    </div>
  );
}
