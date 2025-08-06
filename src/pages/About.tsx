import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useTheme } from "@/contexts/ThemeContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { 
  Users, 
  Target, 
  MapPin, 
  Globe, 
  Award, 
  Clock, 
  Heart, 
  Lightbulb,
  TrendingUp,
  Shield,
  Zap,
  Star
} from "lucide-react";

const About = () => {
  const { theme } = useTheme();
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const sections = aboutRef.current?.querySelectorAll(".scroll-animate");
    sections?.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background" ref={aboutRef}>
      <Header />
      
      {/* Hero Section */}
      <motion.section 
        className="relative pt-28 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-background to-secondary/8" />
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.div variants={itemVariants} className="space-y-8 md:space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-3 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
              <Zap className="w-4 h-4" />
              About WearAttract
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-shift">
                Revolutionizing Wearable Technology
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light">
              We're transforming how businesses connect with their customers through innovative 
              NFC-powered wearable solutions that blend style with cutting-edge technology.
            </p>
          </motion.div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              animate={{
                y: [0, -20, 0],
                x: [0, 10, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + i * 10}%`,
              }}
            />
          ))}
        </div>
      </motion.section>

      {/* Company Overview */}
      <section className="scroll-animate py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 rounded-full text-sm font-medium text-secondary border border-secondary/20">
                <Lightbulb className="w-4 h-4" />
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Leading the Future of{" "}
                <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-gradient-shift">
                  Wearable Commerce
                </span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  WearAttract has been at the forefront of NFC wearable technology since our inception. 
                  We specialize in creating custom-branded wearable devices that seamlessly integrate 
                  with modern business operations.
                </p>
                <p>
                  Our mission is to bridge the gap between physical presence and digital interaction, 
                  enabling businesses to create memorable customer experiences through innovative 
                  wearable solutions.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl transform rotate-3"></div>
              <div className="relative p-8 md:p-10 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-3xl border border-primary/20 backdrop-blur-sm">
                <div className="grid grid-cols-2 gap-8">
                  <motion.div 
                    className="text-center space-y-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary">500+</div>
                    <div className="text-sm font-medium text-medium-contrast">Happy Clients</div>
                  </motion.div>
                  <motion.div 
                    className="text-center space-y-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary">50k+</div>
                    <div className="text-sm font-medium text-medium-contrast">Devices Deployed</div>
                  </motion.div>
                  <motion.div 
                    className="text-center space-y-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary">98%</div>
                    <div className="text-sm font-medium text-medium-contrast">Satisfaction Rate</div>
                  </motion.div>
                  <motion.div 
                    className="text-center space-y-3"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-primary">24/7</div>
                    <div className="text-sm font-medium text-medium-contrast">Support</div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="scroll-animate py-24 px-4 sm:px-6 lg:px-8 bg-muted/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">Our Core Values</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                These principles guide everything we do, from product development to customer service.
              </p>
            </motion.div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Customer First",
                description: "Every decision we make prioritizes our customers' success and satisfaction.",
                color: "from-red-500/20 to-pink-500/20",
                iconBg: "bg-red-500/10 text-red-600"
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description: "We continuously push the boundaries of what's possible with wearable technology.",
                color: "from-yellow-500/20 to-orange-500/20",
                iconBg: "bg-yellow-500/10 text-yellow-600"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Quality",
                description: "We maintain the highest standards in product quality and service delivery.",
                color: "from-blue-500/20 to-cyan-500/20",
                iconBg: "bg-blue-500/10 text-blue-600"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Growth",
                description: "We're committed to growing alongside our clients and evolving with market needs.",
                color: "from-green-500/20 to-emerald-500/20",
                iconBg: "bg-green-500/10 text-green-600"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <div className="relative p-8 bg-background/90 backdrop-blur-sm rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${value.iconBg} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="scroll-animate py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">What We Offer</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Comprehensive wearable technology solutions tailored to your business needs.
              </p>
            </motion.div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <Users className="w-7 h-7" />,
                title: "Custom Branded Wearables",
                description: "Personalized NFC-enabled devices that reflect your brand identity and values.",
                gradient: "from-blue-600 to-purple-600"
              },
              {
                icon: <Globe className="w-7 h-7" />,
                title: "Multi-Platform Integration",
                description: "Seamless connectivity across all your business platforms and systems.",
                gradient: "from-emerald-600 to-teal-600"
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: "Real-time Analytics",
                description: "Comprehensive insights into customer interactions and engagement patterns.",
                gradient: "from-orange-600 to-red-600"
              },
              {
                icon: <Award className="w-7 h-7" />,
                title: "Premium Support",
                description: "Dedicated account management and technical support for enterprise clients.",
                gradient: "from-violet-600 to-purple-600"
              },
              {
                icon: <Target className="w-7 h-7" />,
                title: "Custom Solutions",
                description: "Tailored implementations designed specifically for your industry needs.",
                gradient: "from-cyan-600 to-blue-600"
              },
              {
                icon: <Star className="w-7 h-7" />,
                title: "Quality Assurance",
                description: "Rigorous testing and quality control for all our wearable products.",
                gradient: "from-yellow-600 to-orange-600"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                className="group relative h-full"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Card content */}
                <div className="relative p-8 border border-border/50 rounded-2xl hover:shadow-2xl hover:border-primary/20 transition-all duration-300 h-full bg-background/80 backdrop-blur-sm">
                  <div className="flex flex-col h-full">
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 bg-gradient-to-br ${service.gradient} text-white rounded-xl group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {service.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{service.title}</h3>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed flex-1">{service.description}</p>
                    
                    {/* Hover indicator */}
                    <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full`}></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="scroll-animate py-24 px-4 sm:px-6 lg:px-8 bg-muted/40 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl transform -translate-y-1/2 -translate-x-1/2"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl transform -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">Get in Touch</h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with wearable technology? Let's start the conversation.
              </p>
            </motion.div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {[
              {
                icon: <MapPin className="w-7 h-7" />,
                title: "Visit Us",
                content: (
                  <>
                    123 Innovation Drive<br />
                    Tech Valley, CA 94025
                  </>
                ),
                gradient: "from-blue-600 to-cyan-600",
                bgColor: "bg-blue-500/10"
              },
              {
                icon: <Globe className="w-7 h-7" />,
                title: "Email Us",
                content: (
                  <>
                    hello@wearattract.com<br />
                    support@wearattract.com
                  </>
                ),
                gradient: "from-emerald-600 to-teal-600",
                bgColor: "bg-emerald-500/10"
              },
              {
                icon: <Clock className="w-7 h-7" />,
                title: "Call Us",
                content: (
                  <>
                    +1 (555) 123-4567<br />
                    Mon-Fri 9AM-6PM PST
                  </>
                ),
                gradient: "from-orange-600 to-red-600",
                bgColor: "bg-orange-500/10"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03, y: -5 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${contact.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-3xl`}></div>
                
                <div className="relative text-center p-10 bg-background/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-border/50 group-hover:border-primary/20">
                  <div className={`w-16 h-16 ${contact.bgColor} bg-gradient-to-br ${contact.gradient} text-white rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {contact.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">{contact.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {contact.content}
                  </p>
                  
                  {/* Hover indicator */}
                  <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className={`h-1 bg-gradient-to-r ${contact.gradient} rounded-full mx-auto w-16`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
