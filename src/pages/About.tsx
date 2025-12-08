
const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black tracking-wide mb-4">
            About OptiFirst
          </h2>
          <p className="text-xl text-gray-700">
            Bringing premium-quality, farm-fresh nutrition straight to your table.
          </p>
        </div>

        {/* Story Section (Left text + Right image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

          {/* Left Content */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              OptiFirst began with a simple belief—<span className="font-semibold">good food builds healthy lives</span>.
              What started as a passion for delivering fresh, nutritious poultry has grown into a mission
              of providing wholesome products to homes across the region.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              From nutrient-rich feed to clean and safe farming environments, every step of
              our process is guided by care and integrity. We ensure that quality is not just met,
              but consistently exceeded.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At OptiFirst, we're not just raising poultry—we're building trust and nurturing healthier lives.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full">
            <img
              src="https://i.pinimg.com/1200x/9d/06/a4/9d06a480b2eb204bfa05c24fdce8a565.jpg"
              alt="Our Story"
              className="rounded-3xl shadow-lg w-full object-cover h-[350px] md:h-[450px]"
            />
          </div>
        </div>

        {/* Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

          {/* Left Image */}
          <div className="w-full order-2 md:order-1">
            <img
              src="https://i.pinimg.com/1200x/24/60/42/246042d4281b10420c5b3d72e5c9aee6.jpg"
              alt="Our Mission"
              className="rounded-3xl shadow-lg w-full object-cover h-[350px] md:h-[450px]"
            />
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our mission is to deliver <span className="font-semibold">the freshest, safest, and highest-quality poultry
              products</span> while supporting ethical and sustainable farming practices.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We prioritize transparency, long-term trust, and customer well-being at every step.
              Your family's health and satisfaction come first—always.
            </p>
          </div>

        </div>

        {/* Features / Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">

          {/* Feature 1 */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-extrabold shadow-md">
              100%
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fresh & Natural</h3>
            <p className="text-gray-600 leading-relaxed">
              Pure, natural products crafted without artificial additives or preservatives.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-orange-400 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-extrabold shadow-md">
              24h
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Fast Delivery</h3>
            <p className="text-gray-600 leading-relaxed">
              Delivered fresh to your doorstep within hours, ensuring peak quality.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-700 to-indigo-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-3xl font-extrabold shadow-md">
              A+
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Quality Certified</h3>
            <p className="text-gray-600 leading-relaxed">
              Verified premium quality backed by rigorous industry certification standards.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;


