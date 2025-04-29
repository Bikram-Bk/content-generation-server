import { getContent } from "../services/gemini-services.js";


const generateContent = async (req, res) => {
    const { textField } = req.body;
    if (!textField) {
        return res.status(401).json({ message: "Cannot Leave Field empty" }); 
    }

    try {
        const data = await getContent(textField);
        res.json({ message: "Received text", content: data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export default generateContent;