
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ChatBot from "@/components/ChatBot";
import NotificationSystem from "@/components/NotificationSystem";
import WelcomePopup from "@/components/WelcomePopup";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Certificates from "./pages/Certificates";
import Blogs from "./pages/Blogs";
import BlogDetails from "./pages/BlogDetails";
import Events from "./pages/Events";
import EventDetails from "./pages/EventDetails";
import Training from "./pages/Training";
import CourseDetails from "./pages/CourseDetails";
import Store from "./pages/Store";
import ProductDetails from "./pages/ProductDetails";
import Services from "./pages/Services";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <NotificationSystem />
      <BrowserRouter>
        <WelcomePopup />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/certificates" element={<Certificates />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news/blogs" element={<Blogs />} />
          <Route path="/news/blogs/:id" element={<BlogDetails />} />
          <Route path="/news/events" element={<Events />} />
          <Route path="/news/events/:id" element={<EventDetails />} />
          <Route path="/news/training" element={<Training />} />
          <Route path="/news/training/:id" element={<CourseDetails />} />
          <Route path="/store" element={<Store />} />
          <Route path="/store/product/:id" element={<ProductDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <ChatBot />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
