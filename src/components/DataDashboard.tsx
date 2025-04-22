import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Card from './ui/Card';

interface DataDashboardProps {
  id?: string;
}

const DataDashboard: React.FC<DataDashboardProps> = ({ id = "dashboard" }) => {
  const [viewMode, setViewMode] = useState<'monthly' | 'quarterly'>('monthly');
  const chartRefs = useRef<Record<string, HTMLIFrameElement | null>>({
    sales: null,
    satisfaction: null,
    milestones: null
  });

  // Effect to handle iframe message events for responsive height
  useEffect(() => {
    const handleIframeMessage = (e: MessageEvent) => {
      if (typeof e.data === 'object' && e.data['datawrapper-height']) {
        for (const id in e.data['datawrapper-height']) {
          const iframeElement = document.getElementById(id);
          if (iframeElement) {
            iframeElement.style.height = e.data['datawrapper-height'][id] + 'px';
          }
        }
      }
    };

    window.addEventListener('message', handleIframeMessage);
    return () => {
      window.removeEventListener('message', handleIframeMessage);
    };
  }, []);

  // Handle resizing of iframes when window size changes
  useEffect(() => {
    const handleResize = () => {
      Object.values(chartRefs.current).forEach(iframe => {
        if (iframe && iframe.contentWindow) {
          iframe.contentWindow.postMessage('resize', '*');
        }
      });
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id={id} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Performance Dashboard</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dive into our business metrics and discover how TrendyCart is revolutionizing the e-commerce experience.
          </p>
        </motion.div>

        <div className="mb-8 flex justify-end">
          <div className="bg-white rounded-lg shadow-sm inline-flex p-1">
            <button
              onClick={() => setViewMode('monthly')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                viewMode === 'monthly' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setViewMode('quarterly')}
              className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                viewMode === 'quarterly' 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              Quarterly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {/* Sales Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Card className="p-4">
              <h3 className="text-xl font-semibold mb-4">Sales Growth</h3>
              <div className="relative overflow-hidden pb-2">
                <iframe 
                  ref={el => chartRefs.current.sales = el}
                  title="SALES GROWTH OF TRENDYCART" 
                  aria-label="Interactive area chart" 
                  id="datawrapper-chart-6MXqE" 
                  src="https://datawrapper.dwcdn.net/6MXqE/1/" 
                  scrolling="no" 
                  frameBorder="0" 
                  style={{ width: '100%', minWidth: '100%', border: 'none' }} 
                  height="403" 
                  data-external="1"
                  className="w-full"
                ></iframe>
              </div>
            </Card>
          </motion.div>

          {/* Customer Satisfaction & Milestones */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Customer Satisfaction Chart */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="p-4 h-full">
                <h3 className="text-xl font-semibold mb-4">Customer Satisfaction</h3>
                <div className="relative overflow-hidden pb-2">
                  <iframe 
                    ref={el => chartRefs.current.satisfaction = el}
                    title="VISUAL DATA OF CUSTOMER SATISFACTION" 
                    aria-label="Multiple Pies" 
                    id="datawrapper-chart-bp6P0" 
                    src="https://datawrapper.dwcdn.net/bp6P0/1/" 
                    scrolling="no" 
                    frameBorder="0" 
                    style={{ width: '100%', minWidth: '100%', border: 'none' }} 
                    height="333" 
                    data-external="1"
                    className="w-full"
                  ></iframe>
                </div>
              </Card>
            </motion.div>

            {/* Milestones Table */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Card className="p-4 h-full">
                <h3 className="text-xl font-semibold mb-4">Key Milestones</h3>
                <div className="relative overflow-hidden pb-2">
                  <iframe 
                    ref={el => chartRefs.current.milestones = el}
                    title="MILESTONES ACHIEVED SINCE 2020" 
                    aria-label="Table" 
                    id="datawrapper-chart-al7As" 
                    src="https://datawrapper.dwcdn.net/al7As/1/" 
                    scrolling="no" 
                    frameBorder="0" 
                    style={{ width: '100%', minWidth: '100%', border: 'none' }} 
                    height="373" 
                    data-external="1"
                    className="w-full"
                  ></iframe>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataDashboard;