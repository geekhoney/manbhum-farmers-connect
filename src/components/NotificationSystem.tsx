
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { X, CheckCircle, Info, Calendar, ShoppingBag } from 'lucide-react';

interface Notification {
  id: string;
  type: 'success' | 'info' | 'event' | 'product';
  title: string;
  message: string;
  duration?: number;
}

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  const addNotification = (notification: Omit<Notification, 'id'>) => {
    const id = Date.now().toString();
    const newNotification = { ...notification, id };
    setNotifications(prev => [...prev, newNotification]);

    if (notification.duration !== 0) {
      setTimeout(() => {
        removeNotification(id);
      }, notification.duration || 5000);
    }
  };

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  // Expose addNotification globally
  useEffect(() => {
    (window as any).showNotification = addNotification;
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'success': return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'event': return <Calendar className="h-5 w-5 text-blue-600" />;
      case 'product': return <ShoppingBag className="h-5 w-5 text-purple-600" />;
      default: return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  return (
    <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
      {notifications.map((notification) => (
        <Card key={notification.id} className="bg-white shadow-lg border-l-4 border-l-green-600 animate-slide-in-right">
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              {getIcon(notification.type)}
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{notification.title}</h4>
                <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => removeNotification(notification.id)}
                className="h-6 w-6 p-0 hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default NotificationSystem;
