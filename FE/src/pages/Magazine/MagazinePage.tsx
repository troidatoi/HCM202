import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
import Page1Img from "../../assets/Page1.png";
import Page2Img from "../../assets/Page2.png";

const CoverPage = () => (
    <img
        src={Page1Img}
        alt="Trang bìa"
        className="h-full w-auto object-contain select-none pointer-events-none shadow-sm"
    />
);

const Page2Component = () => (
    <img
        src={Page2Img}
        alt="Trang 2"
        className="h-full w-auto object-contain select-none pointer-events-none shadow-sm"
    />
);

const PartsTable = () => (
    <div className="h-full aspect-[8.5/11] flex flex-col bg-white p-8 overflow-y-auto shadow-sm">
        <h2 className="text-4xl font-serif text-red-900 mb-8 border-b-2 border-red-900 pb-2">PHỤ LỤC TẠP CHÍ</h2>
        <div className="flex-1 space-y-4 overflow-y-auto">
            <div className="flex justify-between items-end border-bottom border-dotted border-stone-400">
                <span className="text-lg font-bold">LỜI MỞ ĐẦU (EDITORIAL)</span>
                <span className="text-lg">Trang 02</span>
            </div>
            <div className="pt-4">
                <h3 className="text-xl font-bold text-red-700 mb-2">PHẦN 1. NỘI DUNG BÀI HỌC CỐT LÕI</h3>
                <div className="space-y-2 pl-4">
                    <p className="flex justify-between"><span>KHÁI QUÁT MỤC 5.3</span> <span>Trang 03</span></p>
                    <p className="flex justify-between"><span>TƯ TƯỞNG ĐẠI ĐOÀN KẾT TRONG ĐƯỜNG LỐI ĐẢNG</span> <span>Trang 04</span></p>
                    <p className="flex justify-between"><span>CÁC MỐC LỊCH SỬ QUAN TRỌNG</span> <span>Trang 05</span></p>
                    <p className="flex justify-between"><span>ĐƯỜNG LỐI ĐỐI NGOẠI QUA CÁC KỲ ĐẠI HỘI</span> <span>Trang 06</span></p>
                    <p className="flex justify-between"><span>KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC</span> <span>Trang 07</span></p>
                    <p className="flex justify-between"><span>NỀN TẢNG LIÊN MINH CÔNG – NÔNG – TRÍ</span> <span>Trang 08</span></p>
                    <p className="flex justify-between"><span>CÁC GIẢI PHÁP TĂNG CƯỜNG ĐOÀN KẾT</span> <span>Trang 09</span></p>
                    <p className="flex justify-between"><span>KẾT HỢP ĐOÀN KẾT DÂN TỘC & QUỐC TẾ</span> <span>Trang 10</span></p>
                </div>
            </div>
            <div className="pt-4">
                <h3 className="text-xl font-bold text-red-700 mb-2">PHẦN 2. INFOGRAPHIC</h3>
                <div className="space-y-2 pl-4">
                    <p className="flex justify-between"><span>INFOGRAPHIC TỔNG QUAN</span> <span>Trang 11</span></p>
                    <p className="flex justify-between"><span>INFOGRAPHIC LIÊN MINH & HỘI NHẬP</span> <span>Trang 12</span></p>
                </div>
            </div>
            <div className="pt-4">
                <h3 className="text-xl font-bold text-red-700 mb-2">PHẦN 3. TRÒ CHƠI</h3>
                <div className="space-y-2 pl-4">
                    <p className="flex justify-between"><span>ĐUỔI HÌNH BẮT CHỮ (CÂU HỎI)</span> <span>Trang 13</span></p>
                    <p className="flex justify-between"><span>GIẢI MÃ TƯ TƯỞNG</span> <span>Trang 14</span></p>
                </div>
            </div>
        </div>
    </div>
);

const EditorialPage = () => (
    <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
        <div className="flex items-center gap-6 mb-8">
            <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center text-white text-3xl font-bold italic">H</div>
            <div>
                <h2 className="text-4xl font-bold text-red-900">EDITORIAL</h2>
                <p className="text-stone-500 uppercase tracking-widest text-sm">Lời mở đầu</p>
            </div>
        </div>
        <div className="flex-1 text-lg leading-relaxed text-stone-800 space-y-6">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-red-900 first-letter:float-left first-letter:mr-3">
                Chào mừng các bạn đến với ấn phẩm đặc biệt của Tạp chí Hùng. Trong số này, chúng tôi tập trung đi sâu vào nghiên cứu và truyền tải những giá trị cốt lõi của Chương 5.3 – Tư tưởng Hồ Chí Minh về Đại đoàn kết dân tộc và Đoàn kết quốc tế.
            </p>
            <p>
                Quyển tạp chí này được ra đời với mục đích không chỉ là tài liệu học tập thuần túy, mà còn là một không gian sáng tạo, nơi kiến thức lịch sử và tư tưởng được trình bày một cách sinh động qua hình ảnh, infographic và các trò chơi tương tác.
            </p>
            <p>
                Chúng tôi chọn hình thức tạp chí để giúp các bạn tiếp cận nội dung một cách trực quan, dễ hiểu và truyền cảm hứng hơn. Qua đó, khẳng định vai trò vô cùng quan trọng của khối đại đoàn kết trong sự nghiệp xây dựng và bảo vệ Tổ quốc hôm nay.
            </p>
            <div className="pt-8 border-t border-stone-200 italic text-stone-600">
                — Ban biên tập: Hồng & Nhóm thực hiện
            </div>
        </div>
    </div>
);

const MagazinePage: React.FC = () => {
    const [currentSpread, setCurrentSpread] = useState(0);
    const totalPages = 22; // Increased to accommodate more pages
    const totalSpreads = Math.ceil(totalPages / 2);

    const nextPage = () => setCurrentSpread((prev) => Math.min(prev + 1, totalSpreads - 1));
    const prevPage = () => setCurrentSpread((prev) => Math.max(prev - 1, 0));

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowRight") nextPage();
            if (e.key === "ArrowLeft") prevPage();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    const renderPageContent = (index: number) => {
        if (index < 0 || index >= totalPages) return null;

        switch (index) {
            case 0: return <CoverPage />;
            case 1: return <Page2Component />;
            case 2: return <EditorialPage />;
            case 3: return <PartsTable />;
            case 4: return (
                <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">TRANG 3 – KHÁI QUÁT MỤC 5.3</h2>
                    <div className="space-y-6 text-lg">
                        <p className="font-bold text-red-700 italic">Vị trí mục 5.3 trong Chương V:</p>
                        <p>Mục 5.3 giữ vai trò nòng cốt trong Chương V, kết nối tư tưởng về đại đoàn kết dân tộc với tầm nhìn chiến lược về đoàn kết quốc tế.</p>
                        <p className="font-bold text-red-700 italic">Vai trò của đại đoàn kết trong giai đoạn hiện nay:</p>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>Là động lực chủ yếu và là nguồn lực nội sinh to lớn để phát triển đất nước.</li>
                            <li>Giúp gắn kết 54 dân tộc anh em thành một khối thống nhất không thể chia cắt.</li>
                            <li>Tạo sức mạnh tổng hợp để thực hiện thắng lợi sự nghiệp CNH - HĐH.</li>
                        </ul>
                    </div>
                </div>
            );
            case 5: return (
                <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2 text-sm md:text-2xl">5.3.1: TƯ TƯỞNG ĐẠI ĐOÀN KẾT TRONG ĐƯỜNG LỐI ĐẢNG</h2>
                    <div className="space-y-6 text-lg">
                        <div className="bg-red-50 p-6 border-l-4 border-red-700">
                            <p className="font-bold">Khơi dậy sức mạnh dân tộc & quốc tế:</p>
                            <p>Đảng luôn nhất quán quan điểm: Đoàn kết dân tộc là cơ sở để đoàn kết quốc tế, và đoàn kết quốc tế làm tăng thêm sức mạnh cho dân tộc.</p>
                        </div>
                        <p className="font-bold text-red-700">Nguyên tắc đặt lợi ích dân tộc lên hàng đầu:</p>
                        <p>Mọi chủ trương, chính sách của Đảng đều xuất phát từ lợi ích của nhân dân, lấy lợi ích tối cao của quốc gia - dân tộc làm điểm tương đồng.</p>
                    </div>
                </div>
            );
            case 6: return (
                <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">5.3.1: CÁC MỐC LỊCH SỬ QUAN TRỌNG</h2>
                    <div className="relative border-l-2 border-red-800 ml-4 pl-8 space-y-12">
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-red-800"></div>
                            <h3 className="text-xl font-bold text-red-900">Nghị quyết 07/NQ-TW (1993)</h3>
                            <p>Nghị quyết về Đại đoàn kết dân tộc và tăng cường Mặt trận Dân tộc thống nhất trong tình hình mới.</p>
                        </div>
                        <div className="relative">
                            <div className="absolute -left-[41px] top-1 w-4 h-4 rounded-full bg-red-800"></div>
                            <h3 className="text-xl font-bold text-red-900">Đại hội VIII (1996)</h3>
                            <p>Khẳng định đại đoàn kết toàn dân tộc là đường lối chiến lược của cách mạng Việt Nam, là động lực và nguồn lực to lớn.</p>
                        </div>
                    </div>
                </div>
            );
            case 7: return (
                <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">5.3.1: ĐƯỜNG LỐI ĐỐI NGOẠI</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
                        <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
                            <h3 className="font-bold text-blue-900 mb-2">Giai đoạn trước</h3>
                            <p className="italic">“Việt Nam muốn là bạn với tất cả các nước...”</p>
                        </div>
                        <div className="p-6 bg-red-50 border border-red-200 rounded-xl">
                            <h3 className="font-bold text-red-900 mb-2">Giai đoạn hiện nay</h3>
                            <p className="font-bold">“Việt Nam là bạn, là đối tác tin cậy và thành viên có trách nhiệm trong cộng đồng quốc tế”</p>
                        </div>
                    </div>
                    <div className="mt-8 p-6 bg-amber-50 rounded-xl">
                        <h3 className="font-bold mb-2">Đại hội XIII</h3>
                        <p>Tiếp tục đẩy mạnh đối ngoại đa phương, chủ động và tích cực hội nhập quốc tế toàn diện, sâu rộng.</p>
                    </div>
                </div>
            );
            case 8: return (
                <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">5.3.2: KHỐI ĐẠI ĐOÀN KẾT</h2>
                    <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-red-900 text-white p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Vai trò Mặt trận</h3>
                                <p className="text-sm">Là liên minh chính trị, hiệp thương và phối hợp hành động giữa các tổ chức.</p>
                            </div>
                            <div className="bg-amber-600 text-white p-6 rounded-lg text-center">
                                <h3 className="text-xl font-bold mb-2">Liên minh cốt lõi</h3>
                                <p className="text-sm">Liên minh giữa công nhân, nông dân và đội ngũ trí thức.</p>
                            </div>
                        </div>
                        <p className="text-lg font-bold italic text-center text-red-800 mt-8">“Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công.”</p>
                    </div>
                </div>
            );
            case 9: return (
                <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">5.3.2: NỀN TẢNG LIÊN MINH</h2>
                    <div className="space-y-4">
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center text-white text-2xl">⚙️</div>
                            <div><h3 className="font-bold">Giai cấp Công nhân</h3><p>Lực lượng lãnh đạo cách mạng thông qua đội tiên phong là Đảng Cộng sản.</p></div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center text-white text-2xl">🌾</div>
                            <div><h3 className="font-bold">Giai cấp Nông dân</h3><p>Lực lượng đông đảo nhất, là 'quân chủ lực' của cách mạng.</p></div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center text-white text-2xl">🎓</div>
                            <div><h3 className="font-bold">Đội ngũ Trí thức</h3><p>Lực lượng sáng tạo, nòng cốt trong việc tiếp thu và vận dụng khoa học kỹ thuật.</p></div>
                        </div>
                    </div>
                </div>
            );
            case 10: return (
                <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">5.3.2: GIẢI PHÁP TĂNG CƯỜNG</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="p-4 border border-stone-200 rounded-lg shadow-sm text-center">
                            <div className="text-3xl mb-2">📢</div>
                            <h4 className="font-bold mb-2">Tuyên truyền</h4>
                            <p className="text-sm">Nâng cao nhận thức về tầm quan trọng của đoàn kết.</p>
                        </div>
                        <div className="p-4 border border-stone-200 rounded-lg shadow-sm text-center">
                            <div className="text-3xl mb-2">🤝</div>
                            <h4 className="font-bold mb-2">Quan hệ</h4>
                            <p className="text-sm">Gắn kết bền chặt giữa Nhân dân - Đảng - Nhà nước.</p>
                        </div>
                        <div className="p-4 border border-stone-200 rounded-lg shadow-sm text-center">
                            <div className="text-3xl mb-2">⚖️</div>
                            <h4 className="font-bold mb-2">Hài hòa</h4>
                            <p className="text-sm">Giải quyết đúng đắn mối quan hệ giữa các lợi ích.</p>
                        </div>
                    </div>
                </div>
            );
            case 11: return (
                <div className="h-full aspect-[8.5/11] flex flex-col font-serif bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">5.3.3: KẾT HỢP ĐOÀN KẾT</h2>
                    <div className="space-y-6 text-lg">
                        <p>Cách mạng Việt Nam là một bộ phận khăng khít của cách mạng thế giới. Sức mạnh dân tộc kết hợp với sức mạnh thời đại tạo nên sức mạnh tổng hợp to lớn.</p>
                        <div className="p-6 bg-white rounded-2xl shadow-inner border border-red-100">
                            <h3 className="text-xl font-bold text-red-800 mb-4 text-center">MỤC TIÊU TỔNG QUÁT</h3>
                            <p className="text-2xl font-bold text-center leading-relaxed">DÂN GIÀU – NƯỚC MẠNH – DÂN CHỦ – CÔNG BẰNG – VĂN MINH</p>
                        </div>
                    </div>
                </div>
            );
            case 12: return (
                <div className="h-full w-full bg-white p-8 flex flex-col">
                    <h2 className="text-2xl font-bold text-red-900 mb-4 text-center">INFOGRAPHIC TỔNG QUAN</h2>
                    <div className="flex-1 border-2 border-dashed border-stone-300 rounded-3xl flex flex-col items-center justify-center p-4">
                        <div className="w-40 h-40 rounded-full bg-red-900 flex items-center justify-center text-white text-center font-bold px-2">ĐẠI ĐOÀN KẾT</div>
                        <div className="flex gap-12 mt-8">
                            <div className="flex flex-col items-center"><div className="w-1 h-12 bg-red-400"></div><div className="p-3 bg-red-100 rounded-lg text-xs font-bold">TRONG NƯỚC</div></div>
                            <div className="flex flex-col items-center"><div className="w-1 h-12 bg-red-400"></div><div className="p-3 bg-red-100 rounded-lg text-xs font-bold">QUỐC TẾ</div></div>
                        </div>
                    </div>
                </div>
            );
            case 13: return (
                <div className="h-full w-full bg-stone-50 p-8 flex flex-col">
                    <h2 className="text-2xl font-bold text-red-900 mb-4 text-center">LIÊN MINH & HỘI NHẬP</h2>
                    <div className="flex-1 flex items-center justify-center">
                        <div className="relative w-64 h-64 border-4 border-amber-400 rounded-full flex items-center justify-center">
                            <div className="absolute top-0 -translate-y-1/2 p-2 bg-white border border-amber-400 rounded-md font-bold text-xs">CÔNG NHÂN</div>
                            <div className="absolute left-0 -translate-x-1/2 p-2 bg-white border border-amber-400 rounded-md font-bold text-xs">NÔNG DÂN</div>
                            <div className="absolute right-0 translate-x-1/2 p-2 bg-white border border-amber-400 rounded-md font-bold text-xs">TRÍ THỨC</div>
                            <div className="text-center p-4">
                                <h3 className="text-xl font-bold">HỘI NHẬP</h3>
                                <p className="text-xs">Việt Nam hội nhập quốc tế</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
            case 14: return (
                <div className="h-full aspect-[8.5/11] flex flex-col bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 text-center">ĐUỔI HÌNH BẮT CHỮ</h2>
                    <div className="grid grid-cols-2 gap-6 flex-1">
                        {[1, 2, 3, 4, 5, 6].map(i => (
                            <div key={i} className="bg-stone-100 rounded-2xl flex items-center justify-center border-2 border-stone-200 relative overflow-hidden group cursor-pointer">
                                <span className="text-4xl">📷</span>
                                <div className="absolute inset-0 bg-red-900/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <span className="text-white font-bold">Hình ảnh {i}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            );
            case 15: return (
                <div className="h-full w-full bg-stone-50 p-6 md:p-10 flex flex-col items-center justify-center">
                    <h2 className="text-3xl font-bold text-red-900 mb-8">GIẢI MÃ TƯ TƯỞNG</h2>
                    <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-stone-200 text-center">
                        <p className="text-lg mb-6 italic">“Dễ mười lần không dân cũng chịu, khó vạn lần dân liệu cũng xong.”</p>
                        <p className="border-t border-stone-100 pt-4 text-stone-500">Người chơi giải mã câu nói trên qua các từ khóa gợi ý.</p>
                    </div>
                </div>
            );
            case 16: return (
                <div className="h-full aspect-[8.5/11] flex flex-col bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">ĐẠI ĐOÀN KẾT TRONG NƯỚC</h2>
                    <div className="flex-1 bg-stone-100 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-red-800 mb-4 text-sm md:text-xl">Mặt trận, dân tộc, cộng đồng</h3>
                        <p>Hình ảnh các dân tộc anh em đoàn kết tại ngày hội lớn. Khối đại đoàn kết là nguồn sức mạnh vô tận.</p>
                        <div className="mt-8 flex gap-4 overflow-x-auto pb-4">
                            {[1, 2, 3].map(i => <div key={i} className="min-w-[150px] h-32 bg-stone-200 rounded-xl flex items-center justify-center text-xs text-stone-400">Hình ảnh dân tộc {i}</div>)}
                        </div>
                    </div>
                </div>
            );
            case 17: return (
                <div className="h-full aspect-[8.5/11] flex flex-col bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">LIÊN MINH CÔNG–NÔNG–TRÍ</h2>
                    <div className="flex-1 bg-stone-100 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-red-800 mb-4 text-sm md:text-xl">Sản xuất, nông nghiệp, trí thức</h3>
                        <p>Liên minh bền chặt trong thời đại kinh tế số. Công nghiệp hóa gắn liền với nông nghiệp hiện đại.</p>
                    </div>
                </div>
            );
            case 18: return (
                <div className="h-full aspect-[8.5/11] flex flex-col bg-white p-8 overflow-y-auto shadow-sm">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">ĐOÀN KẾT QUỐC TẾ</h2>
                    <div className="flex-1 bg-stone-100 rounded-2xl p-6">
                        <h3 className="text-xl font-bold text-red-800 mb-4 text-sm md:text-xl">Gìn giữ hòa bình LHQ – Ngoại giao đa phương</h3>
                        <p>Việt Nam tự hào đóng góp vào sự ổn định của thế giới, khẳng định vị thế trên trường quốc tế.</p>
                    </div>
                </div>
            );
            case 19: return (
                <div className="h-full w-full flex flex-col font-serif uppercase">
                    <h2 className="text-3xl font-bold text-red-900 mb-6 border-b-2 border-red-900 pb-2">CÂU HỎI ÔN TẬP</h2>
                    <div className="space-y-4 text-sm md:text-lg">
                        <p className="font-bold">1. Câu nói “Đoàn kết là sức mạnh” của ai?</p>
                        <p className="font-bold">2. Ai là nòng cốt của khối đại đoàn kết?</p>
                        <p className="font-bold">3. Việt Nam hội nhập quốc tế theo phương châm nào?</p>
                        <p className="mt-8 text-stone-400 italic font-normal lowercase">(Trắc nghiệm, Điền từ)</p>
                    </div>
                </div>
            );
            case 20: return (
                <div className="h-full w-full bg-red-900 text-white p-6 md:p-10 flex flex-col font-serif">
                    <h2 className="text-3xl font-bold mb-8 border-b border-white/30 pb-2">ĐÁP ÁN & GIẢI THÍCH</h2>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-bold text-yellow-500">1. Hồ Chí Minh</h3>
                            <p className="text-sm">Đoàn kết là chiến lược xuyên suốt.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-yellow-500">2. Công - Nông - Trí</h3>
                            <p className="text-sm">Liên minh ba thành phần nòng cốt.</p>
                        </div>
                    </div>
                </div>
            );
            default:
                return (
                    <div className="h-full w-full flex flex-col items-center justify-center p-10 font-serif opacity-30">
                        <h2 className="text-3xl font-bold text-red-900 mb-4 uppercase">Trang {index}</h2>
                        <p className="text-xl text-stone-600 italic">Hết nội dung</p>
                        <div className="mt-8 text-6xl">📖</div>
                    </div>
                );
        }
    };

    // Simplified spread logic for side-by-side viewing starting from page 0
    const leftPageIndex = currentSpread * 2;
    const rightPageIndex = currentSpread * 2 + 1;

    return (
        <div className="min-h-screen flex flex-col bg-[#f0ebd8]">
            <Header />

            <main className="flex-1 flex flex-col lg:flex-row items-center justify-center p-4 lg:p-8 gap-8 overflow-hidden">
                {/* Left Section: Magazine (Natural Photo Display) */}
                <div className="flex-[3] flex items-center justify-center w-full px-4 overflow-hidden h-[75vh]">
                    <div className="flex h-full items-center justify-center relative gap-0">
                        {/* Left Page Container */}
                        <div className="h-full flex items-center justify-end overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`left-${currentSpread}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full"
                                >
                                    {renderPageContent(leftPageIndex)}
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Thin Spine Line */}
                        <div className="h-[95%] w-[1px] bg-black/10 z-20 shadow-[0_0_8px_rgba(0,0,0,0.05)]"></div>

                        {/* Right Page Container */}
                        <div className="h-full flex items-center justify-start overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`right-${currentSpread}`}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="h-full"
                                >
                                    {renderPageContent(rightPageIndex)}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                {/* Right Section: Controls Sidebar */}
                <div className="w-full lg:w-80 flex flex-col items-center justify-center gap-8 bg-white/40 backdrop-blur-md p-8 rounded-3xl border border-white shadow-xl">
                    <div className="text-center">
                        <h2 className="text-3xl font-serif text-red-900 font-bold mb-1">Tạp Chí Hùng</h2>
                        <p className="text-stone-500 uppercase tracking-widest text-xs">Phát hành 2026</p>
                    </div>

                    <div className="flex flex-col items-center gap-4 w-full">
                        <div className="flex items-center justify-center gap-6">
                            <button
                                onClick={prevPage}
                                disabled={currentSpread === 0}
                                className="w-14 h-14 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-red-900 hover:bg-red-800 hover:text-white transition-all disabled:opacity-20"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                            </button>
                            <div className="text-center min-w-[100px]">
                                <div className="text-red-900 font-bold text-2xl leading-none">{currentSpread + 1}</div>
                                <div className="text-stone-500 text-[10px] uppercase mt-1">Bản thảo</div>
                            </div>
                            <button
                                onClick={nextPage}
                                disabled={currentSpread === totalSpreads - 1}
                                className="w-14 h-14 rounded-full bg-white border border-stone-200 shadow-sm flex items-center justify-center text-red-900 hover:bg-red-800 hover:text-white transition-all disabled:opacity-20"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                            </button>
                        </div>

                        {/* Progress Indicator */}
                        <div className="w-full mt-4">
                            <div className="flex justify-between text-[10px] text-stone-400 uppercase mb-2">
                                <span>Tiến độ</span>
                                <span>{Math.round(((currentSpread + 1) / totalSpreads) * 100)}%</span>
                            </div>
                            <div className="w-full bg-stone-200 h-1.5 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-red-900"
                                    animate={{ width: `${((currentSpread + 1) / totalSpreads) * 100}%` }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full border-t border-stone-200 pt-6">
                        <p className="text-stone-600 text-sm italic text-center leading-relaxed">
                            Mẹo: Bạn có thể sử dụng phím mũi tên trên bàn phím để lật trang nhanh hơn.
                        </p>
                    </div>

                    <button
                        onClick={() => setCurrentSpread(0)}
                        className="mt-auto text-red-800 text-sm font-semibold hover:underline"
                    >
                        Quay lại trang đầu
                    </button>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MagazinePage;
