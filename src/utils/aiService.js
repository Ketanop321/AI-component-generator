import axios from "axios";

const callGroqAPI = async (prompt) => {
  try {
    const response = await axios.post("http://localhost:5000/generate", {
      framework: "general",
      prompt
    });
    return response.data?.code;
  } catch (error) {
    console.error("Error calling Groq API:", error);
    throw error;
  }
};

export const generateContent = async (prompt) => {
  return callGroqAPI(prompt);
};

export const streamContent = async (prompt, onChunk) => {
  try {
    const result = await callGroqAPI(prompt);
    onChunk(result);
    return result;
  } catch (error) {
    console.error("Error streaming content:", error);
    throw error;
  }
};

export const generateCode = async (description) => {
  const prompt = `Generate clean, well-commented code based on this description: ${description}`;
  return callGroqAPI(prompt);
};

export const improveCode = async (code, instruction) => {
  const prompt = `Improve this code according to the instruction: "${instruction}"\n\nCode:\n${code}`;
  return callGroqAPI(prompt);
};

export const explainCode = async (code) => {
  const prompt = `Explain this code in detail:\n\n${code}`;
  return callGroqAPI(prompt);
};
