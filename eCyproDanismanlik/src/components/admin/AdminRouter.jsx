import { Routes, Route } from 'react-router-dom';
import AdminLayout from './AdminLayout';
import Dashboard from './Dashboard';
import ContentManager from './ContentManager';
import BlogManager from './BlogManager';
import ServicesManager from './ServicesManager';
import TeamManager from './TeamManager';
import Analytics from './Analytics';
import AIContentGenerator from './AIContentGenerator';

const AdminRouter = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="content" element={<ContentManager />} />
        <Route path="blog" element={<BlogManager />} />
        <Route path="services" element={<ServicesManager />} />
        <Route path="team" element={<TeamManager />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="ai" element={<AIContentGenerator />} />
      </Routes>
    </AdminLayout>
  );
};

export default AdminRouter;
