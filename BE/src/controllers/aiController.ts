import { Request, Response } from "express";
import axios from "axios";

export const chatWithAI = async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      console.error("❌ GEMINI_API_KEY is missing");
      return res.status(500).json({ message: "Thiếu GEMINI_API_KEY trong file .env" });
    }

    if (!message) {
      return res.status(400).json({ message: "Message is required" });
    }

    // Chuyển đổi history sang định dạng Gemini API REST yêu cầu
    const contents = [];
    if (history && history.length > 0) {
      history.forEach((h: any) => {
        contents.push({
          role: h.role === "model" ? "model" : "user",
          parts: [{ text: h.parts[0].text }]
        });
      });
    }

    // Thêm tin nhắn hiện tại
    contents.push({
      role: "user",
      parts: [{ text: message }]
    });

    // System prompt cho trợ lý học tập môn Tư tưởng Hồ Chí Minh
    const systemPrompt = `Hệ thống: Bạn là trợ lý học tập chuyên về môn Tư tưởng Hồ Chí Minh.

Nhiệm vụ của bạn:
- Giải thích các nội dung thuộc Tư tưởng Hồ Chí Minh một cách chính xác, rõ ràng, dễ hiểu.
- Trình bày theo đúng tinh thần giáo trình đại học tại Việt Nam.
- Ưu tiên trả lời ngắn gọn, có thể dùng gạch đầu dòng khi phù hợp.
- Khi cần phân tích, phải có mở đầu – nội dung – kết luận rõ ràng.

Phạm vi nội dung:
- Cơ sở hình thành Tư tưởng Hồ Chí Minh
- Tư tưởng về độc lập dân tộc gắn liền với chủ nghĩa xã hội
- Tư tưởng về Đảng Cộng sản Việt Nam
- Tư tưởng về Nhà nước của dân, do dân, vì dân
- Tư tưởng về đại đoàn kết dân tộc
- Tư tưởng về văn hóa, đạo đức, con người
- Giá trị và ý nghĩa của Tư tưởng Hồ Chí Minh trong thời kỳ hiện nay

Nguyên tắc trả lời:
- Không suy diễn, không thêm quan điểm cá nhân.
- Không bàn luận chính trị hiện đại ngoài phạm vi học thuật.
- Nếu câu hỏi mơ hồ, yêu cầu người dùng làm rõ theo hướng học tập.
- Ngôn ngữ tiếng Việt, văn phong học thuật vừa phải, phù hợp sinh viên.

Nếu người dùng yêu cầu:
- "Giải thích": trình bày dễ hiểu, có ví dụ minh họa đơn giản.
- "Phân tích": trình bày có luận điểm, luận cứ.
- "So sánh": nêu điểm giống và khác rõ ràng.
- "Viết bài": viết đúng cấu trúc bài tiểu luận môn Tư tưởng Hồ Chí Minh.

`;
    if (contents.length > 0 && contents[0].role === "user") {
      contents[0].parts[0].text = systemPrompt + contents[0].parts[0].text;
    }

    // Sử dụng Gemini 3 Flash Preview - Model mới nhất có sẵn trên v1beta API
    const modelName = "gemini-3-flash-preview";
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;

    console.log(`🤖 Đang kết nối với: ${modelName}`);

    const response = await axios.post(url, {
      contents: contents
    });

    const data = response.data as any;

    if (data && data.candidates && data.candidates[0].content) {
      const text = data.candidates[0].content.parts[0].text;
      console.log("✅ Phản hồi từ AI thành công");

      res.status(200).json({
        reply: text,
        history: [...contents, { role: "model", parts: [{ text }] }]
      });
    } else {
      throw new Error("Không nhận được phản hồi hợp lệ từ Gemini API");
    }

  } catch (error: any) {
    console.error("❌ GEMINI_REST_ERROR:", error.response?.data || error.message);
    res.status(500).json({
      message: "Lỗi kết nối với AI. Vui lòng thử lại sau.",
      error: error.response?.data?.error?.message || error.message
    });
  }
};
