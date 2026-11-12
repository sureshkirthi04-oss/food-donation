import React from 'react';
import { CheckCircle, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-emerald-500 shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />,
    info: <Info className="w-5 h-5 text-blue-500 shrink-0" />
  };

  const bgStyles = {
    success: 'bg-emerald-50 border-emerald-200 text-emerald-900',
    error: 'bg-rose-50 border-rose-200 text-rose-900',
    info: 'bg-blue-50 border-blue-200 text-blue-900'
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-md animate-bounceGentle">
      <div className={`flex items-start gap-3 p-4 rounded-xl border shadow-xl ${bgStyles[toast.type || 'success']}`}>
        {icons[toast.type || 'success']}
        <div className="flex-1 pr-2">
          <p className="font-semibold text-sm">{toast.title}</p>
          {toast.message && <p className="text-xs mt-0.5 opacity-90">{toast.message}</p>}
        </div>
        <button
          onClick={onClose}
          className="text-slate-400 hover:text-slate-600 transition p-1 -mr-1 -mt-1 rounded-lg"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

