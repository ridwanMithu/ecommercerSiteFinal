
const ContactUs = () => {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen p-6 bg-gray-100">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="text-xl font-semibold text-gray-600">Let us know if we have missed anything</h2>
            <p className="mb-6 text-gray-500">We will get back to you soon</p>

            <div className="p-4 px-4 mb-6 bg-white rounded shadow-lg md:p-8">
              <div className="grid grid-cols-1 gap-4 text-sm gap-y-2 lg:grid-cols-3">
                <div className="text-gray-600">
                  <p className="text-lg font-medium">Product Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 gap-4 text-sm gap-y-2 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input type="text" name="full_name" id="full_name" className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" value="" />
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input type="text" name="email" id="email" className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" value="" placeholder="email@domain.com" />
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="pdtLink">Product Link</label>
                      <input type="text" name="pdtLink" id="pdtLink" className="w-full h-10 px-4 mt-1 border rounded bg-gray-50" value="https://www." placeholder="" />
                    </div>


                    <div className="text-right md:col-span-5">
                      <div className="inline-flex items-end">
                        <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">Submit</button>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUs