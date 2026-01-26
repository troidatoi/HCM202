import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaRobot, FaCode, FaImage, FaGraduationCap } from 'react-icons/fa';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';

const AboutUsPage: React.FC = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const teamMembers = [
    {
      name: 'Phạm Lê Thắng Hùng',
      studentId: 'SE172380',
      role: 'Full-Stack Developer',
      description: 'Phát triển toàn diện hệ thống Tạp chí số và Quizz Tư tưởng Hồ Chí Minh'
    },
    {
      name: 'Nguyễn Thị Hồng Hạnh',
      studentId: 'SE181585',
      role: 'Full-Stack Developer',
      description: 'Phát triển nội dung Chương 5.3 và hệ thống quản lý bài viết'
    },
    {
      name: 'Vũ Thị Yến Nhi',
      studentId: 'SA180193',
      role: 'Content Creator',
      description: 'Tạo nội dung Infographic và truyền thông cho dự án'
    },
    {
      name: 'Võ Đức Thịnh',
      studentId: 'SA170257',
      role: 'Content Manager',
      description: 'Quản lý và biên tập nội dung Tư tưởng Hồ Chí Minh chất lượng cao'
    }
  ];

  const aiTools = [
    {
      icon: <FaRobot size={40} />,
      title: 'ChatGPT',
      description: 'Hỗ trợ nghiên cứu Tư tưởng Hồ Chí Minh và tạo nội dung tạp chí chất lượng cao',
      color: 'text-red-600'
    },
    {
      icon: <FaCode size={40} />,
      title: 'Cursor',
      description: 'Công cụ coding AI giúp phát triển web tạp chí hiện đại và tối ưu',
      color: 'text-blue-600'
    },
    {
      icon: <FaImage size={40} />,
      title: 'Lovart',
      description: 'Tạo hình ảnh AI minh họa cho khối đại đoàn kết toàn dân tộc',
      color: 'text-yellow-600'
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Pattern giống trang chủ */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50/80 via-yellow-50/80 to-red-50/80">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-32 h-32 border border-red-200 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-yellow-200 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 border border-red-200 rounded-full"></div>
          <div className="absolute top-60 left-1/4 w-16 h-16 border border-yellow-300 rounded-full"></div>
          <div className="absolute bottom-40 right-1/4 w-20 h-20 border border-red-300 rounded-full"></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-red-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-yellow-400/15 to-red-400/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-red-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
      </div>

      <Header />
      <div className="relative z-10 max-w-7xl mx-auto px-4 pt-10 pb-16">
        {/* Hero Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col lg:flex-row items-center justify-between mb-20 gap-12">
            <div className="flex-1 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full blur-xl"></div>
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-yellow-500/20 to-red-500/20 rounded-full blur-xl"></div>
                <h1 className="relative text-6xl md:text-8xl font-bold uppercase text-center bg-gradient-to-r from-red-700 via-red-800 to-red-900 bg-clip-text text-transparent animate-pulse" style={{ fontFamily: "'Playfair Display', serif" }}>
                  About Us
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="mt-6 font-serif"
              >
                <p className="text-2xl md:text-3xl font-bold text-red-950 mb-4">
                  Group1 - Dự án MLN111
                </p>
                <p className="text-lg md:text-xl text-red-800 mb-6">
                  Trường Đại học FPT
                </p>
                <div className="inline-block bg-gradient-to-r from-red-100/50 to-yellow-100/50 backdrop-blur-sm rounded-2xl p-6 border border-red-200 shadow-lg">
                  <p className="text-lg text-red-900 font-medium">
                    🇻🇳 Tạp chí số Tư tưởng Hồ Chí Minh - Khám phá sức mạnh đại đoàn kết dân tộc
                  </p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex-1 flex justify-center lg:justify-end relative"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-red-400/30 to-yellow-400/30 rounded-3xl blur-2xl transform rotate-3"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/30 to-red-400/30 rounded-3xl blur-2xl transform -rotate-3"></div>
                <div className="relative w-[340px] md:w-[420px] aspect-square bg-red-900 rounded-3xl shadow-2xl border-2 border-yellow-200/50 transform hover:scale-105 transition-all duration-500 flex items-center justify-center text-white text-9xl">
                  🇻🇳
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="mb-20 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-yellow-500/10 rounded-3xl blur-3xl"></div>
            <div className="relative bg-white/80 backdrop-blur-lg rounded-3xl p-8 border border-red-200 shadow-2xl font-serif">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-800 to-red-950 rounded-full mb-4 shadow-lg text-white">
                  <span className="text-2xl font-bold">5.3</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-800 to-red-950 bg-clip-text text-transparent mb-4">
                  Về Dự Án Tạp Chí Số
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-600 to-red-800 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">💡</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                      Dự án này được thực hiện bởi <span className="text-red-800 font-semibold">Group1</span> chuyên sâu về <span className="text-red-700 font-semibold">Tư tưởng Hồ Chí Minh Chương 5.3</span>.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">🎯</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                      Chúng tôi đã phát triển một <span className="text-red-800 font-semibold">tạp chí kỹ thuật số</span> tích hợp quizz và trò chơi tương tác.
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-700 to-yellow-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">⚡</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                      Hướng đến việc <span className="text-red-800 font-semibold">hiện đại hóa cách tiếp cận</span> lý luận chính trị và tư tưởng bác Hồ.
                    </p>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-red-900 to-black rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white text-sm">✨</span>
                    </div>
                    <p className="text-gray-800 leading-relaxed">
                      Mang lại trải nghiệm <span className="text-red-800 font-semibold">cao cấp và trực quan</span> cho sinh viên trường Đại học FPT.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Team Members Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-yellow-500/20 rounded-full blur-3xl"></div>
              <h2 className="relative text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-700 via-red-800 to-red-950 bg-clip-text text-transparent mb-6">
                👥 Thành Viên Nhóm
              </h2>
              <p className="text-xl text-red-900/80 max-w-3xl mx-auto font-serif">
                Đội ngũ chuyên nòng cốt trong dự án truyền thông Tư tưởng Hồ Chí Minh
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => {
              const bgColors = [
                'from-red-600/20 to-yellow-600/20',
                'from-yellow-600/20 to-red-600/20',
                'from-red-800/20 to-red-600/20',
                'from-yellow-700/20 to-red-800/20'
              ];
              const accentColors = [
                'from-red-600 to-yellow-600',
                'from-yellow-600 to-red-600',
                'from-red-800 to-red-600',
                'from-yellow-700 to-red-800'
              ];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className="group relative h-full font-serif"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${bgColors[index]} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                  <div className="relative bg-white/40 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/20 transition-all duration-500 group-hover:shadow-3xl group-hover:-translate-y-3 h-full flex flex-col">
                    <div className="text-center flex-1 flex flex-col">
                      <div className="relative mb-6">
                        <div className={`w-24 h-24 bg-gradient-to-br ${accentColors[index]} rounded-full flex items-center justify-center mx-auto shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                          <FaUsers className="text-white" size={32} />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                          <span className="text-white text-sm font-bold">✓</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-xl mb-3 text-red-950">{member.name}</h3>
                      <p className="font-semibold mb-3 text-sm text-red-800 border border-red-200 px-3 py-1 rounded-full inline-block">
                        {member.studentId}
                      </p>
                      <p className="text-sm text-red-900 mb-4 font-medium">{member.role}</p>
                      <p className="text-sm text-gray-800 leading-relaxed flex-1">{member.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* AI Tools Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12 mt-24">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-700 to-red-950 bg-clip-text text-transparent mb-4">
              🤖 Công Cụ AI Đắc Lực
            </h2>
            <p className="text-lg text-red-800 max-w-2xl mx-auto font-serif">
              Các công cụ hỗ trợ xây dựng nền tảng Tạp chí số hiện đại
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {aiTools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-400/10 to-yellow-400/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-red-200/50 transition-all duration-300 group-hover:shadow-2xl group-hover:-translate-y-2">
                  <div className="text-center">
                    <div className="relative mb-6">
                      <div className={`w-16 h-16 ${tool.color.replace('text-', 'bg-').replace('-600', '-100')} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <div className={tool.color}>{tool.icon}</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-red-950">{tool.title}</h3>
                    <p className="text-gray-700 text-sm leading-relaxed">{tool.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="mt-24 p-10 bg-gradient-to-br from-red-900 to-red-950 text-white rounded-3xl border-2 border-yellow-500/50 shadow-2xl font-serif">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-yellow-500">Mục Tiêu Dự Án Chương 5.3</h2>
            <p className="text-lg md:text-xl mb-6 leading-relaxed">
              Dự án MLN111 của <span className="text-yellow-400 font-bold">Group1</span> không chỉ dừng lại ở việc học tập lý thuyết, mà còn truyền tải tinh thần <span className="text-yellow-400 font-bold">“Đoàn kết là sức mạnh”</span> của Bác Hồ thông qua nền tảng số hóa. Chúng tôi mong muốn xây dựng một không gian học tập trực quan, sinh động, nơi mỗi sinh viên có thể dễ dàng tiếp thu và vận dụng tư tưởng đại đoàn kết trong cuộc sống và công việc tương lai.
            </p>
            <div className="flex items-center justify-center mt-8 pt-8 border-t border-white/20">
              <FaGraduationCap size={32} className="mr-4 text-yellow-500" />
              <div className="text-left">
                <span className="text-xl font-bold block">Trường Đại học FPT</span>
                <span className="text-yellow-500 italic">Môn Tư tưởng Hồ Chí Minh (MLN111)</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage; 