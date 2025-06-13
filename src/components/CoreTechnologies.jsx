import { useState } from "react";

const categories = [
  "Backend",
  "Frontend",
  "Mobile",
  "Database",
  "CMS",
  "Cloud",
  "Testing Tools",
  "DevOps",
  "Full Stacks",
  "Blockchain",
];

const backendTechnologies = [
  {
    name: "Node",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/node.svg",
  },
  {
    name: "Rails",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/rails.svg",
  },
  {
    name: "Express",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/express.svg",
  },
  {
    name: "Django",
    logo: "https://static.djangoproject.com/img/logos/django-logo-positive.svg",
  },
  {
    name: ".Net",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/ee/.NET_Core_Logo.svg",
  },
  { name: "PHP", logo: "https://www.php.net/images/logos/php-logo.svg" },
  {
    name: "Python",
    logo: "https://www.python.org/static/community_logos/python-logo.png",
  },
  {
    name: "Rust",
    logo: "https://www.rust-lang.org/static/images/rust-logo-blk.svg",
  },
  {
    name: "Scala",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/scala.svg",
  },
  {
    name: "Golang",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/golang-gopher.svg",
  },
  { name: "Laravel", logo: "https://laravel.com/img/logomark.min.svg" },
  {
    name: "CodeIgniter",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/codeigniter.svg",
  },
];

const frontendTechnologies = [
  {
    name: "HTML",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/html.svg",
  },
  {
    name: "CSS",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/css.svg",
  },
  {
    name: "JavaScript",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/javascript.svg",
  },
  {
    name: "Bootstrap",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/bootstrap.svg",
  },
  {
    name: "React",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  { name: "Vue", logo: "https://vuejs.org/images/logo.png" },
  {
    name: "Angular",
    logo: "https://angular.io/assets/images/logos/angular/angular.svg",
  },
  { name: "Svelte", logo: "https://svelte.dev/svelte-logo.svg" },
  {
    name: "Next.js",
    logo: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
  },
  { name: "Nuxt.js", logo: "https://nuxtjs.org/design-kit/logo-square.svg" },
  {
    name: "Flutter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Flutter_logo.svg",
  },
  {
    name: "Ionic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Ionic_logo_vertical.svg",
  },
];

const mobileTechnologies = [
  {
    name: "React Native",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    name: "Flutter",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/40/Flutter_logo.svg",
  },
  {
    name: "Ionic",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/de/Ionic_logo_vertical.svg",
  },
];

const databaseTechnologies = [
  {
    name: "MySQL",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/mysql.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/postgresql.svg",
  },
  {
    name: "MongoDB",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/mongodb.svg",
  },
  {
    name: "Redis",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/redis.svg",
  },
];

const cmsTechnologies = [
  {
    name: "WordPress",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/wordpress.svg",
  },
  {
    name: "Drupal",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/drupal.svg",
  },
  {
    name: "Joomla",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/joomla.svg",
  },
  {
    name: "Magento",
    logo: "https://www.arhamsoft.com/assets/img/stack-logos/magento.svg",
  },
  {
    name: "Shopify",
    logo: "https://images.seeklogo.com/logo-png/27/1/shopify-logo-png_seeklogo-273895.png",
  },
];
export default function CoreTechnologies() {
  const [activeTab, setActiveTab] = useState("Backend");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="bg-white py-16 px-4 md:px-12">
      <h2 className="text-3xl font-bold text-center text-slate-600 mb-6">
        OUR CORE TECHNOLOGIES
      </h2>
      <p className="text-center text-lg text-slate-500 max-w-3xl mx-auto mb-8">
        Code Pyramids works under various modern technologies for effective,
        scalable, and future-proof custom software development.
      </p>

      {/* Tabs */}
      <div className="flex justify-center space-x-6 mb-10 flex-wrap">
        {categories.map((category) => (
          <button
            key={category}
            className={`pb-2 border-b-2 transition font-semibold text-lg ${
              activeTab === category
                ? "border-orange-500 text-black"
                : "border-transparent text-gray-600 hover:text-black"
            }`}
            onClick={() => handleTabClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Technology Grids */}
      {activeTab === "Backend" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {backendTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 object-contain mb-4"
              />
              <span className="text-sm font-semibold text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Frontend" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {frontendTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 object-contain mb-4"
              />
              <span className="text-sm font-semibold text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Mobile" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {mobileTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 object-contain mb-4"
              />
              <span className="text-sm font-semibold text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      )}

      {activeTab === "Database" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {databaseTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 object-contain mb-4"
              />
              <span className="text-sm font-semibold text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      )}    
      {activeTab === "CMS" && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {cmsTechnologies.map((tech) => (
            <div
              key={tech.name}
              className="bg-gray-50 p-6 rounded-lg shadow-sm flex flex-col items-center hover:shadow-md transition"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-12 object-contain mb-4"
              />
              <span className="text-sm font-semibold text-gray-700">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      )}
      {/* Placeholder for unimplemented tabs */}
      {!["Backend", "Frontend", "Mobile", "Database", "CMS"].includes(activeTab) && (
        <p className="text-center text-gray-400 italic">Coming soon...</p>
      )}
    </section>
  );
}
