import { FullComponentsView } from '@/components/CodeViewBox/codeIndex';

const code = `<div class="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
<img class="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=320&q=80" alt="Card Image">
<div class="p-4 md:p-5">
  <h3 class="text-lg font-bold text-gray-800 dark:text-white">
    Card title
  </h3>
  <p class="mt-1 text-gray-500 dark:text-neutral-400">
    Some quick example text to build on the card title and make up the bulk of the card's content.
  </p>
  <a class="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
    Go somewhere
  </a>
</div>
</div>`;
function page() {
  return (
    <FullComponentsView
      customHight="350"
      link={'/components/tailwind/footers/footer-one'}
      code={code}
      reactCode={'react code'}
      jsCode={'js code'}
      title="Tailwind CSS Card"
      description="A basic card containing a title, content and an extra corner content.Cards assume no specific width to start, so they'll be 100% wide unless otherwise stated."
    >
      <footer className="font-sans tracking-wide bg-[#213343] pt-12 pb-4 px-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-xl mx-auto">
          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Our Story
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Newsroom
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Web Development
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Testing Automation
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  AWS Development Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Mobile App Development
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
              Platforms
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Hubspot
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Marketo Integration Services
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Marketing Glossary
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  UIPath
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#FFA726] font-semibold text-lg mb-6">
              Company
            </h4>
            <ul className="space-y-5">
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="javascript:void(0)"
                  className="hover:text-[#FFA726] text-gray-300 text-[15px] transition-all"
                >
                  Learn more
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t text-center border-[#6b5f5f] pt-4 mt-8">
          <p className="text-gray-300 text-[15px]">
            © ReadymadeUI. All rights reserved.
          </p>
        </div>
      </footer>
    </FullComponentsView>
  );
}

export default page;
