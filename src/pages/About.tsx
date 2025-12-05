

const About = () => {
  return (
       <section id="about" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                About OptiFirst
              </h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-600 mb-6">
                  At OptiFirst, we're committed to delivering the freshest, highest quality chicken and eggs straight from our farm to your table. With over 20 years of experience in poultry farming, we understand what it takes to produce premium products that you can trust.
                </p>
                <p className="text-lg text-gray-600">
                  Our commitment to quality, sustainability, and customer satisfaction sets us apart. Every product is carefully selected, processed, and packaged to ensure maximum freshness and flavor.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  100%
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fresh & Natural</h3>
                <p className="text-gray-600">
                  All our products are 100% natural with no artificial additives or preservatives
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  24h
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">
                  Quick and reliable delivery service to ensure freshness at your doorstep
                </p>
              </div>

              <div className="text-center p-6">
                <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  A+
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality Certified</h3>
                <p className="text-gray-600">
                  All products meet the highest industry standards and quality certifications
                </p>
              </div>
            </div>
          </div>
        </section>
  )
}

export default About
