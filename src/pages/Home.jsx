
import {
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
  HiOutlineDesktopComputer,
  HiOutlineSparkles,
  HiOutlineHeart,
  HiOutlinePuzzle,
  HiOutlineBookOpen,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineGlobeAlt,
  HiOutlineCheckCircle,
  HiOutlineHome,
  HiOutlineChevronLeft,
  HiOutlineChevronRight,
} from "react-icons/hi";

import Button from "../components/Button";
import ProgramCard from "../components/ProgramCard";
import TestimonialCard from "../components/TestimonialCard";

const whyChooseUs = [
  { icon: HiOutlineAcademicCap, title: "Qualified & Caring Teachers", description: "Our teachers combine strong academic knowledge with patience, compassion and a genuine passion for helping children discover their abilities." },
  { icon: HiOutlineShieldCheck, title: "Safe & Secure Environment", description: "We provide a welcoming and supervised environment where children can learn, play and develop with confidence while parents enjoy peace of mind." },
  { icon: HiOutlineDesktopComputer, title: "Modern Learning Environment", description: "Our classrooms are designed to encourage participation, collaboration, creativity and effective learning using age-appropriate educational resources." },
  { icon: HiOutlineHeart, title: "Character & Values", description: "Academic achievement is important, but we also help children develop honesty, kindness, discipline, respect, responsibility and confidence." },
  { icon: HiOutlineSparkles, title: "Technology & Digital Learning", description: "Children are introduced to technology through age-appropriate computer lessons, digital activities, problem-solving and introductory coding." },
  { icon: HiOutlinePuzzle, title: "Sports & Creative Activities", description: "Sports, music, art, drama and other activities help children discover talents, develop teamwork and build confidence outside the classroom." },
];

const programs = [
  { title: "Early Years", level: "Ages 2–5", image: "https://images.unsplash.com/photo-1587616211892-b9db0759ba03?q=80&w=800&auto=format&fit=crop", description: "A warm and engaging foundation where children learn through play, stories, creativity, exploration and guided activities." },
  { title: "Lower Primary", level: "Primary 1–3", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop", description: "A strong academic foundation covering literacy, numeracy, science, social development, creativity and technology." },
  { title: "Upper Primary", level: "Primary 4–6", image: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=800&auto=format&fit=crop", description: "A more advanced learning experience that prepares pupils academically, socially and emotionally for secondary education." },
  { title: "Clubs & Activities", level: "All Ages", image: "https://images.unsplash.com/photo-1526307616774-60d0098f7642?q=80&w=800&auto=format&fit=crop", description: "Football, music, coding, drama, arts, reading and other activities that help children explore their interests and talents." },
];

const stats = [
  { value: "10+", label: "Years of Educational Excellence" },
  { value: "500+", label: "Learners Supported" },
  { value: "30+", label: "Qualified & Dedicated Staff" },
  { value: "95%", label: "Parent Satisfaction" },
];

const values = [
  { icon: HiOutlineHeart, title: "Kindness", description: "We encourage children to treat themselves, their classmates, teachers and community with kindness and compassion." },
  { icon: HiOutlineCheckCircle, title: "Integrity", description: "We teach children to be honest, responsible and trustworthy in their words, choices and actions." },
  { icon: HiOutlineLightBulb, title: "Curiosity", description: "We encourage pupils to ask questions, explore new ideas and develop a lifelong love for learning." },
  { icon: HiOutlineUserGroup, title: "Teamwork", description: "Children learn how to communicate, cooperate and contribute positively when working with others." },
];

const testimonials = [
  { name: "Mrs. Adaeze Obi", role: "Parent of a Primary 3 pupil", photo: "https://randomuser.me/api/portraits/women/68.jpg", quote: "Oasis has been a wonderful experience for our family. My daughter looks forward to school every day, and we have seen a remarkable improvement in both her confidence and academic performance." },
  { name: "Mr. Emeka Chukwu", role: "Parent of a Primary 5 pupil", photo: "https://randomuser.me/api/portraits/men/32.jpg", quote: "What I appreciate most about Oasis is the balance between academics and character development. My son has become more confident, responsible and willing to learn." },
  { name: "Mrs. Ifeoma Nwafor", role: "Parent of an Early Years pupil", photo: "https://randomuser.me/api/portraits/women/45.jpg", quote: "From our first visit, Oasis felt warm and welcoming. The teachers were patient with my son, and he settled into school much faster than we expected." },
];

const heroSlides = [
  { image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=1600&auto=format&fit=crop", title: "Nurturing Bright Minds for a Brighter Future" },
  { image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1600&auto=format&fit=crop", title: "Learning That Inspires Every Child" },
  { image: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1600&auto=format&fit=crop", title: "A Safe Place to Learn, Grow and Thrive" },
  { image: "https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=1600&auto=format&fit=crop", title: "Building Confidence Through Education" },
  { image: "https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1600&auto=format&fit=crop", title: "Preparing Children for a Brighter Future" },
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="bg-white">
      {/* HERO */}
      <section className="relative min-h-[700px] overflow-hidden">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.image}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[#152A54]/70" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex min-h-[700px] max-w-7xl items-center px-5 py-20 md:px-8">
          <div className="max-w-3xl text-white">
            <span className="inline-flex rounded-full bg-[#4FA8DA]/20 px-4 py-2 font-[Inter] text-sm font-semibold text-white">
              Welcome to Oasis
            </span>

            <h1 className="mt-5 font-[Poppins] text-4xl font-bold leading-tight md:text-6xl">
              {heroSlides[currentSlide].title}
            </h1>

            <p className="mt-6 max-w-xl font-[Inter] text-lg leading-8 text-[#E5EBF5]">
              At Oasis, we believe every child has unique potential waiting to
              be discovered. Our school provides a safe, supportive and
              inspiring environment where children develop academically,
              socially, emotionally and creatively.
            </p>

            <p className="mt-4 max-w-xl font-[Inter] text-base leading-7 text-[#E5EBF5]">
              From the first classroom experience to the final years of primary
              education, we work closely with children and their families to
              build strong foundations for lifelong learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/admission">Apply for Admission</Button>
              <Button to="/programs" variant="ghost">Explore Our Programs</Button>
            </div>

            <div className="mt-8 flex flex-wrap gap-6 font-[Inter] text-sm text-[#E5EBF5]">
              {["Child-Centred Learning", "Caring Teachers", "Safe Environment"].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <HiOutlineCheckCircle className="text-[#4FA8DA]" size={20} />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={previousSlide}
          aria-label="Previous slide"
          className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30"
        >
          <HiOutlineChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          aria-label="Next slide"
          className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm transition hover:bg-white/30"
        >
          <HiOutlineChevronRight size={28} />
        </button>

        <div className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {heroSlides.map((slide, index) => (
            <button
              type="button"
              key={slide.image}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === currentSlide ? "w-8 bg-[#F2B134]" : "w-2.5 bg-white/60"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#4FA8DA]">About Oasis</span>
              <h2 className="mt-3 font-[Poppins] text-3xl font-bold leading-tight text-[#152A54] md:text-4xl">
                A Place Where Children Learn, Grow and Thrive
              </h2>
              <p className="mt-6 font-[Inter] text-base leading-8 text-[#5B6472]">
                Oasis is a modern primary school committed to providing meaningful
                and high-quality education for children. We understand that
                primary education is more than teaching children how to read,
                write and calculate.
              </p>
              <p className="mt-4 font-[Inter] text-base leading-8 text-[#5B6472]">
                It is about helping children understand the world around them,
                discover their interests, communicate confidently, develop
                friendships, solve problems and become responsible members of
                their communities.
              </p>
              <p className="mt-4 font-[Inter] text-base leading-8 text-[#5B6472]">
                At Oasis, every child is encouraged to participate, ask questions,
                make mistakes, learn from experience and celebrate progress.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                [HiOutlineBookOpen, "Strong Academics", "A balanced curriculum that builds strong foundations in literacy, numeracy, science, technology and general knowledge.", "text-[#4FA8DA]"],
                [HiOutlineHeart, "Whole-Child Development", "We support academic, emotional, social, physical and creative development.", "text-[#F2B134]"],
                [HiOutlineUserGroup, "Strong Community", "Parents, teachers and pupils work together to create a positive learning community.", "text-[#4FA8DA]"],
                [HiOutlineGlobeAlt, "Future Ready", "We introduce children to technology, creativity and problem-solving skills needed for the future.", "text-[#F2B134]"],
              ].map(([Icon, title, description, iconClass]) => (
                <div key={title} className="rounded-2xl bg-[#FBF9F4] p-7">
                  <Icon size={32} className={iconClass} />
                  <h3 className="mt-4 font-[Poppins] text-lg font-semibold text-[#152A54]">{title}</h3>
                  <p className="mt-2 font-[Inter] text-sm leading-7 text-[#5B6472]">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="bg-[#FBF9F4] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-3xl bg-[#152A54] p-8 text-white md:p-10">
              <HiOutlineLightBulb size={42} className="text-[#F2B134]" />
              <h2 className="mt-6 font-[Poppins] text-2xl font-bold">Our Mission</h2>
              <p className="mt-5 font-[Inter] leading-8 text-[#D8E1F0]">
                Our mission is to provide every child with a high-quality,
                inclusive and inspiring educational experience that develops
                strong academic foundations, positive character, creativity,
                confidence and a lifelong love for learning.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
              <HiOutlineSparkles size={42} className="text-[#4FA8DA]" />
              <h2 className="mt-6 font-[Poppins] text-2xl font-bold text-[#152A54]">Our Vision</h2>
              <p className="mt-5 font-[Inter] leading-8 text-[#5B6472]">
                Our vision is to nurture confident, knowledgeable and
                responsible young people who are prepared to make meaningful
                contributions to their families, communities and the wider
                world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#4FA8DA]">Why Oasis</span>
            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] md:text-4xl">
              Everything We Do Is About Helping Children Thrive
            </h2>
            <p className="mt-5 font-[Inter] leading-7 text-[#5B6472]">
              We combine quality teaching, a supportive environment, technology,
              creativity and character education to give children a well-rounded
              primary school experience.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-7 shadow-[0_8px_24px_rgba(21,42,84,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#4FA8DA]/15 text-[#152A54]">
                    <Icon size={24} />
                  </span>
                  <h3 className="mt-5 font-[Poppins] text-lg font-semibold text-[#152A54]">{item.title}</h3>
                  <p className="mt-3 font-[Inter] text-sm leading-7 text-[#5B6472]">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* EDUCATIONAL APPROACH */}
      <section className="bg-[#152A54] px-5 py-20 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <span className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#F2B134]">Our Approach</span>
            <h2 className="mt-3 font-[Poppins] text-3xl font-bold md:text-4xl">Learning That Goes Beyond the Classroom</h2>
            <p className="mt-6 font-[Inter] leading-8 text-[#D8E1F0]">
              At Oasis, learning is not limited to textbooks and classroom
              exercises. We believe children learn best when they can ask
              questions, explore ideas, interact with others and apply what
              they have learned to real situations.
            </p>
            <p className="mt-4 font-[Inter] leading-8 text-[#D8E1F0]">
              Our teachers use discussions, practical activities, projects,
              creative exercises, technology and collaborative learning to make
              lessons meaningful and engaging.
            </p>
            <div className="mt-8">
              <Button to="/programs">Discover Our Programs</Button>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {[
              "Interactive classroom learning",
              "Practical activities",
              "Creative problem solving",
              "Technology integration",
              "Reading development",
              "Team-based projects",
              "Sports and physical development",
              "Arts and cultural activities",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 p-4">
                <HiOutlineCheckCircle size={22} className="shrink-0 text-[#F2B134]" />
                <span className="font-[Inter] text-sm text-[#E5EBF5]">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#4FA8DA]">Education at Oasis</span>
              <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] md:text-4xl">Our Programs</h2>
              <p className="mt-4 font-[Inter] leading-7 text-[#5B6472]">
                From early years to upper primary, our programs are designed to
                meet children at their stage of development while preparing
                them for the next step in their educational journey.
              </p>
            </div>
            <Button to="/programs" variant="ghost">View All Programs</Button>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <ProgramCard key={program.title} {...program} />
            ))}
          </div>
        </div>
      </section>

      {/* LEARNING JOURNEY */}
      <section className="bg-[#FBF9F4] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#4FA8DA]">The Oasis Journey</span>
            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] md:text-4xl">Growing With Your Child</h2>
            <p className="mt-5 font-[Inter] leading-7 text-[#5B6472]">
              We understand that every stage of childhood comes with different
              needs. Our learning environment grows with your child.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["01", "Discover", "Young learners explore the world through play, stories, movement, creativity and guided discovery.", "text-[#F2B134]"],
              ["02", "Develop", "Children build stronger academic skills while developing independence, communication, teamwork and confidence.", "text-[#4FA8DA]"],
              ["03", "Prepare", "Older pupils strengthen their academic knowledge and develop the confidence and responsibility needed for secondary school.", "text-[#F2B134]"],
            ].map(([number, title, description, numberClass]) => (
              <div key={number} className="rounded-2xl bg-white p-7 shadow-sm">
                <span className={`text-4xl font-bold ${numberClass}`}>{number}</span>
                <h3 className="mt-4 font-[Poppins] text-xl font-semibold text-[#152A54]">{title}</h3>
                <p className="mt-3 font-[Inter] leading-7 text-[#5B6472]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1000&auto=format&fit=crop"
                alt="Teacher supporting pupils in a classroom"
                className="h-[420px] w-full rounded-3xl object-cover shadow-xl"
              />
            </div>

            <div>
              <span className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#4FA8DA]">Our Core Values</span>
              <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] md:text-4xl">
                Helping Children Become Good People, Not Just Good Students
              </h2>
              <p className="mt-5 font-[Inter] leading-8 text-[#5B6472]">
                Education shapes more than academic ability. At Oasis, we
                intentionally create opportunities for children to practice
                positive values every day.
              </p>

              <div className="mt-8 space-y-6">
                {values.map((value) => {
                  const Icon = value.icon;
                  return (
                    <div key={value.title} className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#4FA8DA]/10 text-[#4FA8DA]">
                        <Icon size={23} />
                      </div>
                      <div>
                        <h3 className="font-[Poppins] font-semibold text-[#152A54]">{value.title}</h3>
                        <p className="mt-1 font-[Inter] text-sm leading-6 text-[#5B6472]">{value.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#152A54] px-5 py-16 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-[Poppins] text-4xl font-bold text-[#F2B134] md:text-5xl">{stat.value}</p>
                <p className="mt-3 font-[Inter] text-sm leading-6 text-[#C6D2E8]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCHOOL LIFE */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <span className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#4FA8DA]">Life at Oasis</span>
              <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] md:text-4xl">
                More Than a School — A Community
              </h2>
              <p className="mt-5 font-[Inter] leading-8 text-[#5B6472]">
                A child's school experience should include more than lessons
                and examinations. At Oasis, we create opportunities for
                children to build friendships, discover talents, express
                themselves and develop confidence.
              </p>
              <p className="mt-4 font-[Inter] leading-8 text-[#5B6472]">
                From sports days and cultural activities to reading clubs,
                creative projects, music, drama and technology activities,
                there is always an opportunity for pupils to learn something
                new.
              </p>
              <div className="mt-8">
                <Button to="/gallery" variant="ghost">Explore Our Gallery</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=700&auto=format&fit=crop" alt="Children participating in school activities" className="h-64 w-full rounded-2xl object-cover" />
              <img src="https://images.unsplash.com/photo-1560785496-3c9d27877182?q=80&w=700&auto=format&fit=crop" alt="Children learning together" className="mt-8 h-64 w-full rounded-2xl object-cover" />
              <img src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=700&auto=format&fit=crop" alt="Teacher with pupils" className="-mt-4 h-64 w-full rounded-2xl object-cover" />
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=700&auto=format&fit=crop" alt="Classroom learning" className="h-64 w-full rounded-2xl object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* PARENT PARTNERSHIP */}
      <section className="bg-[#FBF9F4] px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <HiOutlineUserGroup size={48} className="mx-auto text-[#4FA8DA]" />
          <h2 className="mt-5 font-[Poppins] text-3xl font-bold text-[#152A54] md:text-4xl">
            Parents Are an Important Part of the Oasis Community
          </h2>
          <p className="mx-auto mt-5 max-w-3xl font-[Inter] leading-8 text-[#5B6472]">
            We believe children achieve their best when teachers and parents
            work together. We encourage open communication and meaningful
            partnerships with families so that everyone understands each
            child's progress, strengths and areas for development.
          </p>

          <div className="mt-10 grid gap-6 text-left md:grid-cols-3">
            {[
              ["Regular Communication", "Parents receive important information about school activities, learning and their child's development."],
              ["Progress Support", "Teachers and parents can work together to encourage children and support their learning journey."],
              ["School Community", "Families are encouraged to participate in school events, activities and community-building initiatives."],
            ].map(([title, description]) => (
              <div key={title} className="rounded-2xl bg-white p-7 shadow-sm">
                <h3 className="font-[Poppins] text-lg font-semibold text-[#152A54]">{title}</h3>
                <p className="mt-3 font-[Inter] text-sm leading-7 text-[#5B6472]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-2xl text-center">
            <span className="font-[Inter] text-sm font-semibold uppercase tracking-wider text-[#4FA8DA]">Parent Experiences</span>
            <h2 className="mt-3 font-[Poppins] text-3xl font-bold text-[#152A54] md:text-4xl">What Parents Say About Oasis</h2>
            <p className="mt-5 font-[Inter] leading-7 text-[#5B6472]">
              Our greatest reward is seeing children grow while hearing
              positive feedback from the families who trust us with their
              education.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* VISIT US */}
      <section className="bg-[#FBF9F4] px-5 py-20 md:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#4FA8DA]/10 text-[#4FA8DA]">
                  <HiOutlineHome size={28} />
                </div>
                <h2 className="mt-6 font-[Poppins] text-3xl font-bold text-[#152A54]">Come and Experience Oasis</h2>
                <p className="mt-4 font-[Inter] leading-8 text-[#5B6472]">
                  Choosing a school is an important decision. We invite
                  prospective parents to learn more about our environment,
                  meet our team and discover how Oasis can support their
                  child's educational journey.
                </p>

                <div className="mt-6 font-[Inter] text-sm leading-7 text-[#5B6472]">
                  <p><strong className="text-[#152A54]">Address:</strong> 12 Independence Layout, Enugu, Enugu State, Nigeria</p>
                  <p><strong className="text-[#152A54]">Phone:</strong> +234 XXX XXX XXXX</p>
                  <p><strong className="text-[#152A54]">Email:</strong>{" "}info@oasisschool.com</p>
                </div>
              </div>

              <div className="rounded-2xl bg-[#152A54] p-8 text-white">
                <h3 className="font-[Poppins] text-2xl font-bold">Ready to Join Oasis?</h3>
                <p className="mt-4 font-[Inter] leading-7 text-[#D8E1F0]">
                  Take the first step toward giving your child a strong
                  academic foundation and an inspiring school experience.
                </p>
                <div className="mt-7">
                  <Button to="/admission">Begin Admission Application</Button>
                </div>
                <p className="mt-5 font-[Inter] text-xs text-[#B9C6DC]">
                  Our admissions team will be happy to guide you through the
                  application process.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F2B134] px-5 py-20 text-center md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-[Poppins] text-3xl font-bold text-[#152A54] md:text-4xl">
            Give Your Child a Strong Foundation for Tomorrow
          </h2>
          <p className="mt-5 font-[Inter] leading-8 text-[#152A54]/80">
            At Oasis, we are committed to helping every child discover their
            potential, develop confidence, build character and develop the
            skills they need to succeed in an ever-changing world.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/admission" className="!bg-[#152A54] !text-white hover:!bg-[#0F1F3D]">
              Start Admission Process
            </Button>
            <Button to="/contact" variant="ghost">Contact Oasis</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
