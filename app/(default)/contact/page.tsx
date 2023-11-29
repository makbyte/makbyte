export const metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-4xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Got a question, Write to us and We'll get back in a jiffy!</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
                  <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="First and last name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Company Name <span className="text-red-600">*</span></label>
                  <input id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Your company or app name" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="query">Message <span className="text-red-600">*</span></label>
                  <textarea className="form-input w-full text-gray-300" placeholder="Your Query" aria-label="Your Query" />

                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-purple-600 hover:bg-purple-700 w-full">Send</button>
                </div>
              </div>
            </form>
            
          </div>

        </div>
      </div>
    </section>
  )
}
