// Seed data for dashboard metrics and chart data

// Type definitions for data shapes
export interface ChartDataPoint {
  name: string;
  value: number;
}

export interface Metric {
  title: string;
  value: string;
  change: string;
}

// Chart data for dashboard visualizations
export const chartData: ChartDataPoint[] = [
  { name: 'Jan', value: 4000 },
  { name: 'Feb', value: 3000 },
  { name: 'Mar', value: 5000 },
  { name: 'Apr', value: 4500 },
  { name: 'May', value: 6000 },
  { name: 'Jun', value: 5500 },
  { name: 'Jul', value: 7000 },
  { name: 'Aug', value: 6500 },
  { name: 'Sep', value: 8000 },
  { name: 'Oct', value: 7500 },
  { name: 'Nov', value: 9000 },
  { name: 'Dec', value: 8500 },
];

// Metrics data for dashboard cards
export const metrics: Metric[] = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1% from last month',
  },
  {
    title: 'Active Users',
    value: '2,350',
    change: '+180.1% from last month',
  },
  {
    title: 'Sales',
    value: '12,234',
    change: '+19% from last month',
  },
  {
    title: 'Conversion Rate',
    value: '3.2%',
    change: '+4.75% from last month',
  },
];

// Additional chart data for different visualizations
export const pieChartData: ChartDataPoint[] = [
  { name: 'Desktop', value: 8400 },
  { name: 'Mobile', value: 5200 },
  { name: 'Tablet', value: 2800 },
  { name: 'Other', value: 1200 },
];

export const areaChartData: ChartDataPoint[] = [
  { name: 'Jan', value: 2400 },
  { name: 'Feb', value: 1398 },
  { name: 'Mar', value: 9800 },
  { name: 'Apr', value: 3908 },
  { name: 'May', value: 4800 },
  { name: 'Jun', value: 3800 },
  { name: 'Jul', value: 4300 },
];

// Alias exports for name consistency
export { chartData as seedChartData };
export { metrics as seedMetrics };

// Ecommerce baseline arrays (required for consistency)
export const products: any[] = [];
export const categories: any[] = [];
export const users: any[] = [];
export const orders: any[] = [];
export const reviews: any[] = [];
export const inventory: any[] = [];

// Alias exports for ecommerce data
export { products as seedProducts };
export { categories as seedCategories };
export { users as seedUsers };
export { orders as seedOrders };
export { reviews as seedReviews };
export { inventory as seedInventory };