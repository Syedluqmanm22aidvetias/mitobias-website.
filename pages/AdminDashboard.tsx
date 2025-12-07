import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Trash2, Download, Search, Inbox, Settings, X, Save, Loader2 } from 'lucide-react';
import { MockBackend } from '../services/mockBackend';
import { ContactSubmission } from '../types';

const AdminDashboard: React.FC = () => {
  const [messages, setMessages] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Settings State
  const [showSettings, setShowSettings] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [updatingCreds, setUpdatingCreds] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!MockBackend.isAuthenticated()) {
      navigate('/admin/login');
      return;
    }
    loadMessages();
  }, [navigate]);

  const loadMessages = async () => {
    setLoading(true);
    const data = await MockBackend.getMessages();
    setMessages(data);
    setLoading(false);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      await MockBackend.deleteMessage(id);
      loadMessages();
    }
  };

  const handleLogout = () => {
    MockBackend.logout();
    navigate('/admin/login');
  };

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Name,Email,Phone,Company,Message,Date\n"
      + messages.map(e => `"${e.name}","${e.email}","${e.phone}","${e.company}","${e.message}","${e.timestamp}"`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "mitobias_leads.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUpdateCreds = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newUsername || !newPassword) {
        alert("Please fill in both fields");
        return;
    }
    setUpdatingCreds(true);
    await MockBackend.updateCredentials(newUsername, newPassword);
    setUpdatingCreds(false);
    setShowSettings(false);
    alert('Credentials updated successfully. Please login again.');
    handleLogout();
  };

  const filteredMessages = messages.filter(msg => 
    msg.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    msg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.company?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-neutral-50 text-black font-sans selection:bg-gold-500 selection:text-white relative">
      {/* Admin Navbar */}
      <nav className="border-b border-neutral-200 h-20 flex items-center justify-between px-8 bg-white sticky top-0 z-40 shadow-sm">
        <span className="font-serif font-bold text-xl tracking-wider text-black">MITOBIAS <span className="text-gold-500 text-xs font-sans tracking-[0.2em] ml-2">ADMIN</span></span>
        
        <div className="flex items-center space-x-6">
            <button onClick={() => setShowSettings(true)} className="flex items-center text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-black transition-colors">
                <Settings className="h-4 w-4 mr-2" /> Settings
            </button>
            <button onClick={handleLogout} className="flex items-center text-xs uppercase tracking-[0.2em] text-neutral-500 hover:text-black transition-colors">
                <LogOut className="h-4 w-4 mr-2" /> Logout
            </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h1 className="text-3xl font-serif font-bold mb-2 text-black">Lead Management</h1>
            <p className="text-neutral-500 text-sm font-light">Overview of incoming inquiries.</p>
          </div>
          <div className="flex gap-4 mt-6 md:mt-0 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0 group">
               <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-gold-500 transition-colors" />
               <input 
                  type="text" 
                  placeholder="Search database..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white border border-neutral-200 rounded-none pl-10 pr-4 py-3 text-sm w-full md:w-64 focus:outline-none focus:border-gold-500 transition-colors"
               />
            </div>
            <button 
              onClick={handleExport}
              className="bg-black text-white px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:bg-gold-500 transition-colors flex items-center shadow-lg shadow-black/10"
            >
              <Download className="h-4 w-4 mr-2" /> Export CSV
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="bg-white border border-neutral-200 shadow-sm overflow-hidden">
          {loading ? (
             <div className="p-20 text-center text-gray-400 font-light uppercase tracking-widest text-xs">Syncing Database...</div>
          ) : filteredMessages.length === 0 ? (
             <div className="p-20 text-center text-gray-400 flex flex-col items-center">
                <Inbox className="h-10 w-10 mb-6 opacity-30" strokeWidth={1} />
                <span className="font-light uppercase tracking-widest text-xs">No records found</span>
             </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="bg-neutral-50 text-neutral-500 text-[10px] uppercase tracking-[0.2em] font-bold">
                  <tr>
                    <th className="px-6 py-5 border-b border-neutral-200">Date</th>
                    <th className="px-6 py-5 border-b border-neutral-200">Name</th>
                    <th className="px-6 py-5 border-b border-neutral-200">Company</th>
                    <th className="px-6 py-5 border-b border-neutral-200">Contact</th>
                    <th className="px-6 py-5 border-b border-neutral-200">Message</th>
                    <th className="px-6 py-5 border-b border-neutral-200 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-100">
                  {filteredMessages.map((msg) => (
                    <tr key={msg.id} className="hover:bg-neutral-50 transition-colors group">
                      <td className="px-6 py-5 text-xs text-neutral-500 font-mono">
                        {new Date(msg.timestamp).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-5 text-sm font-medium text-black">
                        {msg.name}
                      </td>
                      <td className="px-6 py-5 text-sm text-neutral-500 font-light">
                        {msg.company || '—'}
                      </td>
                      <td className="px-6 py-5 text-sm text-neutral-500">
                        <div className="flex flex-col">
                          <span className="text-black mb-1">{msg.email}</span>
                          <span className="text-xs text-neutral-400 font-mono">{msg.phone}</span>
                        </div>
                      </td>
                      <td className="px-6 py-5 text-sm text-neutral-500 font-light max-w-xs truncate">
                        {msg.message}
                      </td>
                      <td className="px-6 py-5 text-right">
                        <button 
                          onClick={() => handleDelete(msg.id)}
                          className="text-neutral-400 hover:text-red-500 transition-colors p-2"
                          title="Delete Record"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>

      {/* Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm" onClick={() => setShowSettings(false)}></div>
            <div className="bg-white border border-neutral-200 shadow-2xl p-8 max-w-sm w-full relative z-10 animate-fade-in-up">
                <button 
                    onClick={() => setShowSettings(false)}
                    className="absolute top-4 right-4 text-neutral-400 hover:text-black transition-colors"
                >
                    <X className="h-5 w-5" />
                </button>
                
                <h2 className="text-xl font-serif font-bold text-black mb-6">Security Settings</h2>
                
                <form onSubmit={handleUpdateCreds} className="space-y-6">
                    <div className="group">
                        <label className="block text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">New Username</label>
                        <input
                        type="text"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                        className="w-full bg-neutral-50 border border-neutral-200 text-black px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-sm"
                        placeholder="Enter new username"
                        />
                    </div>
                    <div className="group">
                        <label className="block text-xs uppercase tracking-[0.2em] text-neutral-400 mb-2">New Password</label>
                        <input
                        type="password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full bg-neutral-50 border border-neutral-200 text-black px-4 py-3 focus:outline-none focus:border-gold-500 transition-colors text-sm"
                        placeholder="Enter new password"
                        />
                    </div>
                    <button
                        type="submit"
                        disabled={updatingCreds}
                        className="w-full bg-black text-white font-bold uppercase tracking-[0.2em] text-xs py-4 hover:bg-gold-500 transition-colors duration-300 flex justify-center items-center shadow-lg"
                    >
                        {updatingCreds ? <Loader2 className="animate-spin h-4 w-4" /> : <span className="flex items-center"><Save className="h-4 w-4 mr-2" /> Update Credentials</span>}
                    </button>
                </form>
            </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;