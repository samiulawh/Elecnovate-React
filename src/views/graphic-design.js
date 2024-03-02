import React from 'react'

import { Helmet } from 'react-helmet'

import Header1 from '../components/header1'
import './graphic-design.css'

const GraphicDesign = (props) => {
  return (
    <div className="graphic-design-container">
      <Helmet>
        <title>Graphic-Design - Elecnovate</title>
        <meta property="og:title" content="Graphic-Design - Elecnovate" />
      </Helmet>
      <Header1></Header1>
      <div className="graphic-design-hero">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&amp;ixlib=rb-1.2.1&amp;w=1200"
          className="graphic-design-image"
        />
        <div className="graphic-design-container01">
          <h1 className="graphic-design-text">Graphics Design</h1>
          <p className="graphic-design-text01">
            I am Proficient in Adobe Creative Suite (Photoshop, Illustrator,
            InDesign), Figma, Sketch, Canva, and related software, have Strong
            grasp of design principles and visual hierarchy. Experienced in
            creating engaging graphics for branding, marketing, and digital
            media.
          </p>
          <div className="graphic-design-btn-group">
            <button className="graphic-design-button button">
              Get Started
            </button>
            <button className="graphic-design-button1 button">
              Learn More
            </button>
          </div>
          <span className="graphic-design-text02">
            <span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                Lorem
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <span>
              <span>
                ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
            <br></br>
            <span></span>
            <br></br>
            <span>
              <span>
                Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </span>
        </div>
      </div>
      <h1 className="graphic-design-text16">Our Capabilities</h1>
      <div className="graphic-design-pricing">
        <div className="graphic-design-container02">
          <div className="graphic-design-pricing-card">
            <span className="graphic-design-text17">
              VISUAL IDENTITY AND BRANDING
            </span>
            <div className="graphic-design-container03">
              <span className="graphic-design-text18">
                ✔ Development of logos and brand identities
              </span>
              <span className="graphic-design-text19">
                ✔ Designing icons &amp; Graphics
              </span>
              <span className="graphic-design-text20">
                ✔ Crafting business cards and stationery
              </span>
              <span className="graphic-design-text21">
                ✔ Creating patterns (repeat, seamless, abstract, etc.)
              </span>
              <span className="graphic-design-text22">
                ✔ Icon &amp; illustration
              </span>
              <span className="graphic-design-text23">✔ Brand application</span>
            </div>
            <button className="graphic-design-button2 button">
              Learn More
            </button>
          </div>
          <div className="graphic-design-pricing-card1">
            <span className="graphic-design-text24">PHOTO EDITING</span>
            <div className="graphic-design-container04">
              <span className="graphic-design-text25">✔ Retouching</span>
              <span className="graphic-design-text26">
                ✔ Photo Manipulation
              </span>
              <span className="graphic-design-text27">✔ Colour Correction</span>
              <span className="graphic-design-text28">
                ✔ Object Removal/Addition
              </span>
              <span className="graphic-design-text29">✔ Image Restoration</span>
              <span className="graphic-design-text30">
                ✔ Product Enhancement
              </span>
              <span className="graphic-design-text31">
                ✔ Product Photography Editing
              </span>
            </div>
            <button className="graphic-design-button3 button">
              Learn More
            </button>
          </div>
          <div className="graphic-design-pricing-card2">
            <span className="graphic-design-text32">PRINT DESIGN</span>
            <div className="graphic-design-container05">
              <span className="graphic-design-text33">✔ Resumes</span>
              <span className="graphic-design-text34">✔ Flyers</span>
              <span className="graphic-design-text35">✔ Brochures</span>
              <span className="graphic-design-text36">✔ Posters</span>
              <span className="graphic-design-text37">✔ Catalogs</span>
              <span className="graphic-design-text38">✔ Menus</span>
            </div>
            <button className="graphic-design-button4 button">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="graphic-design-pricing1">
        <div className="graphic-design-container06">
          <div className="graphic-design-pricing-card3">
            <span className="graphic-design-text39">
              MARKETING AND ADVERTISING
            </span>
            <div className="graphic-design-container07">
              <span className="graphic-design-text40">✔ Email Design</span>
              <span className="graphic-design-text41">✔ Print ads</span>
              <span className="graphic-design-text42">✔ Signage Designing</span>
              <span className="graphic-design-text43">✔ Billboards</span>
              <span className="graphic-design-text44">✔ Web Banners</span>
              <span className="graphic-design-text45">
                ✔ Design for Marketing
              </span>
            </div>
            <button className="graphic-design-button5 button">
              Learn More
            </button>
          </div>
          <div className="graphic-design-pricing-card4">
            <span className="graphic-design-text46">PRINT ON DEMAND</span>
            <div className="graphic-design-container08">
              <span className="graphic-design-text47">
                ✔ Custom Design Creation
              </span>
              <span className="graphic-design-text48">✔ Product Mockups</span>
              <span className="graphic-design-text49">✔ Brand Identity</span>
              <span className="graphic-design-text50">✔ Packaging Design</span>
              <span className="graphic-design-text51">
                ✔ Online Store Integration
              </span>
              <span className="graphic-design-text52">
                ✔ Product Personalization &amp; Customization
              </span>
              <span className="graphic-design-text53">✔ Order Management</span>
              <span className="graphic-design-text54">✔ Customer Support</span>
            </div>
            <button className="graphic-design-button6 button">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="graphic-design-container09">
        <img
          alt="image"
          src="https://play.teleporthq.io/static/svg/default-img.svg"
          className="graphic-design-image1"
        />
        <div className="graphic-design-container10">
          <h2 className="graphic-design-text55">Our Story</h2>
          <p className="graphic-design-text56">
            This story begins not as a single voice, but as a chorus of creative
            minds. At Elecnovate, each of us brings not only technical
            expertise, but also a passion for the power of visual communication.
          </p>
          <div className="graphic-design-container11">
            <p className="graphic-design-text57">Learn More</p>
          </div>
        </div>
      </div>
      <div className="graphic-design-hero1">
        <div className="graphic-design-container12"></div>
        <div className="graphic-design-container13">
          <div className="graphic-design-container14">
            <h1 className="graphic-design-text58">
              Let’s keep things organised
            </h1>
            <h2 className="graphic-design-text59">
              In the dynamic realm of graphic design, I thrive on staying at the
              forefront of evolving trends, technologies, and visual languages.
              My approach is a seamless blend of adaptability and timelessness.
            </h2>
            <div className="graphic-design-btn-group1">
              <button className="graphic-design-button7 button">
                Learn More
              </button>
            </div>
            <span className="graphic-design-text60">
              <span>
                <span>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  non volutpat turpis.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor. Lorem
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <span>
                <span>
                  ipsum dolor sit amet, consectetur adipiscing elit.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                <span>
                  Mauris luctus rutrum mi ut rhoncus. Integer in dignissim
                  tortor.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
            </span>
          </div>
        </div>
        <div className="graphic-design-container15">
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1529859503572-5b9d1e68e952?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG1pbmltYWxpc20lMjBjb3VjaHxlbnwwfHx8fDE2MjYxODI1OTE&amp;ixlib=rb-1.2.1&amp;w=1500"
            className="graphic-design-image2"
          />
          <p className="graphic-design-text74">
            Adapting to Evolving Trends, Delivering Results that Last
          </p>
        </div>
      </div>
      <footer className="graphic-design-footer">
        <div className="graphic-design-container16">
          <div className="graphic-design-logo">
            <img
              alt="logo"
              src="https://presentation-website-assets.teleporthq.io/logos/logo.png"
              className="graphic-design-image3"
            />
            <span className="graphic-design-text75">
              <span>
                <span>
                  Professional website builder
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <span>
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
              </span>
              <br></br>
              <span>for developers.</span>
            </span>
          </div>
          <div className="graphic-design-links-container">
            <div className="graphic-design-container17">
              <div className="graphic-design-product-container">
                <span className="graphic-design-text81">Product</span>
                <span className="graphic-design-text82">Features</span>
                <span className="graphic-design-text83">Pricing</span>
                <span className="graphic-design-text84">Tutorials</span>
                <span>Releases</span>
              </div>
              <div className="graphic-design-company-container">
                <span className="graphic-design-text86">Company</span>
                <span className="graphic-design-text87">About</span>
                <span className="graphic-design-text88">Careers</span>
                <span className="graphic-design-text89">Contact</span>
                <span>Blog</span>
              </div>
            </div>
            <div className="graphic-design-container18">
              <div className="graphic-design-contact">
                <span className="graphic-design-text91">Contact Us</span>
                <span className="graphic-design-text92">
                  hello@teleporthq.io
                </span>
                <span>+123 (4567) 890</span>
              </div>
              <div className="graphic-design-socials">
                <span className="graphic-design-text94">Follow Us</span>
                <div className="graphic-design-icon-group">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="graphic-design-icon"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="graphic-design-icon2"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    className="graphic-design-icon4"
                  >
                    <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="graphic-design-separator"></div>
        <span className="graphic-design-text95">
          <span>© 2021 teleportHQ, All Rights Reserved.</span>
          <span className="graphic-design-text97"></span>
          <span></span>
        </span>
      </footer>
    </div>
  )
}

export default GraphicDesign
