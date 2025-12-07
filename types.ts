import React from 'react';

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message: string;
  timestamp: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  features: string[];
  icon: React.ElementType;
}

export interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPremium?: boolean;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}