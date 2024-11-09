import { useEffect } from "react";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import "./privacy.css";
import { useLocation } from "react-router-dom";

const Privacy = (props) => {
  const location = useLocation();

  const language =
    location.state && location.state.language
      ? location.state.language
      : "English";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="page">
      <Nav language={language}></Nav>
      <section className="text__main text__main--solo">
        <h2>{language === "English" ? `Privacy Policy` : `隱私權政策`}</h2>
        <div className="text__main--section">
          <p>
            {language === "English"
              ? `This privacy policy applies to information collected online from
            users of this website. In this policy, you can learn what kind of
            information we collect, when and how we might use that information,
            how we protect the information, and the choices you have with
            respect to your personal information.`
              : `本隱私權政策適用於從本網站使用者線上收集的資訊。在本政策中，您可以了解我們收集哪些類型的資訊、我們何時以及如何使用該資訊、我們如何保護這些資訊以及您對個人資訊的選擇。`}
          </p>
        </div>
        <div className="text__main--section">
          <h3>
            {language === "English"
              ? `What personal information is collected through this website and how
            is it used?`
              : `透過本網站收集哪些個人資訊以及如何使用這些資訊？`}
          </h3>
          <p>
            {language === "English"
              ? `We collect information about our users in three ways: directly from
            the user, from our Web server logs and through cookies. We use the
            information primarily to provide you with a personalized Internet
            experience that delivers the information, resources, and services
            that are most relevant and helpful to you. We don’t share any of the
            information you provide with others, unless we say so in this
            Privacy Policy, or when we believe in good faith that the law
            requires it.`
              : `我們透過三種方式收集有關使用者的資訊：直接從使用者、從我們的 Web 伺服器日誌以及透過 cookie。我們使用這些資訊主要是為了提供您個人化的網路體驗，從而提供與您最相關和最有幫助的資訊、資源和服務。我們不會與他人分享您提供的任何信息，除非我們在本隱私權政策中如此說明，或者當我們真誠地相信法律要求這樣做時。`}
          </p>
        </div>
        <div className="text__main--section">
          <h3>
            {language === "English"
              ? `User-supplied information`
              : `用戶提供的信息`}
          </h3>
          <p>
            {language === "English"
              ? `If you fill out the “contact” form on this website, we will ask you
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
            submission.`
              : `如果您填寫本網站上的「聯絡」表格，我們會要求您提供一些個人資訊（例如電子郵件地址、姓名、電話號碼和州）。我們只要求您在聯絡表單上提供電子郵件地址。此外，如果可以透過本網站進行聊天，則在您參與線上聊天時可能會被要求提供資訊。請勿提交任何機密、專有或敏感的個人識別資訊（例如社會安全號碼、出生日期、駕照號碼、信用卡、銀行帳戶或其他財務資訊）（統稱為「敏感資訊」）。如果您提交任何敏感訊息，您需自行承擔風險，我們不會對您承擔任何責任，也不對您提交的後果負責。`}
          </p>
          <p>
            {language === "English"
              ? `Information that you provide to us through the contact form or an
            online chat will be used so that we may respond to your inquiry. We
            may also use information you provide to us to communicate with you
            in the future. If you do not wish to receive such communications,
            you may opt out (unsubscribe) as described below.`
              : `您透過聯絡表單或線上聊天向我們提供的資訊將用於我們回覆您的詢問。我們也可能使用您提供給我們的資訊將來與您溝通。如果您不希望收到此類通訊，您可以按照如下所述選擇退出（取消訂閱）。`}
          </p>
        </div>
        <div className="text__main--section">
          <h3>
            {language === "English" ? `Web server logs` : `網頁伺服器日誌`}
          </h3>
          <p>
            {language === "English"
              ? `When you visit our website, we may track information about your
            visit and store that information in web server logs, which are
            records of the activities on our sites. The servers automatically
            capture and save the information electronically. Examples of the
            information we may collect include:`
              : `當您造訪我們的網站時，我們可能會追蹤您的存取資訊並將該資訊儲存在網站伺服器日誌中，即我們網站上的活動記錄。伺服器自動捕獲並以電子方式保存資訊。我們可能收集的資訊範例包括：`}
          </p>
          <ul>
            <li>
              {language === "English"
                ? `your unique Internet protocol address;`
                : `您唯一的網際網路通訊協定位址；`}
            </li>
            <li>
              {language === "English"
                ? `the name of your unique Internet service provider;`
                : `您唯一的網際網路服務供應商的名稱；`}
            </li>
            <li>
              {language === "English"
                ? `the town/city, county/state and country from which you access our
              website;`
                : `您造訪我們網站的城鎮/城市、縣/州和國家；`}
            </li>
            <li>
              {language === "English"
                ? `the kind of browser or computer you use;`
                : `您使用的瀏覽器或計算機的類型；`}
            </li>
            <li>
              {language === "English"
                ? `the number of links you click within the site;`
                : `您在網站內點擊的連結數量；`}
            </li>
            <li>
              {language === "English"
                ? `the date and time of your visit;`
                : `您造訪的日期和時間；`}
            </li>
            <li>
              {language === "English"
                ? `the web page from which you arrived to our site;`
                : `您造訪我們網站的網頁；`}
            </li>
            <li>
              {language === "English"
                ? `the pages you viewed on the site; and`
                : `您在網站上查看的頁面；和`}
            </li>
            <li>
              {language === "English"
                ? `certain searches/queries that you conducted via our website(s).`
                : `您透過我們的網站進行的某些搜尋/查詢。`}
            </li>
          </ul>
          <p>
            {language === "English"
              ? `The information we collect in web server logs helps us administer
            the site, analyze its usage, protect the website and its content
            from inappropriate use and improve the user’s experience.`
              : `我們在網站伺服器日誌中收集的資訊有助於我們管理網站、分析其使用情況、保護網站及其內容免遭不當使用並改善使用者體驗。`}
          </p>
        </div>
        <div className="text__main--section">
          <h3>{language === "English" ? `Cookies` : `餅乾`}</h3>
          <p>
            {language === "English"
              ? `In order to offer and provide a customized and personal service, our
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
            cookie or to disable cookies.`
              : `為了提供客製化和個人化服務，我們的網站和應用程式可能會使用 cookie 和類似技術來儲存和幫助追蹤有關您的資訊。 Cookie 是從 Web 伺服器傳送到您的瀏覽器並儲存在您的電腦硬碟上的小資料片段。我們使用 cookie 來協助提醒我們您是誰，並協助您在造訪期間瀏覽我們的網站。 Cookie 還可以告訴我們訪客造訪網站的位置，並允許我們為您儲存偏好設置，這樣您就不必在每次造訪時重新輸入它們。 cookie的使用是比較規範的。大多數網路瀏覽器最初設定為接受 cookie，但您可以使用瀏覽器在收到 cookie 時通知您或停用 cookie。`}
          </p>
          <p>
            {language === "English"
              ? `If you wish to disable cookies from this site, you can do so using
            your browser. You should understand that some features of many sites
            may not function properly if you don’t accept cookies. For more
            information about using browsers to manage cookies, please see`
              : `如果您希望停用本網站的 cookie，您可以使用瀏覽器執行此操作。您應該了解，如果您不接受 cookie，許多網站的某些功能可能無法正常運作。有關使用瀏覽器管理 Cookie 的更多信息，請參閱`}{" "}
            <a
              className="text__link"
              href="https://allaboutcookies.org/how-to-manage-cookies"
              target="_blank"
            >
              All About Cookies
            </a>
            {language === "English"
              ? `. You can also refuse to accept Flash cookies from this website
            using `
              : `. 您也可以拒絕接受本網站的 Flash cookie `}
            <a
              className="text__link"
              href="https://www.adobe.com/devnet-docs/acrobatetk/index.html"
              target="_blank"
            >
              Adobe’s Flash management tools
            </a>
            {language === "English"
              ? `. You can opt out of Google’s use of cookies by visiting `
              : `您可以選擇不使用 Google 的 cookie `}
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
            {language === "English"
              ? `By visiting this website, you consent to the use of cookies and
            similar technologies in accordance with this Privacy Statement.`
              : `造訪本網站即表示您同意根據本隱私權聲明使用 cookie 和類似技術。`}
          </p>
        </div>
        <div className="text__main--section">
          <h3>
            {language === "English" ? `Third-party Services` : `第三方服務`}
          </h3>
          <p>
            {language === "English"
              ? `We may use services hosted by third parties, including Adobe Site
            Catalyst, to assist in providing our services and to help us
            understand the use of our site by our visitors. These services may
            collect information sent by your browser as part of a web page
            request, including your IP address or cookies. If these third-party
            services collect information, they do so anonymously and in the
            aggregate to provide information helpful to us such as website
            trends, without identifying individual visitors.`
              : `我們可能會使用第三方託管的服務（包括 Adob​​e Site Catalyst）來協助提供我們的服務並協助我們了解訪客對我們網站的使用情況。這些服務可能會收集您的瀏覽器作為網頁請求的一部分所發送的訊息，包括您的 IP 位址或 cookie。如果這些第三方服務收集信息，它們會以匿名方式進行匯總，以提供對我們有用的信息，例如網站趨勢，而不會識別單一訪客的身份。`}
          </p>
          <p>
            {language === "English"
              ? `In addition, we may use services provided by third parties to
            display relevant content, products, services and advertising to you.
            These third parties may use cookies, web beacons and similar
            technologies to collect or receive information from this website and
            elsewhere on the internet. They may then use that information to
            provide measurement services so we can understand your interests and
            retarget advertisements based on your previous visits to this
            website. Please keep in mind that we do not share your personal
            information with any third-party advertiser, ad server or ad
            network.`
              : `此外，我們可能會使用第三方提供的服務向您顯示相關內容、產品、服務和廣告。這些第三方可能會使用 cookie、網路信標和類似技術來收集或接收來自本網站和網路其他地方的資訊。然後，他們可能會使用這些資訊來提供測量服務，以便我們了解您的興趣並根據您先前造訪本網站的情況重新定位廣告。請記住，我們不會與任何第三方廣告商、廣告伺服器或廣告網路分享您的個人資訊。`}
          </p>
          <p>
            {language === "English"
              ? `You may be able to opt-out of the collection and use of information
            for ad targeting by some third parties by visiting `
              : `您可以選擇退出某些第三方收集和使用用於廣告定位的信息 `}
            <a
              className="text__link"
              href="www.aboutads.info/choices"
              target="_blank"
            >
              www.aboutads.info/choices
            </a>
            {language === "English"
              ? `. You can opt out of Google’s use of cookies by visiting `
              : `. 您可以選擇不使用 Google 的 cookie `}
            <a
              className="text__link"
              href="https://myadcenter.google.com/home?sasb=true&ref=ad-settings"
              target="_blank"
            >
              Google’s Ad Settings
            </a>
            {language === "English" ? `. You can visit ` : `. 您可以造訪這個 `}
            <a
              className="text__link"
              href="https://optout.networkadvertising.org/?c=1"
              target="_blank"
            >
              {language === "English" ? `this page` : `頁面`}
            </a>
            {language === "English"
              ? ` to opt out of AdRoll’s and their partners’ targeted advertising.
            Please see “Cookies” in the section above for more information on
            how you can control the use of cookies on your computer.`
              : `選擇退出 AdRoll 及其合作夥伴的目標廣告。您可以造訪此頁面選擇退出 AdRoll 及其合作夥伴的目標廣告。請參閱上一節中的“Cookie”，以了解有關如何控制電腦上 Cookie 的使用的更多資訊。`}
          </p>
        </div>
        <div className="text__main--section">
          <h3>
            {language === "English" ? `California Do Not Track` : `加州不追蹤`}
          </h3>
          <p>
            {language === "English"
              ? `Our web services do not alter, change, or respond upon receiving Do
            Not Track (DNT) requests or signals in browsers. As described in
            more detail above, we track user activity using web server logs,
            cookies and similar technologies. Information collected in web
            server logs helps us analyze website usage and improve the user’s
            experience. Cookies allow us to offer you a customized experience
            and present relevant advertising to you.`
              : `我們的網路服務不會在瀏覽器中收到「禁止追蹤」(DNT) 請求或訊號後進行更改、變更或回應。如上所述，我們使用網站伺服器日誌、cookie 和類似技術來追蹤使用者活動。在網站伺服器日誌中收集的資訊有助於我們分析網站使用情況並改善使用者體驗。 Cookie 可讓我們為您提供客製化體驗並向您顯示相關廣告。`}
          </p>
        </div>
        <div className="text__main--section">
          <h3>
            {language === "English"
              ? `How is personal information protected?`
              : `個人資訊如何保護？`}
          </h3>
          <p>
            {language === "English"
              ? `We take certain appropriate security measures to help protect your
            personal information from accidental loss and from unauthorized
            access, use or disclosure. However, we cannot guarantee that
            unauthorized persons will always be unable to defeat our security
            measures.`
              : `我們採取某些適當的安全措施來協助保護您的個人資訊免遭意外遺失以及未經授權的存取、使用或揭露。但是，我們不能保證未經授權的人員始終無法破解我們的安全措施。`}
          </p>
        </div>
        <div className="text__main--section">
          <h3>
            {language === "English"
              ? `Who has access to the information?`
              : `誰有權存取這些資訊？`}
          </h3>
          <p>
            {language === "English"
              ? `We will not sell, rent, or lease mailing lists or other user data to
            others, and we will not make your personal information available to
            any unaffiliated parties, except as follows:`
              : `我們不會向他人出售、出租或租賃郵件列表或其他用戶數據，也不會向任何非關聯方提供您的個人信息，但以下情況除外：`}
          </p>
          <ul>
            <li>
              {language === "English"
                ? `to agents, website vendors and/or contractors who may use it on
              our behalf or in connection with their relationship with us;`
                : `可能代表我們或與我們的關係相關的代理商、網站供應商和/或承包商；`}
            </li>
            <li>
              {language === "English"
                ? `if we are unable to assist with your matter, but know an
              unaffiliated attorney or firm that may be able to help you, we may
              refer you and share information you provided us with that party;
              and`
                : `如果我們無法協助處理您的事宜，但知道有獨立的律師或公司可以為您提供幫助，我們可能會推薦您並與該方分享您向我們提供的資訊；和`}
            </li>
            <li>
              {language === "English"
                ? `as required by law, in a matter of public safety or policy, as
              needed in connection with the transfer of our business assets (for
              example, if we are acquired by another firm or if we are
              liquidated during bankruptcy proceedings), or if we believe in
              good faith that sharing the data is necessary to protect our
              rights or property.`
                : `根據法律要求、公共安全或政策問題、與我們的業務資產轉讓相關的需要（例如，如果我們被另一家公司收購或我們在破產程序期間被清算），或者如果我們認為善意地認為共享數據對於保護我們的權利或財產是必要的。`}
            </li>
          </ul>
        </div>
        <div className="text__main--section">
          <h3>
            {language === "English"
              ? `How can I correct, amend or delete my personal information and/or
            opt out of future communications?`
              : `我該如何更正、修改或刪除我的個人資訊和/或選擇退出未來的通訊？`}
          </h3>
          <p>
            {language === "English"
              ? `You may opt out of any future contacts from us at any time. Contact
            us via the phone number, contact form or mailing address on our
            website at any time to:`
              : `您可以隨時選擇不再與我們聯絡。隨時透過我們網站上的電話號碼、聯絡表單或郵寄地址聯絡我們，以便：`}
          </p>
          <ul>
            <li>
              {language === "English"
                ? `see what data we have about you, if any;`
                : `查看我們擁有哪些關於您的數據（如果有）；`}
            </li>
            <li>
              {language === "English"
                ? `change/correct any data we have about you;`
                : `更改/更正我們擁有的任何有關您的資料；`}
            </li>
            <li>
              {language === "English"
                ? `ask us to delete any data we have about you; and/or`
                : `要求我們刪除我們擁有的任何有關您的資料；和/或`}
            </li>
            <li>
              {language === "English"
                ? `opt out of future communications from us.`
                : `選擇不再與我們聯繫。`}
            </li>
          </ul>
          <p>
            {language === "English"
              ? ` If you have any additional questions or concerns about this privacy
            policy, please contact us via the phone number, contact form or
            mailing address listed on this website. If our information practices
            change in a significant way, we will post the policy changes here.`
              : `如果您對本隱私權政策有任何其他問題或疑慮，請透過本網站列出的電話號碼、聯絡表單或郵寄地址與我們聯絡。如果我們的資訊實務發生重大變化，我們將在此處發布政策變更。`}
          </p>
          <p>
            {language === "English"
              ? `Effective September 14, 2015.`
              : `2015 年 9 月 14 日生效。`}
          </p>
        </div>
      </section>
      <Footer language={language}></Footer>
    </div>
  );
};

export default Privacy;
