import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./privacy.css";

const Privacy = (props) => {
  return (
    <div className="page">
      <Nav></Nav>
      <section className="text__main">
        <h2>Privacy Policy</h2>
        <div className="text__main--section">
          <p>
            This privacy policy applies to information collected online from
            users of this website. In this policy, you can learn what kind of
            information we collect, when and how we might use that information,
            how we protect the information, and the choices you have with
            respect to your personal information.
          </p>
        </div>
        <div className="text__main--section">
          <h3>
            What personal information is collected through this website and how
            is it used?
          </h3>
          <p>
            We collect information about our users in three ways: directly from
            the user, from our Web server logs and through cookies. We use the
            information primarily to provide you with a personalized Internet
            experience that delivers the information, resources, and services
            that are most relevant and helpful to you. We don’t share any of the
            information you provide with others, unless we say so in this
            Privacy Policy, or when we believe in good faith that the law
            requires it.
          </p>
        </div>
        <div className="text__main--section">
          <h3>User-supplied information</h3>
          <p>
            If you fill out the “contact” form on this website, we will ask you
            to provide some personal information (such as e-mail address, name,
            phone number and state). We only require that you provide an e-mail
            address on the contact form. Further, if chat is available through
            this site, you may be asked to provide information if you
            participate in an online chat. Please do not submit any
            confidential, proprietary or sensitive personally identifiable
            information (e.g. Social Security Number; date of birth; drivers
            license number; or credit card, bank account or other financial
            information) (collectively, “Sensitive Information”). If you submit
            any Sensitive Information, you do so at your own risk and we will
            not be liable to you or responsible for consequences of your
            submission.
          </p>
          <p>
            Information that you provide to us through the contact form or an
            online chat will be used so that we may respond to your inquiry. We
            may also use information you provide to us to communicate with you
            in the future. If you do not wish to receive such communications,
            you may opt out (unsubscribe) as described below.
          </p>
        </div>
        <div className="text__main--section">
          <h3>Web server logs</h3>
          <p>
            When you visit our website, we may track information about your
            visit and store that information in web server logs, which are
            records of the activities on our sites. The servers automatically
            capture and save the information electronically. Examples of the
            information we may collect include:
          </p>
          <ul>
            <li>your unique Internet protocol address;</li>
            <li>the name of your unique Internet service provider;</li>
            <li>
              the town/city, county/state and country from which you access our
              website;
            </li>
            <li>the kind of browser or computer you use;</li>
            <li>the number of links you click within the site;</li>
            <li>the date and time of your visit;</li>
            <li>the web page from which you arrived to our site;</li>
            <li>the pages you viewed on the site; and</li>
            <li>
              certain searches/queries that you conducted via our website(s).
            </li>
          </ul>
          <p>
            The information we collect in web server logs helps us administer
            the site, analyze its usage, protect the website and its content
            from inappropriate use and improve the user’s experience.
          </p>
        </div>
        <div className="text__main--section">
          <h3>Cookies</h3>
          <p>
            In order to offer and provide a customized and personal service, our
            websites and applications may use cookies and similar technologies
            to store and help track information about you. Cookies are simply
            small pieces of data that are sent to your browser from a Web server
            and stored on your computer’s hard drive. We use cookies to help
            remind us who you are and to help you navigate our sites during your
            visits. Cookies also can tell us where visitors go on a website and
            allow us to save preferences for you so you won’t have to re-enter
            them each time you visit. The use of cookies is relatively standard.
            Most Internet browsers are initially set up to accept cookies, but
            you can use your browser to either notify you when you receive a
            cookie or to disable cookies.
          </p>
          <p>
            If you wish to disable cookies from this site, you can do so using
            your browser. You should understand that some features of many sites
            may not function properly if you don’t accept cookies. For more
            information about using browsers to manage cookies, please see{" "}
            <a
              className="text__link"
              href="https://allaboutcookies.org/how-to-manage-cookies"
              target="_blank"
            >
              All About Cookies
            </a>
            . You can also refuse to accept Flash cookies from this website
            using{" "}
            <a
              className="text__link"
              href="https://www.adobe.com/devnet-docs/acrobatetk/index.html"
              target="_blank"
            >
              Adobe’s Flash management tools
            </a>
            . You can opt out of Google’s use of cookies by visiting{" "}
            <a
              className="text__link"
              href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings"
              target="_blank"
            >
              Google’s Ad Settings
            </a>
            .
          </p>
          <p>
            By visiting this website, you consent to the use of cookies and
            similar technologies in accordance with this Privacy Statement.
          </p>
        </div>
        <div className="text__main--section">
          <h3>Third-party Services</h3>
          <p>
            We may use services hosted by third parties, including Adobe Site
            Catalyst, to assist in providing our services and to help us
            understand the use of our site by our visitors. These services may
            collect information sent by your browser as part of a web page
            request, including your IP address or cookies. If these third-party
            services collect information, they do so anonymously and in the
            aggregate to provide information helpful to us such as website
            trends, without identifying individual visitors.
          </p>
          <p>
            In addition, we may use services provided by third parties to
            display relevant content, products, services and advertising to you.
            These third parties may use cookies, web beacons and similar
            technologies to collect or receive information from this website and
            elsewhere on the internet. They may then use that information to
            provide measurement services so we can understand your interests and
            retarget advertisements based on your previous visits to this
            website. Please keep in mind that we do not share your personal
            information with any third-party advertiser, ad server or ad
            network.
          </p>
          <p>
            You may be able to opt-out of the collection and use of information
            for ad targeting by some third parties by visiting
            <a
              className="text__link"
              href="www.aboutads.info/choices"
              target="_blank"
            >
              www.aboutads.info/choices
            </a>
            . You can opt out of Google’s use of cookies by visiting{" "}
            <a
              className="text__link"
              href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings"
              target="_blank"
            >
              Google’s Ad Settings
            </a>
            . You can visit{" "}
            <a
              className="text__link"
              href="https://optout.networkadvertising.org/?c=1"
              target="_blank"
            >
              this page
            </a>{" "}
            to opt out of AdRoll’s and their partners’ targeted advertising.
            Please see “Cookies” in the section above for more information on
            how you can control the use of cookies on your computer.
          </p>
        </div>
        <div className="text__main--section">
          <h3>California Do Not Track</h3>
          <p>
            Our web services do not alter, change, or respond upon receiving Do
            Not Track (DNT) requests or signals in browsers. As described in
            more detail above, we track user activity using web server logs,
            cookies and similar technologies. Information collected in web
            server logs helps us analyze website usage and improve the user’s
            experience. Cookies allow us to offer you a customized experience
            and present relevant advertising to you.
          </p>
        </div>
        <div className="text__main--section">
          <h3>How is personal information protected?</h3>
          <p>
            We take certain appropriate security measures to help protect your
            personal information from accidental loss and from unauthorized
            access, use or disclosure. However, we cannot guarantee that
            unauthorized persons will always be unable to defeat our security
            measures
          </p>
        </div>
        <div className="text__main--section">
          <h3>Who has access to the information?</h3>
          <p>
            We will not sell, rent, or lease mailing lists or other user data to
            others, and we will not make your personal information available to
            any unaffiliated parties, except as follows:
          </p>
          <ul>
            <li>
              to agents, website vendors and/or contractors who may use it on
              our behalf or in connection with their relationship with us;
            </li>
            <li>
              if we are unable to assist with your matter, but know an
              unaffiliated attorney or firm that may be able to help you, we may
              refer you and share information you provided us with that party;
              and
            </li>
            <li>
              as required by law, in a matter of public safety or policy, as
              needed in connection with the transfer of our business assets (for
              example, if we are acquired by another firm or if we are
              liquidated during bankruptcy proceedings), or if we believe in
              good faith that sharing the data is necessary to protect our
              rights or property.
            </li>
          </ul>
        </div>
        <div className="text__main--section">
          <h3>
            How can I correct, amend or delete my personal information and/or
            opt out of future communications?
          </h3>
          <p>
            You may opt out of any future contacts from us at any time. Contact
            us via the phone number, contact form or mailing address on our
            website at any time to:
          </p>
          <ul>
            <li>see what data we have about you, if any;</li>
            <li>change/correct any data we have about you;</li>
            <li>ask us to delete any data we have about you; and/or</li>
            <li>opt out of future communications from us.</li>
          </ul>
          <p>
            If you have any additional questions or concerns about this privacy
            policy, please contact us via the phone number, contact form or
            mailing address listed on this website. If our information practices
            change in a significant way, we will post the policy changes here.
          </p>
          <p>Effective September 14, 2015.</p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default Privacy;
