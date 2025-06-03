
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Send, X, User, Bot, Minimize2 } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hello! I'm MFPCL Assistant. I can help you with information about our services, products, courses, events, and farming guidance. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Knowledge base for the chatbot
  const knowledgeBase = {
    services: {
      keywords: ['service', 'services', 'what do you do', 'help', 'support'],
      response: "MFPCL offers comprehensive services including: 1) Collective Marketing - Better prices through group selling, 2) Input Supply - Quality seeds, fertilizers, and equipment at reasonable prices, 3) Training & Education - Modern farming techniques and organic certification, 4) Technical Support - Expert guidance and consultation, 5) Financial Services - Credit facilitation and insurance support. Would you like details about any specific service?"
    },
    products: {
      keywords: ['product', 'products', 'buy', 'store', 'shop', 'vegetables', 'grains', 'fertilizer', 'medicine'],
      response: "Our store offers: 🥬 Fresh Vegetables (Tomatoes, Onions, Potatoes, Leafy Greens), 🌾 Quality Grains (Basmati Rice, Wheat, Pulses), 🌱 Organic Fertilizers & Compost, 💊 Plant Medicines & Growth Boosters. All products are sourced directly from our member farmers ensuring quality and fair prices. You can visit our store page to browse and purchase."
    },
    courses: {
      keywords: ['course', 'courses', 'training', 'learn', 'education', 'skill'],
      response: "We offer various courses: 📚 Organic Farming Fundamentals (4 weeks, ₹2,500), 🌱 Advanced Crop Management (6 weeks, ₹4,000), 🔬 Post-Harvest Technology (3 weeks, ₹3,200), 💻 Digital Marketing for Farmers, and more. All courses include practical sessions, expert guidance, and certification. Would you like to know about enrollment?"
    },
    events: {
      keywords: ['event', 'events', 'workshop', 'expo', 'webinar', 'meeting'],
      response: "Upcoming events: 📅 Organic Certification Workshop (Feb 15), 🌾 Sustainable Farming Expo 2024 (Feb 25), 💻 Digital Marketing Webinar (Mar 5). Events include workshops, field visits, expert sessions, and networking opportunities. Registration is usually free for members. Check our events page for details!"
    },
    membership: {
      keywords: ['member', 'membership', 'join', 'become member', 'registration'],
      response: "Joining MFPCL is easy! Benefits include: ✅ Better prices for your produce, ✅ Discounted inputs and services, ✅ Free training programs, ✅ Technical support, ✅ Insurance and credit facilities. Membership fee is minimal and you can apply online or visit our office. Contact us at +91 12345 67890 for more details."
    },
    contact: {
      keywords: ['contact', 'phone', 'email', 'address', 'location', 'reach'],
      response: "📞 Phone: +91 12345 67890, +91 98765 43210\n📧 Email: info@mfpcl.com\n📍 Address: Manbhum District, West Bengal, India\n🕒 Office Hours: 9 AM - 5 PM (Mon-Sat)\nYou can also reach us through our WhatsApp community or social media pages."
    },
    organic: {
      keywords: ['organic', 'certification', 'natural', 'chemical free', 'sustainable'],
      response: "We specialize in organic farming! 🌱 We provide organic certification support, training on natural farming methods, supply of organic inputs, and help with organic market linkages. Our organic products fetch 20-30% higher prices. We also conduct regular workshops on organic farming techniques."
    },
    price: {
      keywords: ['price', 'cost', 'fee', 'expensive', 'cheap', 'rate'],
      response: "Our pricing is farmer-friendly: 💰 Membership fee: Minimal (varies by category), 📚 Course fees: ₹2,500-₹4,000, 🌾 Products: Competitive market rates with member discounts, 🎓 Training: Often free for members. We ensure transparent pricing and maximum value for money. Bulk orders get additional discounts!"
    },
    success: {
      keywords: ['success', 'result', 'benefit', 'achievement', 'story'],
      response: "Our members achieve great results! 📈 Average 25% income increase, 🌾 Improved crop quality and yield, 🏆 500+ active members, 💪 100% quality assurance, 🌱 Successful organic transitions. Many farmers have shared their success stories of doubling their income through our collective marketing approach!"
    }
  };

  const findBestResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Check for greetings
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! Welcome to MFPCL. I'm here to help you with information about our farming services, products, courses, and more. What would you like to know?";
    }

    // Check for thank you
    if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
      return "You're welcome! I'm always here to help. Is there anything else you'd like to know about MFPCL services or farming?";
    }

    // Search through knowledge base
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => lowerMessage.includes(keyword))) {
        return data.response;
      }
    }

    // Default response
    return "I'd be happy to help! I can provide information about:\n🌾 Our farming services and support\n🛒 Products available in our store\n📚 Training courses and workshops\n📅 Upcoming events and webinars\n👥 Membership benefits\n📞 Contact information\n\nPlease feel free to ask about any of these topics!";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse = findBestResponse(inputMessage);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  if (!isOpen) {
    return (
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 rounded-full w-14 h-14 bg-green-600 hover:bg-green-700 shadow-lg z-50"
        size="lg"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
      isMinimized ? 'w-80 h-16' : 'w-80 h-96'
    }`}>
      <Card className="h-full shadow-xl border-green-200">
        <CardHeader className="bg-green-600 text-white p-4 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="bg-green-500 p-1 rounded-full">
                <Bot className="h-4 w-4" />
              </div>
              <div>
                <CardTitle className="text-sm">MFPCL Assistant</CardTitle>
                <p className="text-xs text-green-100">Always here to help</p>
              </div>
            </div>
            <div className="flex space-x-1">
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsMinimized(!isMinimized)}
                className="text-white hover:bg-green-500 h-8 w-8 p-0"
              >
                <Minimize2 className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-green-500 h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardHeader>

        {!isMinimized && (
          <>
            <CardContent className="flex-1 p-4 overflow-y-auto max-h-64">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-[80%] ${
                      message.isBot ? '' : 'flex-row-reverse space-x-reverse'
                    }`}>
                      <div className={`p-2 rounded-full ${
                        message.isBot ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        {message.isBot ? (
                          <Bot className="h-4 w-4 text-green-600" />
                        ) : (
                          <User className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <div className={`p-3 rounded-lg ${
                        message.isBot 
                          ? 'bg-gray-100 text-gray-800' 
                          : 'bg-green-600 text-white'
                      }`}>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="flex items-start space-x-2">
                      <div className="p-2 rounded-full bg-green-100">
                        <Bot className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="p-3 rounded-lg bg-gray-100">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </CardContent>

            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <Input
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about our services..."
                  className="flex-1"
                />
                <Button 
                  onClick={handleSendMessage}
                  size="sm"
                  className="bg-green-600 hover:bg-green-700"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </>
        )}
      </Card>
    </div>
  );
};

export default ChatBot;
