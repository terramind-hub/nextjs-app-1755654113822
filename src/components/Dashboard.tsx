'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { chartData, metrics } from '@/lib/data';
import { cn } from '@/lib/utils';

// DATA_SHAPES_USED:
// ChartDataPoint { name: string, value: number } from '@/lib/data'
// Metric { title: string, value: string, change: string } from '@/lib/data'

export default function Dashboard() {
  const [selectedMetric, setSelectedMetric] = useState<string>('');

  // NULL_SAFETY: Guard against undefined data with fallbacks
  const safeChartData = chartData || [];
  const safeMetrics = metrics || [];

  const handleMetricClick = (metricTitle: string) => {
    setSelectedMetric(metricTitle);
    console.log(`Selected metric: ${metricTitle}`);
  };

  const handleRefresh = () => {
    console.log('Refreshing dashboard data...');
    // In a real app, this would trigger data refetch
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <Button onClick={handleRefresh} variant="outline">
          Refresh Data
        </Button>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {safeMetrics.length === 0 ? (
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">No metrics available</p>
            </CardContent>
          </Card>
        ) : (
          safeMetrics.map((metric, index) => (
            <Card 
              key={index} 
              className={cn(
                "cursor-pointer transition-colors hover:bg-muted/50",
                selectedMetric === metric.title && "ring-2 ring-primary"
              )}
              onClick={() => handleMetricClick(metric.title)}
            >
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {metric.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{metric.value}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {metric.change}
                </p>
              </CardContent>
            </Card>
          ))
        )}
      </div>

      {/* Chart Section */}
      <Card>
        <CardHeader>
          <CardTitle>Analytics Overview</CardTitle>
        </CardHeader>
        <CardContent>
          {safeChartData.length === 0 ? (
            <div className="h-[300px] flex items-center justify-center">
              <p className="text-muted-foreground">No chart data available</p>
            </div>
          ) : (
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={safeChartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fontSize: 12 }}
                    tickLine={false}
                    axisLine={false}
                  />
                  <Tooltip 
                    contentStyle={{
                      backgroundColor: 'hsl(var(--background))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '6px'
                    }}
                  />
                  <Bar 
                    dataKey="value" 
                    fill="hsl(var(--primary))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button onClick={() => console.log('Export data')}>
          Export Data
        </Button>
        <Button variant="secondary" onClick={() => console.log('View reports')}>
          View Reports
        </Button>
        <Button variant="outline" onClick={() => console.log('Settings')}>
          Settings
        </Button>
      </div>
    </div>
  );
}