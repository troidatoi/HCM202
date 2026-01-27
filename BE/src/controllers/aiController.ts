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

    // Gộp system prompt vào tin nhắn đầu tiên để đảm bảo tiếng Việt và phong cách trả lời
    const systemPrompt = "Hệ thống: Bạn là trợ lý AI hữu ích của HopeHub. Bạn luôn trả lời bằng tiếng Việt thân thiện, lịch sự và ngắn gọn.\n\n";
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
