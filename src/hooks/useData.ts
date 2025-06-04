
import { useState, useEffect } from 'react';

export const useBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch('/src/data/blogs.json');
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading };
};

export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/src/data/events.json');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  return { events, loading };
};

export const useCourses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('/src/data/courses.json');
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  return { courses, loading };
};

export const useServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch('/src/data/services.json');
        const data = await response.json();
        setServices(data);
      } catch (error) {
        console.error('Error fetching services:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading };
};

export const useProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/src/data/products.json');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading };
};

export const useGallery = () => {
  const [gallery, setGallery] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await fetch('/src/data/gallery.json');
        const data = await response.json();
        setGallery(data);
      } catch (error) {
        console.error('Error fetching gallery:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchGallery();
  }, []);

  return { gallery, loading };
};

// New hooks for the additional data
export const useBasicInfo = () => {
  const [basicInfo, setBasicInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBasicInfo = async () => {
      try {
        const response = await fetch('/src/data/basicInfo.json');
        const data = await response.json();
        setBasicInfo(data);
      } catch (error) {
        console.error('Error fetching basic info:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBasicInfo();
  }, []);

  return { basicInfo, loading };
};

export const useAbout = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await fetch('/src/data/about.json');
        const data = await response.json();
        setAbout(data);
      } catch (error) {
        console.error('Error fetching about data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  return { about, loading };
};

export const useContact = () => {
  const [contact, setContact] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await fetch('/src/data/contact.json');
        const data = await response.json();
        setContact(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContact();
  }, []);

  return { contact, loading };
};
