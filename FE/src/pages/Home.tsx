import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import MemoryGame from "../components/MemoryGame";
import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getAllBlogsApi } from "../api";
import { motion } from "framer-motion";
import bgHome from "../assets/background.png";
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import card4 from "../assets/card4.png";

// Triết lý và trích dẫn nổi tiếng
// Tư tưởng Hồ Chí Minh và trích dẫn nổi tiếng
const philosophyQuotes = [
  {
    quote: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.",
    author: "Hồ Chí Minh",
    context: "Lời kêu gọi đại đoàn kết dân tộc"
  },
  {
    quote: "Nước Việt Nam là một, dân tộc Việt Nam là một. Sông có thể cạn, núi có thể mòn, song chân lý đó không bao giờ thay đổi.",
    author: "Hồ Chí Minh",
    context: "Tư tưởng về sự thống nhất đất nước"
  },
  {
    quote: "Dễ mười lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.",
    author: "Hồ Chí Minh",
    context: "Sức mạnh của nhân dân"
  },
  {
    quote: "Đoàn kết là sức mạnh, là then chốt của thành công.",
    author: "Hồ Chí Minh",
    context: "Nguyên tắc xây dựng Đảng và đất nước"
  }
];

// Nội dung về Tư tưởng Hồ Chí Minh (Chương 5.3)
const marxistDialectics = {
  title: "Tư tưởng Hồ Chí Minh về Đại đoàn kết",
  subtitle: "Chương 5.3: Đại đoàn kết toàn dân tộc và đoàn kết quốc tế",
  principles: [
    {
      title: "Đại đoàn kết là chiến lược hàng đầu",
      description: "Đại đoàn kết không phải là thủ đoạn chính trị nhất thời mà là đường lối chiến lược xuyên suốt cách mạng Việt Nam.",
      icon: "🤝",
      color: "from-red-600 to-red-800",
      image: card1
    },
    {
      title: "Đoàn kết là sức mạnh, là then chốt",
      description: "Đoàn kết tạo nên sức mạnh vô địch để chiến thắng mọi kẻ thù và xây dựng đất nước giàu mạnh.",
      icon: "💪",
      color: "from-yellow-500 to-red-600",
      image: card2
    },
    {
      title: "Đại đoàn kết toàn dân tộc",
      description: "Tập hợp mọi người dân Việt Nam yêu nước, không phân biệt giai cấp, tôn giáo, dân tộc vào một khối thống nhất.",
      icon: "🇻🇳",
      color: "from-red-500 to-yellow-600",
      image: card3
    },
    {
      title: "Kết hợp sức mạnh dân tộc và quốc tế",
      description: "Đoàn kết dân tộc phải gắn liền với đoàn kết quốc tế, tranh thủ sự ủng hộ của nhân loại tiến bộ trên thế giới.",
      icon: "🌐",
      color: "from-blue-600 to-red-600",
      image: card4
    }
  ],
  examples: [
    {
      title: "Mặt trận Việt Minh",
      description: "Minh chứng lịch sử về sức mạnh của đại đoàn kết trong thắng lợi của Cách mạng Tháng Tám 1945.",
      icon: "🏛️"
    },
    {
      title: "Liên minh Công-Nông-Trí",
      description: "Nền tảng của khối đại đoàn kết toàn dân tộc trong thời kỳ đẩy mạnh công nghiệp hóa, hiện đại hóa.",
      icon: "🏗️"
    },
    {
      title: "Đối ngoại đa phương",
      description: "Việt Nam là bạn, là đối tác tin cậy và là thành viên có trách nhiệm trong cộng đồng quốc tế.",
      icon: "🌍"
    }
  ]
};

// Bộ câu hỏi trắc nghiệm nhanh Chương 5.3
const principleQuizzes = [
  {
    principle: 0,
    title: "Đại đoàn kết là chiến lược hàng đầu",
    detail: "Đại đoàn kết không phải là thủ đoạn chính trị nhất thời mà là đường lối chiến lược xuyên suốt cách mạng Việt Nam. Nó quyết định sự sống còn của chế độ và thành công của sự nghiệp xây dựng, bảo vệ Tổ quốc.",
    detailedContent: {
      introduction: "Tư tưởng này khẳng định đoàn kết là vận mệnh của dân tộc.",
      characteristics: [
        "Tính chiến lược: Kéo dài suốt quá trình cách mạng",
        "Tính then chốt: Quyết định thành bại cuối cùng",
        "Tính toàn diện: Đoàn kết mọi lực lượng có thể"
      ],
      mechanism: "Tập hợp mọi tầng lớp nhân dân dựa trên nền tảng liên minh công - nông - trí."
    },
    examples: [
      {
        title: "Trong kháng chiến",
        content: "Khối đại đoàn kết giúp dân tộc nhỏ yếu đánh bại các đế quốc hùng mạnh.",
        visual: "✊"
      },
      {
        title: "Trong xây dựng",
        content: "Hợp tác đa ngành, đa vùng để phát triển kinh tế bền vững.",
        visual: "🏗️"
      }
    ],
    questions: [
      {
        question: "Theo Hồ Chí Minh, đại đoàn kết dân tộc là:",
        options: [
          "Một thủ đoạn chính trị nhất thời",
          "Đường lối chiến lược xuyên suốt",
          "Công việc của một vài cá nhân",
          "Nhiệm vụ chỉ khi có giặc ngoại xâm"
        ],
        correct: 1,
        explanation: "Đại đoàn kết là chiến lược cốt lõi, lâu dài của cách mạng Việt Nam."
      },
      {
        question: "Tại sao nói đoàn kết là then chốt của thành công?",
        options: [
          "Vì nó giúp tập hợp sức mạnh của toàn dân",
          "Vì nó làm cho kẻ thù sợ hãi",
          "Vì nó làm đẹp bộ mặt quốc gia",
          "Vì nó dễ thực hiện hơn các việc khác"
        ],
        correct: 0,
        explanation: "Sức mạnh tổng hợp từ quần chúng nhân dân là nguồn lực lớn nhất."
      },
      {
        question: "Đại đoàn kết dân tộc trong tư tưởng Hồ Chí Minh là nhiệm vụ của:",
        options: [
          "Chỉ của Đảng Cộng sản",
          "Chỉ của Nhà nước",
          "Của toàn dân, do dân, vì dân",
          "Chỉ của lực lượng quân đội"
        ],
        correct: 2,
        explanation: "Đoàn kết là nhiệm vụ của toàn dân, huy động mọi tầng lớp xã hội."
      },
      {
        question: "Khẩu hiệu nổi tiếng nhất của Bác Hồ về đoàn kết là gì?",
        options: [
          "Đoàn kết là sức mạnh",
          "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công",
          "Dân ta phải biết sử ta",
          "Không có gì quý hơn độc lập tự do"
        ],
        correct: 1,
        explanation: "Đây là câu nói kinh điển khẳng định sức mạnh quyết định của đại đoàn kết."
      },
      {
        question: "Đại đoàn kết dân tộc phải dựa trên cơ sở nào là quan trọng nhất?",
        options: [
          "Lợi ích của giai cấp thượng lưu",
          "Lợi ích chung của quốc gia - dân tộc",
          "Sự hỗ trợ của quốc tế",
          "Sức mạnh của vũ khí"
        ],
        correct: 1,
        explanation: "Lấy mục tiêu chung là độc lập, tự do, hạnh phúc làm điểm tương đồng để tập hợp."
      }
    ]
  },
  {
    principle: 1,
    title: "Đoàn kết là sức mạnh, là then chốt",
    detail: "Đoàn kết tạo nên sức mạnh vô địch để chiến thắng mọi kẻ thù và xây dựng đất nước giàu mạnh.",
    detailedContent: {
      introduction: "Sức mạnh của đoàn kết là sức mạnh của tổ chức và sự thống nhất ý chí.",
      characteristics: [
        "Sức mạnh vô địch: Không kẻ thù nào đánh bại được",
        "Then chốt của thành công: Có đoàn kết là có tất cả",
        "Gắn kết cộng đồng: Tạo nên tính cố kết dân tộc"
      ],
      mechanism: "Biến sức mạnh của từng cá nhân thành sức mạnh tổng hợp của tập thể."
    },
    examples: [
      {
        title: "Chiến thắng Điện Biên Phủ",
        content: "Sức mạnh của khối đại đoàn kết toàn dân đã làm nên chiến thắng lừng lẫy năm châu.",
        visual: "🇻🇳"
      }
    ],
    questions: [
      {
        question: "Vai trò của đại đoàn kết dân tộc trong tư tưởng Hồ Chí Minh là gì?",
        options: [
          "Là nhiệm vụ ưu tiên số 2",
          "Là mục tiêu then chốt của cách mạng",
          "Chỉ cần thiết khi có chiến tranh",
          "Là giải pháp tình thế"
        ],
        correct: 1,
        explanation: "Đoàn kết là then chốt, là mục tiêu và nhiệm vụ hàng đầu của cách mạng."
      },
      {
        question: "Hồ Chí Minh khẳng định: 'Đoàn kết là... của thành công':",
        options: [
          "Bí mật",
          "Then chốt",
          "Kết quả",
          "Công cụ"
        ],
        correct: 1,
        explanation: "Đoàn kết là then chốt của mọi thành công trong cách mạng."
      },
      {
        question: "Muốn đoàn kết thì trước hết phải có gì?",
        options: [
          "Tiền bạc",
          "Vũ khí",
          "Sự chân thành và tấm lòng rộng mở",
          "Quyền lực"
        ],
        correct: 2,
        explanation: "Đoàn kết cần dựa trên sự tin tưởng và lòng nhân ái."
      },
      {
        question: "Sức mạnh của đại đoàn kết dân tộc được Hồ Chí Minh ví như:",
        options: [
          "Một dòng sông nhỏ",
          "Một hòn đá tảng",
          "Bức tường thành vô địch",
          "Một cánh chim bay"
        ],
        correct: 2,
        explanation: "Bác ví sức mạnh đoàn kết là bức tường vững chãi nhất không kẻ thù nào xuyên phá được."
      },
      {
        question: "Để đoàn kết trở thành sức mạnh thực tế, cần phải có:",
        options: [
          "Sự tự phát của người dân",
          "Tổ chức chặt chẽ trong Mặt trận",
          "Sự tài trợ của nước ngoài",
          "Sự cưỡng ép từ trên xuống"
        ],
        correct: 1,
        explanation: "Đoàn kết phải được tổ chức thành một khối thống nhất dưới sự lãnh đạo của Đảng."
      }
    ]
  },
  {
    principle: 2,
    title: "Đại đoàn kết toàn dân tộc",
    detail: "Tập hợp mọi người dân Việt Nam yêu nước, không phân biệt giai cấp, tôn giáo, dân tộc vào một khối thống nhất.",
    detailedContent: {
      introduction: "Đoàn kết rộng rãi, không bỏ sót bất kỳ ai yêu nước.",
      characteristics: [
        "Tính rộng rãi: Ai yêu nước đều được tập hợp",
        "Tính bình đẳng: Không phân biệt đối xử",
        "Tính thống nhất: Có chung mục tiêu độc lập dân tộc"
      ],
      mechanism: "Lấy mẫu số chung là lợi ích quốc gia - dân tộc để tập hợp mọi lực lượng."
    },
    examples: [
      {
        title: "54 dân tộc anh em",
        content: "Mỗi dân tộc là một bông hoa, tất cả kết thành vườn hoa rực rỡ của Việt Nam.",
        visual: "🌸"
      }
    ],
    questions: [
      {
        question: "Khối đại đoàn kết dân tộc của Hồ Chí Minh bao gồm ai?",
        options: [
          "Chỉ công nhân và nông dân",
          "Chỉ những người theo Đảng",
          "Toàn thể nhân dân Việt Nam yêu nước",
          "Chỉ những người sống trong nước"
        ],
        correct: 2,
        explanation: "Đại đoàn kết là tập hợp mọi người Việt Nam yêu nước, không phân biệt giai tầng."
      },
      {
        question: "Hình thức tổ chức của khối đại đoàn kết dân tộc là:",
        options: [
          "Chính phủ",
          "Mặt trận dân tộc thống nhất",
          "Tòa án nhân dân",
          "Hội đồng nhân dân"
        ],
        correct: 1,
        explanation: "Mặt trận là nơi quy tụ và tổ chức khối đại đoàn kết dân tộc."
      },
      {
        question: "Nguyên tắc cốt lõi trong xây dựng Mặt trận dân tộc thống nhất là gì?",
        options: [
          "Cưỡng ép tham gia",
          "Tự nguyện và hiệp thương dân chủ",
          "Chỉ dành cho giới thượng lưu",
          "Phân biệt đối xử tôn giáo"
        ],
        correct: 1,
        explanation: "Mặt trận hoạt động trên nguyên tắc tự nguyện và thống nhất hành động bài bản."
      },
      {
        question: "Chọn đáp án đúng về đối tượng của đại đoàn kết dân tộc:",
        options: [
          "Không biên giới",
          "Càng rộng rãi càng tốt",
          "Chỉ gồm những người giàu có",
          "Chỉ gồm những người trẻ tuổi"
        ],
        correct: 1,
        explanation: "Bác chủ trương đoàn kết rộng rãi nhất có thể, miễn là họ yêu nước."
      },
      {
        question: "Trong khối đại đoàn kết, tôn trọng các tôn giáo là nhằm:",
        options: [
          "Lấy lòng người dân",
          "Xây dựng niềm tin và sự đoàn kết giữa các giáo dân",
          "Thủ đoạn chính trị",
          "Thực hiện theo yêu cầu quốc tế"
        ],
        correct: 1,
        explanation: "Đoàn kết lương - giáo là một phần quan trọng của đại đoàn kết dân tộc."
      }
    ]
  },
  {
    principle: 3,
    title: "Kết hợp sức mạnh dân tộc và quốc tế",
    detail: "Đoàn kết dân tộc phải gắn liền với đoàn kết quốc tế, tranh thủ sự ủng hộ của nhân loại tiến bộ trên thế giới.",
    detailedContent: {
      introduction: "Việt Nam là một bộ phận của thế giới, đoàn kết để cùng phát triển.",
      characteristics: [
        "Tính thời đại: Kết hợp sức mạnh trong nước với xu thế thế giới",
        "Tính đa phương: Kết bạn với tất cả các nước tiến bộ",
        "Tính nhân văn: Vì hòa bình và tiến bộ nhân loại"
      ],
      mechanism: "Thực hiện đường lối đố ngoại độc lập, tự chủ, đa phương hóa, đa dạng hóa."
    },
    examples: [
      {
        title: "Việt Nam tại Liên Hợp Quốc",
        content: "Khẳng định vị thế và tinh thần hữu nghị với cộng đồng quốc tế.",
        visual: "🌐"
      }
    ],
    questions: [
      {
        question: "Theo Hồ Chí Minh, đoàn kết quốc tế có vai trò gì?",
        options: [
          "Làm yếu sức mạnh trong nước",
          "Tranh thủ sự ủng hộ của nhân loại tiến bộ",
          "Phụ thuộc hoàn toàn vào nước ngoài",
          "Không quan trọng bằng các vũ khí hiện đại"
        ],
        correct: 1,
        explanation: "Đoàn kết quốc tế giúp tăng thêm sức mạnh cho dân tộc trong sự nghiệp cách mạng."
      },
      {
        question: "Phương châm đối ngoại của Bác Hồ là:",
        options: [
          "Làm bạn với tất cả mọi nước dân chủ",
          "Chỉ quan hệ với các nước láng giềng",
          "Không cần quan hệ quốc tế",
          "Phân biệt đối xử các nước tư bản"
        ],
        correct: 0,
        explanation: "Chủ trương mở rộng quan hệ hữu nghị với các quốc gia tiến bộ và hòa bình."
      },
      {
        question: "Kết hợp sức mạnh dân tộc và sức mạnh thời đại thực chất là:",
        options: [
          "Chờ đợi viện trợ bên ngoài",
          "Nội lực là chính, ngoại lực là quan trọng",
          "Dựa vào nước lớn",
          "Chỉ quan tâm đến phát triển kinh tế"
        ],
        correct: 1,
        explanation: "Phải tự lực cánh sinh là chính, đồng thời tranh thủ tối đa sự giúp đỡ quốc tế."
      },
      {
        question: "Hồ Chí Minh chủ trương đoàn kết quốc tế dựa trên tinh thần:",
        options: [
          "Ăn miếng trả miếng",
          "Vô sản tất cả các nước và các dân tộc bị áp bức đoàn kết lại",
          "Cạnh tranh gay gắt",
          "Đóng cửa bảo nhau"
        ],
        correct: 1,
        explanation: "Đây là nguyên tắc đoàn kết giai cấp và dân tộc trên phạm vi toàn cầu."
      },
      {
        question: "Trong quan hệ quốc tế, Bác Hồ luôn giữ vững nguyên tắc:",
        options: [
          "Tùy cơ ứng biến không có nguyên tắc",
          "Dĩ bất biến, ứng vạn biến",
          "Thỏa hiệp vô điều kiện",
          "Cứng nhắc trong mọi tình huống"
        ],
        correct: 1,
        explanation: "Lấy cái không đổi (độc lập, dân tộc) để ứng phó với muôn vàn thay đổi của thế giới."
      }
    ]
  }
];


// Interface cho blog
interface Blog {
  _id: string;
  title: string;
  content: string;
  author: string;
  image?: string;
  thumbnail?: string;
  topics?: string[];
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

// Tính thời gian đăng bài
const getTimeAgo = (updatedAt: string): string => {
  const now = new Date();
  const updated = new Date(updatedAt);
  const diffInMinutes = Math.floor((now.getTime() - updated.getTime()) / (1000 * 60));

  if (diffInMinutes < 1) return "Vừa xong";
  if (diffInMinutes === 1) return "1 phút";
  if (diffInMinutes < 60) return `${diffInMinutes} phút`;

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours === 1) return "1 giờ";
  if (diffInHours < 24) return `${diffInHours} giờ`;

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays === 1) return "1 ngày";
  return `${diffInDays} ngày`;
};

export default function Home() {
  const navigate = useNavigate();

  // State cho blog từ API
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loadingBlog, setLoadingBlog] = useState(true);
  const [errorBlog, setErrorBlog] = useState<string | null>(null);
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  // State cho quiz Mác-Lênin
  const [selectedPrinciple, setSelectedPrinciple] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  // State cho Memory Game
  const [showMemoryGame, setShowMemoryGame] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoadingBlog(true);
        const allBlogs = await getAllBlogsApi();
        // Chỉ hiển thị blog đã được xuất bản và lấy 6 bài mới nhất theo updatedAt
        const publishedBlogs = allBlogs
          .filter((blog: Blog) => blog.published)
          .sort((a: Blog, b: Blog) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
          .slice(0, 6);
        setBlogs(publishedBlogs);
        setErrorBlog(null);
      } catch (err) {
        setErrorBlog('Không thể tải danh sách bài viết.');
        console.error('Error fetching blogs:', err);
      } finally {
        setLoadingBlog(false);
      }
    };

    fetchBlogs();
  }, []);

  // Auto-rotate quotes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prev) => (prev + 1) % philosophyQuotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Truncate content for preview
  const truncateContent = useCallback((content: string): string => {
    // Chuyển đổi line breaks thành spaces để hiển thị preview
    const normalizedContent = content.replace(/\n/g, ' ').replace(/\r/g, ' ');
    const strippedContent = normalizedContent.replace(/<[^>]*>?/gm, '');
    return strippedContent.length > 150
      ? strippedContent.substring(0, 150) + '...'
      : strippedContent;
  }, []);

  // Hàm xử lý quiz
  const handlePrincipleClick = (index: number) => {
    setSelectedPrinciple(index);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  const handleAnswerSelect = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === null) return;

    const currentQuiz = principleQuizzes[selectedPrinciple!];
    const question = currentQuiz.questions[currentQuestion];

    // Lưu câu trả lời của người dùng
    const newUserAnswers = [...userAnswers, selectedAnswer];
    setUserAnswers(newUserAnswers);

    if (selectedAnswer === question.correct) {
      setScore(score + 1);
    }

    if (currentQuestion < currentQuiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setSelectedPrinciple(null);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setShowResult(false);
    setUserAnswers([]);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Philosophy Quote */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative min-h-screen flex items-center justify-center px-2 sm:px-4 py-8 sm:py-12 md:py-20"
        style={{
          backgroundImage: `url(${bgHome})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Overlay để làm mờ background */}
        <div className="absolute inset-0 bg-amber-50/80"></div>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-32 h-32 border border-amber-300 rounded-full"></div>
          <div className="absolute top-40 right-20 w-24 h-24 border border-amber-400 rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 border border-amber-200 rounded-full"></div>
          <div className="absolute bottom-20 right-1/3 w-20 h-20 border border-amber-300 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 px-2 sm:px-4">
          {/* Main Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-red-900 mb-6 sm:mb-8 leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Tư tưởng Hồ Chí Minh
            <span className="block text-red-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-2 sm:mt-4 font-light italic">
              Hành trình kết nối khối đại đoàn kết
            </span>
          </motion.h1>

          {/* Philosophy Quote Carousel */}
          <motion.div
            className="philosophy-card max-w-4xl ml-auto mr-4 my-8 sm:my-12 md:my-16 p-4 sm:p-6 md:p-8 lg:p-12 relative z-20"
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="philosophy-quote">
              <motion.p
                key={currentQuoteIndex}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-amber-900 mb-4 sm:mb-6 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {philosophyQuotes[currentQuoteIndex].quote}
              </motion.p>
              <motion.div
                className="text-right"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <p className="text-xl text-amber-800 font-medium">
                  — {philosophyQuotes[currentQuoteIndex].author}
                </p>
                <p className="text-sm text-amber-600 mt-1 italic">
                  {philosophyQuotes[currentQuoteIndex].context}
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => navigate("/blogs")}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-red-800 text-white rounded-full text-base sm:text-lg font-medium hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Khám phá hệ thống bài viết
              </button>
              <button
                onClick={() => navigate("/magazine")}
                className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-red-800 text-white rounded-full text-base sm:text-lg font-medium hover:bg-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                📕 Xem Tạp chí
              </button>
            </div>
            <div className="flex gap-2">
              {philosophyQuotes.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuoteIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentQuoteIndex ? 'bg-amber-600' : 'bg-amber-300'
                    }`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Marxist Dialectics Section */}
      <motion.div
        className="py-8 sm:py-12 md:py-20 px-2 sm:px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-900 mb-4 sm:mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {marxistDialectics.title}
            </motion.h2>
            <motion.p
              className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {marxistDialectics.subtitle}
            </motion.p>
          </div>

          {/* Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-12 md:mb-16">
            {marxistDialectics.principles.map((principle, index) => (
              <motion.div
                key={index}
                className="philosophy-card group cursor-pointer overflow-hidden flex flex-col h-full"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                onClick={() => handlePrincipleClick(index)}
              >
                <div className={`h-24 sm:h-28 md:h-32 bg-gradient-to-br ${principle.color} flex items-center justify-center relative overflow-hidden`}>
                  {principle.image ? (
                    <>
                      <img
                        src={principle.image}
                        alt={principle.title}
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-black/20"></div>

                    </>
                  ) : (
                    <div className="w-full h-full"></div>
                  )}
                </div>
                <div className="p-3 sm:p-4 md:p-6 flex flex-col flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-amber-900 mb-2 sm:mb-3 group-hover:text-amber-800 transition-colors">
                    {principle.title}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-amber-700 leading-relaxed mb-4 flex-grow min-h-[80px]">
                    {principle.description}
                  </p>
                  <div className="mt-auto text-center w-full">
                    <span className="inline-block w-full py-2 sm:py-3 bg-amber-100 text-amber-800 rounded-full text-xs sm:text-sm font-bold border-2 border-amber-200 transition group-hover:bg-amber-600 group-hover:text-white group-hover:border-amber-700">
                      Bấm để học và kiểm tra
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Examples Section */}
          <motion.div
            className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-amber-900 text-center mb-4 sm:mb-6 md:mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ứng dụng trong thực tiễn
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {marxistDialectics.examples.map((example, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {example.icon}
                  </div>
                  <h4 className="text-xl font-bold text-amber-800 mb-3 group-hover:text-amber-900 transition-colors">
                    {example.title}
                  </h4>
                  <p className="text-amber-700 leading-relaxed">
                    {example.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <button
              onClick={() => navigate("/blogs")}
              className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-800 text-white rounded-full text-lg font-medium hover:from-red-700 hover:to-red-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Khám phá thêm về Tư tưởng Hồ Chí Minh
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Quiz Modal */}
      {
        selectedPrinciple !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleRestartQuiz}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {!showResult ? (
                // Quiz Content
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-amber-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {principleQuizzes[selectedPrinciple!].title}
                    </h2>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-orange-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((currentQuestion + 1) / principleQuizzes[selectedPrinciple!].questions.length) * 100}%` }}
                      ></div>
                    </div>
                    <p className="text-amber-700">
                      Câu hỏi {currentQuestion + 1} / {principleQuizzes[selectedPrinciple!].questions.length}
                    </p>
                  </div>

                  {/* Detail Content */}
                  <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 mb-8">
                    <h3 className="text-xl font-bold text-amber-900 mb-4">Nội dung chi tiết:</h3>

                    {/* Image and meaning for principles with images */}
                    {marxistDialectics.principles[selectedPrinciple!].image && (
                      <div className="mb-6">
                        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[28rem] rounded-xl overflow-hidden mb-4">
                          <img
                            src={marxistDialectics.principles[selectedPrinciple!].image}
                            alt={marxistDialectics.principles[selectedPrinciple!].title}
                            className="w-full h-full object-contain bg-amber-50"
                          />
                          <div className="absolute inset-0 bg-black/20"></div>
                        </div>
                      </div>
                    )}

                    <p className="text-amber-800 leading-relaxed mb-4">
                      {principleQuizzes[selectedPrinciple!].detail}
                    </p>

                    {/* Introduction */}
                    {principleQuizzes[selectedPrinciple!].detailedContent && (
                      <div className="mb-6">
                        <h4 className="text-lg font-bold text-amber-900 mb-3">Giới thiệu:</h4>
                        <p className="text-amber-800 leading-relaxed mb-4">
                          {principleQuizzes[selectedPrinciple!].detailedContent.introduction}
                        </p>

                        {/* Characteristics */}
                        <h4 className="text-lg font-bold text-amber-900 mb-3">Đặc điểm chính:</h4>
                        <ul className="space-y-2 mb-4">
                          {principleQuizzes[selectedPrinciple!].detailedContent.characteristics.map((char, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-amber-600 mt-1">•</span>
                              <span className="text-amber-800 text-sm leading-relaxed">{char}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Mechanism */}
                        <h4 className="text-lg font-bold text-amber-900 mb-3">Cơ chế hoạt động:</h4>
                        <p className="text-amber-800 leading-relaxed">
                          {principleQuizzes[selectedPrinciple!].detailedContent.mechanism}
                        </p>
                      </div>
                    )}

                    {/* Examples */}
                    <div className="mt-6">
                      <h4 className="text-lg font-bold text-amber-900 mb-3">Ví dụ minh họa:</h4>
                      <div className="space-y-4">
                        {principleQuizzes[selectedPrinciple!].examples.map((example, index) => (
                          <div key={index} className="bg-white bg-opacity-50 rounded-lg p-4 border-l-4 border-amber-400">
                            <div className="flex items-start space-x-3">
                              <span className="text-2xl">{example.visual}</span>
                              <div className="flex-1">
                                <h5 className="font-bold text-amber-900 mb-2">{example.title}</h5>
                                <p className="text-amber-800 text-sm leading-relaxed">
                                  {example.content}
                                </p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Question */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-amber-900 mb-6">
                      {principleQuizzes[selectedPrinciple!].questions[currentQuestion].question}
                    </h3>

                    {/* Options */}
                    <div className="space-y-4">
                      {principleQuizzes[selectedPrinciple!].questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          className={`w-full p-4 text-left rounded-xl border-2 transition-all duration-200 ${selectedAnswer === index
                            ? 'border-amber-500 bg-amber-50 text-amber-900'
                            : 'border-gray-200 hover:border-amber-300 hover:bg-amber-25'
                            }`}
                          onClick={() => handleAnswerSelect(index)}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="font-medium">{String.fromCharCode(65 + index)}. </span>
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Navigation */}
                  <div className="flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      disabled={selectedAnswer === null}
                      className={`px-8 py-3 rounded-lg font-medium transition-all ${selectedAnswer !== null
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                    >
                      {currentQuestion < principleQuizzes[selectedPrinciple!].questions.length - 1 ? 'Câu tiếp theo' : 'Xem kết quả'}
                    </button>
                  </div>
                </div>
              ) : (
                // Result Content
                <div className="p-8">
                  {/* Header Result */}
                  <div className="text-center mb-8">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                      <span className="text-4xl text-white">
                        {score === principleQuizzes[selectedPrinciple!].questions.length ? '🏆' :
                          score >= principleQuizzes[selectedPrinciple!].questions.length / 2 ? '🎉' : '📚'}
                      </span>
                    </div>
                    <h2 className="text-3xl font-bold text-amber-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                      Kết quả kiểm tra
                    </h2>
                    <div className="text-6xl font-bold text-amber-600 mb-4">
                      {score}/{principleQuizzes[selectedPrinciple!].questions.length}
                    </div>
                    <p className="text-xl text-amber-700 mb-2">
                      {score === principleQuizzes[selectedPrinciple!].questions.length ? 'Xuất sắc! Bạn đã hiểu rõ nguyên lý này!' :
                        score >= principleQuizzes[selectedPrinciple!].questions.length / 2 ? 'Tốt! Hãy ôn tập thêm để hiểu sâu hơn.' :
                          'Hãy đọc lại nội dung và thử lại nhé!'}
                    </p>
                    <p className="text-amber-600">
                      Tỷ lệ đúng: {Math.round((score / principleQuizzes[selectedPrinciple!].questions.length) * 100)}%
                    </p>
                  </div>

                  {/* Review Questions */}
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center">Đáp án chi tiết</h3>
                    <div className="space-y-6">
                      {principleQuizzes[selectedPrinciple!].questions.map((question, index) => (
                        <div key={index} className="bg-gray-50 rounded-xl p-6">
                          <div className="flex items-start space-x-3 mb-4">
                            <span className="flex-shrink-0 w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                              {index + 1}
                            </span>
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-amber-900 mb-3">
                                {question.question}
                              </h4>
                              <div className="space-y-2">
                                {question.options.map((option, optionIndex) => (
                                  <div
                                    key={optionIndex}
                                    className={`p-3 rounded-lg border-2 ${optionIndex === question.correct
                                      ? 'border-green-500 bg-green-50 text-green-800'
                                      : optionIndex === userAnswers[index]
                                        ? 'border-red-500 bg-red-50 text-red-800'
                                        : 'border-gray-200 bg-white text-gray-700'
                                      }`}
                                  >
                                    <span className="font-medium">{String.fromCharCode(65 + optionIndex)}. </span>
                                    {option}
                                    {optionIndex === question.correct && (
                                      <span className="ml-2 text-green-600 font-bold">✓ Đúng</span>
                                    )}
                                    {optionIndex === userAnswers[index] && optionIndex !== question.correct && (
                                      <span className="ml-2 text-red-600 font-bold">✗ Sai</span>
                                    )}
                                  </div>
                                ))}
                              </div>
                              <div className="mt-4 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                                <p className="text-blue-800">
                                  <span className="font-semibold">Giải thích:</span> {question.explanation}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-center">
                    <button
                      onClick={handleRestartQuiz}
                      className="px-8 py-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-lg hover:from-amber-600 hover:to-orange-600 transition-all font-medium"
                    >
                      Thử lại
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )
      }

      {/* Philosophy Blog Section */}
      <motion.div
        className="py-20 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-amber-900 mb-4 sm:mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Thư viện Tư tưởng Hồ Chí Minh
            </motion.h2>
            <motion.p
              className="text-xl text-amber-700 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Khám phá những tư tưởng sâu sắc, triết lý sống và những câu hỏi vĩnh cửu về con người và vũ trụ
            </motion.p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loadingBlog ? (
              <div className="col-span-full text-center py-20">
                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-amber-800"></div>
                <p className="mt-4 text-xl text-red-800">Đang tải bài viết...</p>
              </div>
            ) : errorBlog ? (
              <div className="col-span-full text-center py-20 text-red-600 text-xl">{errorBlog}</div>
            ) : blogs.length === 0 ? (
              <div className="col-span-full text-center py-20">
                <div className="ancient-scroll rounded-2xl p-12 max-w-md mx-auto">
                  <p className="text-xl text-red-900">Chưa có bài viết nào.</p>
                  <p className="text-amber-600 mt-2">Hãy quay lại sau để khám phá những tư tưởng mới.</p>
                </div>
              </div>
            ) : (
              blogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  className="philosophy-card cursor-pointer group overflow-hidden"
                  onClick={() => {
                    window.scrollTo(0, 0);
                    navigate(`/blogs/${blog._id}`);
                  }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                >
                  {/* Blog Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={blog.image || blog.thumbnail || 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <span className="bg-amber-800/90 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        {getTimeAgo(blog.updatedAt)} trước
                      </span>
                    </div>
                  </div>

                  {/* Blog Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-amber-900 mb-3 line-clamp-2 group-hover:text-amber-800 transition-colors">
                      {blog.title}
                    </h3>
                    <p className="text-amber-700 line-clamp-3 leading-relaxed mb-4">
                      {truncateContent(blog.content)}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-amber-600 italic">
                        {blog.author}
                      </span>
                      <div className="flex items-center text-amber-600 group-hover:text-amber-800 transition-colors">
                        <span className="text-sm mr-1">Đọc thêm</span>
                        <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            )}
          </div>

          {/* View All Button */}
          {blogs.length > 0 && (
            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <button
                onClick={() => navigate("/blogs")}
                className="px-8 py-4 bg-transparent border-2 border-amber-800 text-amber-800 rounded-full text-lg font-medium hover:bg-amber-800 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Xem tất cả bài viết
              </button>
            </motion.div>
          )}
        </div>
      </motion.div>

      <Footer />

      {/* Memory Game Modal */}
      {
        showMemoryGame && (
          <MemoryGame onClose={() => setShowMemoryGame(false)} />
        )
      }
    </div>
  );
}
